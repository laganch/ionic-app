import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import {BehaviorSubject} from "rxjs";
import {LoginResponse, UserControllerService, UserDto} from "../../../../sdk/anambra-api-sdk";
import {Constant} from "../Constant";
import * as moment from "moment";
import PermissionsEnum = LoginResponse.PermissionsEnum;
import {ChangePasswordComponent} from "../change-password/change-password.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // @ts-ignore
  private static user: BehaviorSubject<UserDto | null> = new BehaviorSubject(null);
  public static _user: UserDto;
  private static initialized: boolean;

  constructor(private router: Router,
              private userControllerService: UserControllerService) {
    AuthenticationService.user.subscribe((user: any) => {
      if (user === undefined) {
        return;
      }
      AuthenticationService.initialized = true;
      AuthenticationService._user = user;
    });
  }

  public logout(redirect: boolean = true){
    this.userControllerService.logout({id:this.getUser().id}).subscribe( res => {
      localStorage.removeItem(Constant.USER_DATA)
      localStorage.removeItem(Constant.LOGGED_IN_USER)
      localStorage.removeItem(Constant.SESSION_TIMER)
      if (redirect) {
        this.router.navigate(['/users']);
      }
    }, error => {
      localStorage.removeItem(Constant.USER_DATA)
      localStorage.removeItem(Constant.LOGGED_IN_USER)
      localStorage.removeItem(Constant.SESSION_TIMER)
      if (redirect) {
        this.router.navigate(['/users']);
      }
    });

  }

  public login(data: LoginResponse, route: string) {
    localStorage.setItem(Constant.LOGGED_IN_USER, data.token as string)
    localStorage.setItem(Constant.USER_DATA, JSON.stringify(data));
    localStorage.setItem(Constant.SESSION_TIMER, JSON.stringify(moment(Date.now()).add(5, 'hours').subtract(2, 'minutes')))
    this.router.navigate([route]);
  }

  get isLoggedIn(): boolean {
    return !!(localStorage.getItem(Constant.USER_DATA));
  }

  getToken(): string | null  {
    return localStorage.getItem(Constant.LOGGED_IN_USER);
  }

  getUser(): LoginResponse | null {
    if (!this.isLoggedIn) return null;
    return (JSON.parse(localStorage.getItem(Constant.USER_DATA)));
  }

  get isSuperAdmin(): boolean {
    return (this.getUser().role == 'SUPER_ADMIN')
  }

  public hasPermission(permissionName: string | PermissionsEnum) {
    return this.getUser().permissions.filter((it: string) => it === permissionName).length;
  }

  public hasAnyPermission(permissions: string[] | PermissionsEnum[]) {
    for (let permission of permissions) {
      if (this.hasPermission(permission)) {
        return true;
      }
    }
    return false;
  }

  public forbidAccess() {
    this.router.navigate(['/forbidden']);
  }

  // public updateUserPassword(){
  //   let cuModalRef = this.modalService.show(ChangePasswordComponent,{
  //     initialState: {
  //       username:this.getUser().username,
  //     },
  //     backdrop: "static",
  //     class: 'modal-sm modal-dialog-centered'
  //   });
  //   cuModalRef?.content?.onConfirmClicked.subscribe(v => {
  //     cuModalRef.hide();
  //     this.logout();
  //   });
  // }
}

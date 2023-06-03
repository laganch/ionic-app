import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LoginRequestDto, UserControllerService } from 'sdk/anambra-api-sdk';
import { Constant } from 'src/app/shared/Constant';
import { AuthenticationService } from 'src/app/shared/auth/authentication.service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss'],
})
export class UserLandingComponent  implements OnInit {
  form: FormGroup;
  working: boolean = false;
  isPasswordInvalid = false;
  showErrorMessageTrigger = false;
  errMessage:string;



  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userControllerService: UserControllerService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
    localStorage.removeItem(Constant.USER_DATA);
    localStorage.removeItem(Constant.LOGGED_IN_USER);
  }

  getControl(controlName: string): FormControl {
    return <FormControl>this.form.get(controlName)!;
  }

  hasAccess(permissions:string[]){
    return this.authenticationService.hasAnyPermission(permissions)
  }

  Login(){
    this.working = true;
    const username: string = this.getControl('username').value.trim();
    const password: string = this.getControl('password').value.trim();
    const dto: LoginRequestDto = {username:username, password:password}
    const url = "/login"
    this.apiService.suppressAlertError = true;
    this.apiService.post_(url, dto).subscribe(response => {
      this.working = false;
      localStorage.setItem(Constant.USER_DATA, JSON.stringify(response));
      localStorage.setItem(Constant.LOGGED_IN_USER, response.token);
      localStorage.setItem(Constant.SESSION_TIMER, JSON.stringify(moment(Date.now()).add(5, 'hours').subtract(2, 'minutes')));
        if(this.hasAccess(['CAN_ACCESS_INFORMAL_SECTOR'])){
          this.router.navigate(['super_admin/dashboard'])
        }else {
           this.router.navigate(['/users/dashboard'])
        }
    }, error => {
      this.working = false;
      this.showErrorMessage('Invalid username or password');
    });
  }

  showErrorMessage(error: any) {
    this.errMessage = error;
    this.showErrorMessageTrigger = true;
    window.scroll(0, 0);
    setTimeout(() => {
      this.showErrorMessageTrigger = false;
    }, 5000);
  }

  getErrorMessage() {
    return this.errMessage;
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(
        protected readonly router: Router,
        protected readonly authenticationService: AuthenticationService
    ) {
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authenticationService.isLoggedIn) {
      return this.router.navigate(['/users']);
    }else {
      let user = this.authenticationService.getUser()
      if(user != null) {
        if (!user) {
          return false;
        } 
        // else if (user.userVerified == false){
        //   this.authenticationService.updateUserPassword();
        // }

        var allowedPermissions: RoutePermissionRestriction[] = (route.data['permissions'] as RoutePermissionRestriction[]) ?? [];
        if (!allowedPermissions || allowedPermissions.length < 1) {
          return true;
        }
        for (let i = 0; i < allowedPermissions.length; i++) {
          let hasRestrictedPermissions = (allowedPermissions[i].permissions?.length ?? 0) > 0;
          if (!hasRestrictedPermissions) {
            return true;
          }
          if (hasRestrictedPermissions && this.authenticationService.hasAnyPermission(allowedPermissions[i].permissions)) {
            return true;
          }
        }
        this.authenticationService.forbidAccess();
      }else {
        this.authenticationService.forbidAccess();
        return false;
      }
    }
    return this.authenticationService.isLoggedIn;
  }




}
export interface RoutePermissionRestriction {
  permissions: string[]
}

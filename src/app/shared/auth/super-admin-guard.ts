import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthenticationService} from "./authentication.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {
  constructor(
    protected readonly router: Router,
    protected readonly authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticationService.isSuperAdmin) {
      // this.toaster.error(`You don't have permission to view that page`, 'Unauthorized');
      return true;
    }
    else if (this.authenticationService.getUser().role == "CROS_ADMIN"){
      return this.router.navigate(['super_admin']);
    }
    return this.router.navigate(['/users/dashboard'])
  }

}

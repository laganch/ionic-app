import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLandingComponent } from "./user-landing/user-landing.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {
      path: '',
      component: UserLandingComponent,
    } ,   
    {
      path: 'dashboard',
      component: DashboardComponent,
    } 
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}
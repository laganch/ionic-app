import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { UserLandingComponent } from "./user-landing/user-landing.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SellModalComponent } from "src/app/shared/sell-modal/sell-modal.component";
import { SuccessComponent } from "src/app/shared/success/success.component";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      UserRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    exports: [
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [UserLandingComponent, DashboardComponent, SellModalComponent, SuccessComponent]
  })
  export class UserModule {}
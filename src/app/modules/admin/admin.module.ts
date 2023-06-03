import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AdminRoutingModule } from "./admin-routing.module";
import { NgModule } from "@angular/core";
import { AdminLandingComponent } from "./admin-landing/admin-landing.component";
import { AdminLandingMainComponent } from "./admin-landing-main/admin-landing-main.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      AdminRoutingModule
    ],
    declarations: [AdminLandingComponent, AdminLandingMainComponent]
  })
  export class AdminModule {}
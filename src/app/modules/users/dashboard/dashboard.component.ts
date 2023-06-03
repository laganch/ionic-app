import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CountDto, SaleDto, UserControllerService } from 'sdk/anambra-api-sdk';
import { AuthenticationService } from 'src/app/shared/auth/authentication.service';
import { SellModalComponent } from 'src/app/shared/sell-modal/sell-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  firstName: string;
  working: boolean = false;
  list: CountDto;
  dateFrom: string;
  dateTo: string;

  constructor(private authenticationService: AuthenticationService,
              private userControllerService: UserControllerService,
              private fb: FormBuilder,
              private modalCtrl: ModalController,
              private router: Router
              ) { }

  ngOnInit(): void {

    this.firstName = this.authenticationService.getUser().firstName;
  }



  async showModal(){
    const modal = await this.modalCtrl.create({
      component:SellModalComponent,
    })
    await modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmblemSalesService, SaleDto } from 'sdk/anambra-api-sdk';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-sell-modal',
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.scss'],
})
export class SellModalComponent  implements OnInit {

  showErrorMessageTrigger = false;
  errMessage:string;
  form: FormGroup;
  constructor(
    private modalCtrl:ModalController,
    private apiService: ApiService,
    private fb: FormBuilder,
    private emblemCtrl:EmblemSalesService,) { }

  isAlertOpen = false;
  isErrorOpen = false;
  ngOnInit() {
    this.form = this.fb.group({
      type: ['' , Validators.required],
      code: ['' , Validators.required],
      tcode: ['' , Validators.required],
    });
  }
  dismisModal(){
    this.modalCtrl.dismiss();
  }

  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.modalCtrl.dismiss();
    this.isAlertOpen = isOpen;
  }
  setError(isOpen: boolean) {
    this.isErrorOpen = isOpen;
  }

  sellEmblem(){
    let sales = this.Search();
    const url = "/code/search"
    this.apiService.suppressAlertError = true;
    this.apiService.post(url, sales).subscribe(response => {
      this.errMessage = response.message;
      if(response.responseCode == "0"){
        this.setError(true);
      }else{
        this.setOpen(true);
      }
    }, error => {
      this.showErrorMessage('Invalid username or password');
    });
  }

  Search():SaleDto {
    return {
      type: this.form.controls['type'].value.trim(),
      code: this.form.controls['code'].value.trim(),
      tcode:this.form.controls['tcode'].value.trim()
    }
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

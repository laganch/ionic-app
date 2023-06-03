import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {distinctUntilChanged} from "rxjs";
import {PasswordDto, UserControllerService} from "../../../../sdk/anambra-api-sdk";
// import {SuccessModalComponent} from "../success-modal/success-modal.component";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{

  form!: FormGroup;
  working: boolean = false;
  showErrorMessageTrigger = false;
  errMessage:string | undefined;
  passwordC: boolean = false;
  passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  @Output()
  onConfirmClicked = new EventEmitter();

  @Input() username:string | undefined;

  constructor(private fb: FormBuilder,
              private bsModalRef: BsModalRef,
              private modalService: BsModalService,
              private userControllerService: UserControllerService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      password:['', Validators.required],
      newPassword:['', [Validators.required, Validators.pattern(this.passwordRegx)]],
      confirmPassword:['', Validators.required],
    });

    this.form.controls['confirmPassword'].valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
      this.passwordC = this.form.controls['newPassword'].value != value;
    });
  }

  submit(){
  //   this.form.markAllAsTouched();
  //   if (this.form.valid){
  //     this.working = true;
  //     let dto = this.createDto();
  //     this.userControllerService.changePassword({passwordDto:dto}).subscribe( res => {
  //       this.working = false;
  //       let bsModalRef = this.modalService.show(SuccessModalComponent, {
  //         initialState: {
  //           body: 'Password updated successfully',
  //         },
  //         class: 'modal-sm modal-dialog-centered'
  //       });

  //       bsModalRef?.content?.onConfirmClicked.subscribe(v => {
  //         bsModalRef.hide();
  //         this.onConfirmClicked.emit();
  //       });
  //     }, error => {
  //       this.working = false;
  //       this.showErrorMessage('Sorry we are unable to process your request at this time');
  //     })
  //   } else {
  //     this.showErrorMessage('Please fill the form correctly');
  //   }
  }

  createDto(): PasswordDto{
    return {
      username: this.username,
      oldPassword: this.form.controls['password'].value,
      newPassword: this.form.controls['newPassword'].value,
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

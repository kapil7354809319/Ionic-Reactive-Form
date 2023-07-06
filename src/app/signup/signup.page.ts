import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { passwordMatch } from "../../validators/passwordMatch";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  SignupForm!: FormGroup;
  isSubmitted = false;
  error!: string;
  passwordType: string = 'password';
  passwordshow: boolean = false;
  show: boolean = true;
  constructor(public formBuilder: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
    this.SignupForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirm_password: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    },{validator: passwordMatch('password', 'confirm_password')})
  }

  get errorControlDoctors() {
    return this.SignupForm.controls;
  }
  public togglePassword() {
    if (this.passwordshow) {
      this.passwordshow = false;
      this.show = true;
      this.passwordType = 'password';
    } else {
      this.passwordshow = true;
      this.show = false;
      this.passwordType = 'text';
    }

  }
  submitForm() {
      this.isSubmitted = true;
      if (!this.SignupForm.valid) {
        console.log('Please provide all the required values!')
        return false;
      } else {
        alert("Success");
        return true;
      }
    }
}

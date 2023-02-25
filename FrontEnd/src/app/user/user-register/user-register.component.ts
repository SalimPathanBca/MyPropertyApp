import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    }, this.matchConfirmPassword);
  }

  get userName()
  {
    return this.registerForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registerForm.get('email') as FormControl;
  }
  get password()
  {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword()
  {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
  get mobile()
  {
    return this.registerForm.get('mobile') as FormControl;
  }

  matchConfirmPassword(fg: AbstractControl)
  {
      return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched : true};
  }

  onSubmit()
  {
      console.log(this.registerForm);
  }

}

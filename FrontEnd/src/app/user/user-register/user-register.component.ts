import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user! : User;
  userSubmitted!: boolean;

  constructor(private fb: FormBuilder, private userService: UserServiceService, private alertService: AlertifyService)
   {

   }

  ngOnInit() {
      this.createRegisterForm();
  }

  createRegisterForm()
  {
      this.registerForm = this.fb.group({
        userName: [null, [Validators.required, Validators.minLength(5)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]
      }, { validators: this.matchConfirmPassword });
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

  matchConfirmPassword(fg: FormGroup) : Validators
  {
      return fg.get('password')!.value === fg.get('confirmPassword')!.value ? false : {notmatched : true};
  }

  userData(): User{
    return this.user = {
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        mobile: this.mobile.value
    }
  }

  onSubmit()
  {
    console.log(this.registerForm.value);
    this.userSubmitted = true;
    if(this.registerForm.valid)
    {
      this.userService.addUser(this.userData());
      this.registerForm.reset();
      this.alertService.success("Record Successfully Inserted");
      this.userSubmitted=false;
    }
    else{
            this.alertService.error("Please fill the form to save");
    }
  }

  onReset()
  {
        this.registerForm.reset();
        this.userSubmitted=false;
  }



}

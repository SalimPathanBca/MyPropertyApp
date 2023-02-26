import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

loginForm!: FormGroup;
isSubmitted! : boolean;
loggedinUser!: User;


  constructor(private alertService: AlertifyService, private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm()
  {
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get userName()
  {
    return this.loginForm.get('userName') as FormControl;
  }
  get password()
  {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit()
  {
    this.isSubmitted = true;
    if(this.loginForm.valid)
    {
      var result = this.userService.findUser(this.userName.value, this.password.value);
      if(result != null)
      {

        this.isSubmitted = false;
        this.loggedinUser = result;
        this.alertService.success("Login Done! Welcome : <br />"+ this.loggedinUser.userName
        + "<br />"+ this.loggedinUser.email
        + "<br />"+ this.loggedinUser.mobile + "<br />");
      }
      else
      {
        this.alertService.error("Invalid User Name or Password. Please try again");
      }

    }
    else
    {
      this.alertService.error("Pleae enter User Name or Password to Login");
    }

  }

  onCancel()
  {
    this.loginForm.reset();
    this.isSubmitted=false;
  }


}

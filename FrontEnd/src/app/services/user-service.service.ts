import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

userLogin!: User;
userExists!: boolean;
user! : User;

constructor() {
 }

addUser(user: User)
{
    let users=[];
    if(localStorage.getItem('users'))
    {
      users = JSON.parse(localStorage.getItem('users')!);
      //users = [user, ...users]; Add items at the beginning for the array
      users = [ ...users,user];
    }
    else
    {
      users = [user];
    }
    localStorage.setItem('users', JSON.stringify(users));
}

findUser(userName: string, password: string)
{
    let users=[];
    this.userExists = false;
    if(localStorage.getItem('users'))
    {
      users = JSON.parse(localStorage.getItem('users')!);
      for(let i=0; i<users.length; i++)
      {
        this.user = users[i];
        if(this.user.userName === userName && this.user.password === password){
          this.userExists = true;
          this.userLogin = this.user;
          break;
      }
    }
    }

    return this.userLogin;
}

}

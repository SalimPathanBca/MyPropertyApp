import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router, private alerts: AlertifyService) { }

  userName: any;

  ngOnInit() {
    this.userName = localStorage.getItem('token')
  }

  onLogIn()
  {
    this.userName = localStorage.getItem('token');
    return this.userName;
  }

  onLogout()
  {
    this.userName="";
    localStorage.removeItem('token');
    this.alerts.error("You logged out successfully");
    this.route.navigate(['/']);
  }

}

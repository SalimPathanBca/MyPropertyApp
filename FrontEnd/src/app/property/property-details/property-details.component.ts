import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public propertyId: any;

  ngOnInit() {
    //convert string into Number using Number function
    this.propertyId = Number(this.route.snapshot.params['id']);

    //convert string into Number using + sign
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
     (params) => {
      this.propertyId = +params['id'];
    });


  }

  onSelectNextPage()
  {
      this.propertyId += 1;
      this.router.navigate(["property-details", this.propertyId]);
  }

}

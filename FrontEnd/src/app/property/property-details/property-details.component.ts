import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public propertyId: any;

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id'];
  }

}

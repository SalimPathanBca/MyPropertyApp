
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent=1;
  Properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private housingService: HousingService) {  }
  ngOnInit(): void {
    console.log(this.route.snapshot.url.toString());
    if(this.route.snapshot.url.toString())
    {
        this.SellRent = 2; //Means we have clicked on Rent Tab
    }
    else{
        this.SellRent = 1;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties =  data;
      }, error => {
        console.log(error);
      });
  }



// ngOnInit(): void{
//   this.http.get('data/properties.json').subscribe(data => console.log(data) );
// }

}

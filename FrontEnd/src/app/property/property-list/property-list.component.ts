import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  Properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Mumu Manzil",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Sams Manzil",
      "Type": "Apartment",
      "Price": 10000
    },
    {
      "Id": 3,
      "Name": "Mumu Manzil",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 4,
      "Name": "Zafarkhan Manzil",
      "Type": "House",
      "Price": 15000
    },
    {
      "Id": 5,
      "Name": "Noor Manzil",
      "Type": "Villa",
      "Price": 16000
    },
    {
      "Id": 6,
      "Name": "Hum Manzil",
      "Type": "House",
      "Price": 10000
    }

  ]
}

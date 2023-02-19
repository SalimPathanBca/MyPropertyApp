import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]>  {
      return this.http.get('data/properties.json').pipe(
        map((data: any) =>{
              const propertiesArray: Array<IProperty> = [];
                for(const property in data)
              {
                if(data.hasOwnProperty(property) && data[property].SellRent === SellRent )
                {
                  propertiesArray.push(data[property]);
                }
              }
              return propertiesArray;
          })
      );
  }

}

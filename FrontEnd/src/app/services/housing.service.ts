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

  getAllProperties(): Observable<IProperty[]>  {
      return this.http.get('data/properties.json').pipe(
        map((data: any) =>{
              const propertiesArray: Array<IProperty> = [];
                for(const property in data)
              {
                if(data.hasOwnProperty(property))
                {
                  propertiesArray.push(data[property]);
                }
              }
              return propertiesArray;
          })
      );
  }

}

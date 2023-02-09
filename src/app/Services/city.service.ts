import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../Models/City';


const C_API = environment.apiUrl+/City/;
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]>{
    return this.http.get<City[]>(C_API + "getAllCities");
  }
  getCityById(CityId: number): Observable<City>{
    return this.http.get<City>(C_API + `getCityById/${CityId}`);
  }
}

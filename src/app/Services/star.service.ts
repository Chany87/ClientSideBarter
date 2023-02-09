import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Star } from '../Models/Star';
import {Observable} from 'rxjs';

const S_API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private http :HttpClient) { }
 
  GetAllStars(): Observable<Star>{
    return this.http.get<Star>(S_API + "GetAllStars");
  }
  getStarById(StarId: number): Observable<Star>{
    return this.http.get<Star>(S_API + `getStarById/${StarId}`);
  }
  AddStar(Star:Star): Observable<boolean>{
    return this.http.post<boolean>(S_API + "AddStar", Star);
  }
  UpdateStar(StarId: number, Star:Star): Observable<boolean>{
    return this.http.put<boolean>(S_API + `UpdateStar/${StarId}`, Star);
  }
  deleteStar(StarId:number): Observable<boolean>{
    return this.http.delete<boolean>(S_API + "deleteStar");
  }
}

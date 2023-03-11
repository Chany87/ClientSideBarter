import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryUser } from '../Models/CategoryUser';
const C_API = environment.apiUrl + '/CategoryUser/'

@Injectable({
  providedIn: 'root'
})

export class CategoryUserService {
  constructor(private http : HttpClient) { }
  GetUserByCategoryId(CategoryId:number): Observable<CategoryUser[]>{
        return this.http.get<CategoryUser[]>(C_API + `getUserByCategoryId/${CategoryId}`);
      }
}

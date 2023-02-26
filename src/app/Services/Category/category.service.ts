import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../Models/Category';

const C_API = environment.apiUrl+'/Category/';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories! :Category[];

  constructor(private http:HttpClient) { }

  GetAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(C_API + "GetAllCategories");
  }

  getCategoryById(CategoryId:number): Observable<Category>{
    return this.http.get<Category>(C_API + `getCategoryById/${CategoryId}`);
  }

  AddCategory(category: Category) :Observable<boolean>{
    return this.http.post<boolean>(C_API + "addCategory" ,category);
  }

  updateCategory(CategoryId :number, category :Category): Observable<boolean>{
    return this.http.put<boolean>(C_API + `updateCategory/${CategoryId}` ,category);
  }

  deleteCategory(CategoryId: number) :Observable<boolean>{
    return  this.http.delete<boolean>(C_API + "DeleteCategory");
  }
}

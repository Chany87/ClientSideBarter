import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opinion } from 'src/app/Models/Opinion';

const O_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(private http:HttpClient) { }

  GetAllOpinions() :Observable<Opinion[]>{
    return this.http.get<Opinion[]>(O_API + "GetAllOpinions");
  }

  GetOpinionById(OpinionId: number): Observable<Opinion>{
    return this.http.get<Opinion>(O_API + `GetOpinionById/${OpinionId}`);
  }

  Addopinion(Opinion: Opinion): Observable<boolean>{
    return this.http.post<boolean>(O_API + "AddOpinion", Opinion);
  }

  updateOpinion(opinionId: number, Opinion : Opinion): Observable<boolean>{
     return this.http.put<boolean>(O_API + `UpdateOpinion/${opinionId}`, Opinion);
  }

  deleteOpinion(opinionId : number):Observable<boolean>{
    return this.http.delete<boolean>(O_API + "deleteOpinion");
  }

}

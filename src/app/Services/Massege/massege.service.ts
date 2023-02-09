import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Massege } from 'src/app/Models/Massage';
const M_API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MassegeService {

  constructor(private http : HttpClient) { }

  GetAllMassesges() : Observable<Massege[]>{
    return this.http.get<Massege[]>(M_API + "GetAllMassesges");
  }

  GetMassegeById(MassageId:number): Observable<Massege>{
    return this.http.get<Massege>(M_API + `GetMassegeById/${MassageId}`);
  }

  AddMassege(Massage: Massege): Observable<boolean>{
    return this.http.post<boolean>(M_API + "AddMassege", Massage);
  }

  UpdateMassege(MassageId:number, Massage:Massege): Observable<boolean>{
    return this.http.put<boolean>(M_API + `UpdateMassege/${MassageId}`, Massage);
  }

  DeleteMassege(MassageId:number): Observable<boolean>{
    return this.http.delete<boolean>(M_API + "DeleteMassege");
  }

}


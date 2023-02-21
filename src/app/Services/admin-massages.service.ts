import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminMessage } from '../Models/AdminMassage';

const AD_API = environment.apiUrl+'/AdminMessage';

@Injectable({
  providedIn: 'root'
})

export class AdminMassagesService {

  constructor(private http: HttpClient) { }

  GetAllMassesges() : Observable<AdminMessage[]>{
    return this.http.get<AdminMessage[]>(AD_API + "/GetAllMasseges");
  }
  
  GetMassegeById(MassageId:number): Observable<AdminMessage>{
    return this.http.get<AdminMessage>(AD_API + `/GatMassegeById/${MassageId}`);
  }
  AddAdminMessage(adminMessage:AdminMessage) : Observable<boolean>{
    debugger
    return this.http.post<boolean>(AD_API + "/AddAdminMessage", adminMessage);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../Models/Message';

const AD_API = environment.apiUrl+'/Messages';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(private http: HttpClient) { }

  GetAllMessages() : Observable<Message[]>{
    return this.http.get<Message[]>(AD_API + "/GetAllMessages");
  }
  
  GetMessageById(MessageId:number): Observable<Message>{
    return this.http.get<Message>(AD_API + `/GatMessegeById/${MessageId}`);
  }
  AddMessage(message:Message) : Observable<boolean>{
    debugger
    return this.http.post<boolean>(AD_API + "/AddMessage", message);
  }

  
  UpdateMessege(MessageId:number, Massage:Message): Observable<boolean>{
    return this.http.put<boolean>(AD_API + `UpdateMessege/${MessageId}`, Massage);
  }

  DeleteMessege(MassageId:number): Observable<boolean>{
    return this.http.delete<boolean>(AD_API + "DeleteMessege");
  }
}

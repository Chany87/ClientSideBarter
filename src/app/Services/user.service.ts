import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../Models/User';
import { UserCreateRequest } from '../Models/UserCreateRequest';


const U_API = environment.apiUrl + '/User/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SiteManager:boolean=false
  ifUser:boolean=false
  thisUser!:user
  users!:user[];
  
  constructor(private Http:HttpClient) { }

  GetAllUsers(): Observable<user[]>{
    return this.Http.get<user[]>(U_API + "GetAllUsers");
  }

  GetUserById(UserId:number): Observable<user>{
  
    return this.Http.get<user>(U_API + `UserById/${UserId}`);
  }
  GetUserByEmailAndPassword(Email:string,Password :string): Observable<user>{

    return  this.Http.get<user>(U_API + `GetUserByEmailAndPassword/${Email}/${Password}`);
 
    }
    GetUserByEmail(Email:string): Observable<user>{
      return this.Http.get<user>(U_API + `GetUserByEmail/${Email}`);
     
    }

  AddUser(user:UserCreateRequest) : Observable<user>{
    return this.Http.post<user>(U_API + "AddUser", user);
  }

  UpdateUser(userId: number, user:user) :Observable<boolean>{
    return this.Http.put<boolean>(U_API + `update/${userId}`, user);
  }

  deleteUser(userId:number):Observable<boolean>{
    return this.Http.delete<boolean>(U_API + "DeleteUser")
  }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Publication } from 'src/app/Models/Publication';
const P_API = environment.apiUrl+'/Publication/';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  getAllPublications(): Observable<Publication>{
    return this.http.get<Publication>(P_API + "getAllPublications");
  }
  getPublicationById(publicationId: number): Observable<Publication>{
    return this.http.get<Publication>(P_API + `getPublicationById/${publicationId}`);
  }
  AddPublication(publication:Publication): Observable<boolean>{
    return this.http.post<boolean>(P_API + "AddPublication", publication);
  }
  updatePublication(publicationId: number, publication:Publication): Observable<boolean>{
    return this.http.put<boolean>(P_API + `updatePublication/${publicationId}`, publication);
  }
  DeletePublication(publicationId: number): Observable<boolean>{
    return this.http.delete<boolean>(P_API + "DeletePublication");
  }

  GetPublicationsByCategoryId(PublicationId:number): Observable<Publication[]>{
    return this.http.get<Publication[]>(P_API + `GetPublicationsByCategoryId/${PublicationId}`);
  }
}


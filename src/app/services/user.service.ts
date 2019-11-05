import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Registration } from '../models/registration';
import { ConfigurationService } from './configuration.service';
import { Fisher } from '../models/fisher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  private apiUserEndpoint: string;
  private apiAccountsEndpoint: string;


  constructor(
    private http: HttpClient,
    private configService: ConfigurationService) {
    this.apiUrl = configService.getApiBaseUrl();
    this.apiUserEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('USER')}`;
    this.apiAccountsEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('ACCOUNTS')}`;
    console.log(this.apiUrl);
    console.log(this.apiUserEndpoint);
    console.log(this.apiAccountsEndpoint);
  }


  getAll(): Observable<any>  {
    return this.http.get<User[]>(this.apiAccountsEndpoint);
  }

  getById(id: number): Observable<any>  {
    return this.http.get( this.apiUserEndpoint );
  }

  register(user: Registration): Observable<any>  {
    return this.http.post( this.apiAccountsEndpoint, user );
  }

  update(user: Fisher, id: number): Observable<any>  {
    return this.http.put( this.apiUserEndpoint, user );
  }

  uploadUserAvatar(file): Observable<any> {
    return this.http.post( this.apiUserEndpoint, file );
  }

  // delete(id: number) {
  //   return this.http.delete(`${this.apiAccountsEndpoint}/${id}`);
  // }
}

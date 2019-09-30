import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Registration } from '../models/registration';
import { ConfigurationService } from './configuration.service';
import { Fisher } from '../models/fisher';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  private apiUserEndpoint: string;
  private apiAccountsEndpoint: string;


  constructor(private http: HttpClient, private configService: ConfigurationService) {
    this.apiUrl = configService.getApiBaseUrl();
    this.apiUserEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('USER')}`;
    this.apiAccountsEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('ACCOUNTS')}`;
  }


  getAll() {
    return this.http.get<User[]>(this.apiAccountsEndpoint);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUserEndpoint}/${id}`);
  }

  register(user: Registration) {
    return this.http.post(this.apiAccountsEndpoint, user);
  }

  update(user: Fisher, id: number) {
    return this.http.put(`${this.apiUserEndpoint}/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiAccountsEndpoint}/${id}`);
  }
}

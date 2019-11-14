import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Registration } from '../models/registration';
import { ConfigurationService } from './configuration.service';
import { Fisher } from '../models/fisher';
import { ResponseApi } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  private apiUserEndpoint: string;
  private apiAccountsEndpoint: string;
  private apiAvatarEndpoint: string;


  constructor(
    private http: HttpClient,
    private configService: ConfigurationService) {
    this.apiUrl = configService.getApiBaseUrl();
    this.apiUserEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('USER')}`;
    this.apiAccountsEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('ACCOUNTS')}`;
    this.apiAvatarEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('USER')}${this.configService.getApiEndpoint('AVATAR')}`;

    console.log(this.apiUrl);
    console.log(this.apiUserEndpoint);
    console.log(this.apiAccountsEndpoint);
    console.log(this.apiAvatarEndpoint);
  }


  getAll() {
    return this.http.get<User>(this.apiAccountsEndpoint);
  }

  getById() {
    return this.http.get<ResponseApi<Fisher>>(this.apiUserEndpoint);
  }

  register(user: Registration) {
    return this.http.post(this.apiAccountsEndpoint, user);
  }

  update(user: Fisher) {
    return this.http.put(this.apiUserEndpoint, user);
  }

  uploadUserAvatar(file: FormData) {
    return this.http.post(this.apiAvatarEndpoint, file);
  }

  deleteUserAvatar() {
    return this.http.delete(this.apiAvatarEndpoint);
  }
}

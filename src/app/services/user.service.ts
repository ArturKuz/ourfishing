import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Registration } from '../models/registration';
import { Fisher } from '../models/fisher';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000';


  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}/api/Accounts`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/api/FisherProfile/${id}`);
  }

  register(user: Registration) {
    return this.http.post(`${this.apiUrl}/api/Accounts`, user);
  }

  update(user: Fisher, id: number) {
    return this.http.put(`${this.apiUrl}/api/FisherProfile/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Accounts/${id}`);
  }
}

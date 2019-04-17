import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

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
      return this.http.get(`${this.apiUrl}/api/Accounts/${id}`);
  }

  register(user: User) {
      return this.http.post(`${this.apiUrl}/api/Accounts`, user);
  }

  update(user: User) {
      return this.http.put(`${this.apiUrl}/api/Accounts/${user.id}`, user);
  }

  delete(id: number) {
      return this.http.delete(`${this.apiUrl}/api/Accounts/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`/api/Accounts`);
  }

  getById(id: number) {
      return this.http.get(`/api/Accounts/${id}`);
  }

  register(user: User) {
      return this.http.post(`/api/Accounts`, user);
  }

  update(user: User) {
      return this.http.put(`/api/Accounts/${user.id}`, user);
  }

  delete(id: number) {
      return this.http.delete(`/api/Accounts/${id}`);
  }
}

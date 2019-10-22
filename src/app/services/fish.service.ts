import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private apiUrl: string;
  private apiFishEndpoint: string;

  constructor(
    private configService: ConfigurationService,
    private http: HttpClient,
    ) {
    this.apiUrl = configService.getApiBaseUrl();
    this.apiFishEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('FISH')}`;
    console.log(this.apiUrl);
    console.log(this.apiFishEndpoint);
  }

  getFishList(page: number, size: number) {
    return this.http.get<any>(`${this.apiFishEndpoint}`, {params: this.setParams(page, size)});
  }

  getFishById(id: number) {
    return this.http.get<any>(`${this.apiFishEndpoint}/` + id);
  }

  setParams(page, size) {
    let params;
    return params = new HttpParams()
                    .set('pageNumber', page)
                    .set('pageSize', size);
  }
}

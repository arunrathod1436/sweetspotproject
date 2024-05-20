// src/app/crud.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:3000/items'; // Adjust URL to your API endpoint

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  updateItem(id: number, item: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

// formateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from '../models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private apiUrl = 'http://localhost:7070'; 

  constructor(private http: HttpClient) { }

  getAllFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.apiUrl}/formateurs`);
  }

  getFormateurById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.apiUrl}/formateurs/${id}`);
  }

  addFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(`${this.apiUrl}/formateurs`, formateur);
  }

  updateFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiUrl}/formateurs/${formateur.id}`, formateur);
  }

  deleteFormateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/formateurs/${id}`);
  }
}

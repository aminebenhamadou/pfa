// formateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from '../models/Formateur';
import * as XLSX from 'xlsx';
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

  downloadExcel(formateurs: Formateur[]): Observable<Blob> {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(formateurs);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return new Observable((observer) => {
      observer.next(blob);
      observer.complete();
    });

    
}
}

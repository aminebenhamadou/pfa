// beneficiaire.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiaire } from '../models/Beneficiaire';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {
  private apiUrl = 'http://localhost:7070'; 

  constructor(private http: HttpClient) { }

  getAllBeneficiaires(): Observable<Beneficiaire[]> {
    return this.http.get<Beneficiaire[]>(`${this.apiUrl}/beneficiaires`);
  }

  getBeneficiaireById(id: number): Observable<Beneficiaire> {
    return this.http.get<Beneficiaire>(`${this.apiUrl}/beneficiaires/${id}`);
  }

  addBeneficiaire(beneficiaire: Beneficiaire): Observable<Beneficiaire> {
    return this.http.post<Beneficiaire>(`${this.apiUrl}/beneficiaires`, beneficiaire);
  }

  updateBeneficiaire(beneficiaire: Beneficiaire): Observable<Beneficiaire> {
    return this.http.put<Beneficiaire>(`${this.apiUrl}/beneficiaires/${beneficiaire.id}`, beneficiaire);
  }

  deleteBeneficiaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/beneficiaires/${id}`);
    
  }
  downloadExcel(beneficiaires: Beneficiaire[]): Observable<Blob> {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(beneficiaires);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return new Observable((observer) => {
      observer.next(blob);
      observer.complete();
    });

    
}
}

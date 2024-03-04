import { Component } from '@angular/core';
import { FormateurService } from '../services/FormateurService';
import { Formateur } from '../models/Formateur';
@Component({
  selector: 'app-formateurgrid',
  templateUrl: './formateurgrid.component.html',
  styleUrls: ['./formateurgrid.component.css']
})
export class FormateurgridComponent {

  formateurs: Formateur[] = [];
  

  
  constructor(private FormateurService: FormateurService) {}

  ngOnInit(): void {
    this.getAllFormateurs();
  }

  getAllFormateurs(): void {
    this.FormateurService.getAllFormateurs().subscribe(
      (formateurs: Formateur[]) => {
        this.formateurs = formateurs;
      },
      (error) => {
        console.error('Error fetching beneficiaires: ', error);
      }
    );
  }

}

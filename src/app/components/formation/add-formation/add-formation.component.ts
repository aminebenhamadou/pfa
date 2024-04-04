import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/FormationService';
import { Formateur } from '../../../models/Formateur';
import { FormateurService } from 'src/app/services/FormateurService';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  form!: FormGroup;
  formateurs: Formateur[] = [];

  constructor(
    private formationService: FormationService,
    private formateurService: FormateurService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      formateur: ['', Validators.required],
    });

    this.formateurService.getAllFormateurs().subscribe(formateurs => {
      this.formateurs = formateurs;
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const newFormation: Formation = this.form.value; // Assign the form values to newFormation object
      this.formationService.addFormation(newFormation).subscribe(
        (res: any) => {
          console.log('Formation added successfully:', res);
          this.resetForm();
          this.router.navigate(['/formation']);
        },
        (error) => {
          console.error('Error adding formation:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.form.reset();
  }
}

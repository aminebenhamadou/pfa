import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/FormationService';
@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  form!: FormGroup;
  newFormation: Formation = {} as Formation;
  constructor(
    private FormationService: FormationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      beneficiaires: ['', [Validators.required]],
      formateur: ['', [Validators.required]],
    });
  }

 onSubmit(): void {
    this.FormationService.addFormation(this.newFormation).subscribe(
      (res: any) => {
        // Handle success response
        console.log('Formation added successfully:', res);
        // Reset the form after successful submission
        this.resetForm();
        this.router.navigate(['/formation']);
      },
      (error) => {
        // Handle error response
        console.error('Error adding formation:', error);
      }
    );
  }

  resetForm(): void {
    this.form.reset();
  }
}

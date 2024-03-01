import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { BeneficiaireService } from 'src/app/services/BeneficiaireService';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-add-beneficiaire',
  templateUrl: './add-beneficiaire.component.html',
  styleUrls: ['./add-beneficiaire.component.css']
})
export class AddBeneficiaireComponent implements OnInit {
  form!: FormGroup;
  newBeneficiaire: Beneficiaire = {} as Beneficiaire;
  files: File[] = [];
  imageUrl: string = "";
  imageUploaded: boolean = false;

  constructor(
    private beneficiaireService: BeneficiaireService,
    private router: Router,
    private upload: UploadService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      educationLevel: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.uploadFiles();
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadFiles(): void {
    if (!this.files[0]) {
      alert("Please upload an image.");
      return;
    }
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'angular_pfa');
    data.append('cloud_name', 'dtjj1rxjq');
    this.upload.uploadImage(data).subscribe((res: any) => {
      console.log(res);
      this.imageUrl = res.url;
      this.newBeneficiaire.image = res.url; // Mettre à jour l'URL de l'image dans l'objet Beneficiaire
      this.imageUploaded = true;
    });
  }
  

 onSubmit(): void {
    this.beneficiaireService.addBeneficiaire(this.newBeneficiaire).subscribe(
      (res: any) => {
        // Handle success response
        console.log('Beneficiaire added successfully:', res);
        // Reset the form after successful submission
        this.resetForm();
        this.router.navigate(['/beneficiaire']);
      },
      (error) => {
        // Handle error response
        console.error('Error adding beneficiaire:', error);
      }
    );
  }

  resetForm(): void {
    this.form.reset();
  }
}

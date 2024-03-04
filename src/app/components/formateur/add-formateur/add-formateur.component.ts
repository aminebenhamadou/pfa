import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurService } from 'src/app/services/FormateurService';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
  form!: FormGroup;
  newFormateur: Formateur = {} as Formateur;
  files: File[] = [];
  imageUrl: string = "";
  imageUploaded: boolean = false;

  constructor(
    private formateurService: FormateurService,
    private router: Router,
    private upload: UploadService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      domain: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      cin: ['', Validators.required],
      adress: ['', Validators.required],
      image: ['', Validators.required], // Assuming image upload is required
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
      this.newFormateur.image = res.url; // Update the image URL in the Formateur object
      this.imageUploaded = true;
    });
  }

  onSubmit(): void {
    this.formateurService.addFormateur(this.newFormateur).subscribe(
      (res: any) => {
        // Handle success response
        console.log('Formateur added successfully:', res);
        // Reset the form after successful submission
        this.resetForm();
        this.router.navigate(['/formateur']);
      },
      (error) => {
        // Handle error response
        console.error('Error adding formateur:', error);
        // You can also provide user feedback for the error here
      }
    );
  }

  resetForm(): void {
    this.form.reset();
  }
}

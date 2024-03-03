import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { BeneficiaireService } from 'src/app/services/BeneficiaireService';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-edit-beneficiaire',
  templateUrl: './edit-beneficiaire.component.html',
  styleUrls: ['./edit-beneficiaire.component.css']
})
export class EditBeneficiaireComponent implements OnInit {


imageUploaded: boolean = false;
imageUrl: string = "";
files: File[] = [];

  beneficiaire!: Beneficiaire; 
  beneficiaireId: number;

  constructor(
    private beneficiaireService: BeneficiaireService,
    private route: ActivatedRoute,
    private router: Router,
    private upload: UploadService
  ) {
    this.beneficiaireId = 0;
  }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot) {
      const idParam = routeSnapshot.paramMap.get('id');
      if (idParam) {
        this.beneficiaireId = +idParam;
        this.fetchBeneficiaire(this.beneficiaireId);
      }
    }
  }

  fetchBeneficiaire(beneficiaireId: number): void {
    this.beneficiaireService.getBeneficiaireById(beneficiaireId).subscribe(
      (beneficiaire) => {
        this.beneficiaire = beneficiaire;
        this.imageUrl = beneficiaire.image; // Stocker l'URL de l'image actuelle
      },
      (error) => {
        console.error('Error fetching beneficiaire:', error);
      }
    );
  }
  

  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.uploadFiles();
  }
  
  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onRemoveImage(): void {
    // Supprime l'image actuelle en appelant la méthode onRemove
    this.onRemove(this.imageUrl);
    this.imageUrl = ""; // Efface l'URL de l'image actuelle
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
      this.beneficiaire.image = res.url; // Mettre à jour l'URL de l'image dans l'objet Beneficiaire
      this.imageUploaded = true;
    });
  }
  
  

  onSubmit(): void {
    if (this.beneficiaire) {
      this.beneficiaireService.updateBeneficiaire(this.beneficiaire).subscribe(
        () => {
          console.log('Beneficiaire updated successfully');
          this.router.navigate(['/beneficiaire']); 
        },
        (error) => {
          console.error('Error updating beneficiaire:', error);
        }
      );
    }
  }
}

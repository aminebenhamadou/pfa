import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur} from 'src/app/models/Formateur';
import { FormateurService } from 'src/app/services/FormateurService';
import { UploadService } from 'src/app/upload.service';
@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {
  imageUploaded: boolean = false;
  imageUrl: string = "";
  files: File[]=[];
    formateur!: Formateur; 
    formateurId: number;
  
    constructor(
      private FormateurService: FormateurService,
      private route: ActivatedRoute,
      private router: Router,
      private upload: UploadService
    ) {
      this.formateurId = 0;
    }
  
    ngOnInit(): void {
      const routeSnapshot = this.route.snapshot;
      if (routeSnapshot) {
        const idParam = routeSnapshot.paramMap.get('id');
        if (idParam) {
          this.formateurId = +idParam;
          this.fetchFormateur(this.formateurId);
        }
      }
    }
  
    fetchFormateur(formateurId: number): void {
      this.FormateurService.getFormateurById(formateurId).subscribe(
        (formateur) => {
          this.formateur = formateur;
          this.imageUrl = formateur.image; // Stocker l'URL de l'image actuelle
        },
        (error) => {
          console.error('Error fetching formateur:', error);
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
      this.onRemove(this.imageUrl);
      this.imageUrl = ""; 
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
        this.formateur.image = res.url; 
                this.imageUploaded = true;
      });
    }
    
    
  
    onSubmit(): void {
      if (this.formateur) {
        this.FormateurService.updateFormateur(this.formateur).subscribe(
          () => {
            console.log('Formateur updated successfully');
            this.router.navigate(['/formateur']); 
          },
          (error) => {
            console.error('Error updating formateur:', error);
          }
        );
      }
    }
  }
  
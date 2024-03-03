import { Component ,OnInit} from '@angular/core';
import { Formateur } from '../../models/Formateur';
import { FormateurService } from '../../services/FormateurService';
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  formateurs: Formateur[] = [];
  filteredFormateurs: Formateur[] = [];

  constructor(private FormateurService: FormateurService) {}

  ngOnInit(): void {
    this.getAllFormateurs();
  }

  getAllFormateurs(): void {
    this.FormateurService.getAllFormateurs().subscribe(
      (formateurs: Formateur[]) => {
        this.formateurs = formateurs;
        this.filteredFormateurs = [...this.formateurs];
      },
      (error) => {
        console.error('Error fetching formateurs: ', error);
      }
    );
  }

  onDelete(id: number): void {
    // Show confirmation dialog before deleting
    if (confirm('Are you sure you want to delete this formateurs?')) {
      // Call service method to delete beneficiary
      this.FormateurService.deleteFormateur(id).subscribe(
        () => {
          console.log('Formateur deleted successfully');
          // Refresh beneficiary list after deletion
          this.getAllFormateurs();
        },
        (error) => {
          console.error('Error deleting Formateur:', error);
        }
      );
    }
  }
  downloadExcel(): void {
    this.FormateurService.downloadExcel(this.formateurs).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formateurs.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading Excel file: ', error);
      }
    );
  }
 
  searchFormateursById(event: Event): void {
    const target = event.target as HTMLInputElement;
    const id = target.value;
    console.log('Search by ID:', id); // Debug statement
    this.filteredFormateurs = this.formateurs.filter(
      (formateur) => formateur.id.toString().toLowerCase().includes(id.toLowerCase())
    );
    console.log('Filtered formateurs:', this.filteredFormateurs); // Debug statement
}

searchFormateursByName(event: Event): void {
    const target = event.target as HTMLInputElement;
    const name = target.value;
    console.log('Search by Name:', name); // Debug statement
    this.filteredFormateurs = this.formateurs.filter(
      (formateur) => formateur.firstName.toLowerCase().includes(name.toLowerCase()) ||
      formateur.lastName.toLowerCase().includes(name.toLowerCase())
    );
    console.log('Filtered formateurs:', this.filteredFormateurs); // Debug statement
}

searchFormateursByPhone(event: Event): void {
    const target = event.target as HTMLInputElement;
    const phone = target.value;
    console.log('Search by Phone:', phone); // Debug statement
    this.filteredFormateurs = this.formateurs.filter(
      (formateur) => formateur.phoneNumber.includes(phone)
    );
    console.log('Filtered formateurs:', this.filteredFormateurs); // Debug statement
}

}

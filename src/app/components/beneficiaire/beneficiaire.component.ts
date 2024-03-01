import { Component, OnInit } from '@angular/core';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { BeneficiaireService } from 'src/app/services/BeneficiaireService';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent implements OnInit {
  beneficiaires: Beneficiaire[] = [];
  filteredBeneficiaires: Beneficiaire[] = [];

  constructor(private beneficiaireService: BeneficiaireService) {}

  ngOnInit(): void {
    this.getAllBeneficiaires();
  }

  getAllBeneficiaires(): void {
    this.beneficiaireService.getAllBeneficiaires().subscribe(
      (beneficiaires: Beneficiaire[]) => {
        this.beneficiaires = beneficiaires;
        this.filteredBeneficiaires = [...this.beneficiaires];
      },
      (error) => {
        console.error('Error fetching beneficiaires: ', error);
      }
    );
  }

  onDelete(id: number): void {
    // Show confirmation dialog before deleting
    if (confirm('Are you sure you want to delete this beneficiary?')) {
      // Call service method to delete beneficiary
      this.beneficiaireService.deleteBeneficiaire(id).subscribe(
        () => {
          console.log('Beneficiary deleted successfully');
          // Refresh beneficiary list after deletion
          this.getAllBeneficiaires();
        },
        (error) => {
          console.error('Error deleting beneficiary:', error);
        }
      );
    }
  }
  downloadExcel(): void {
    this.beneficiaireService.downloadExcel(this.beneficiaires).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'beneficiaires.xlsx';
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
 
  searchBeneficiairesById(event: Event): void {
    const target = event.target as HTMLInputElement;
    const id = target.value;
    console.log('Search by ID:', id); // Debug statement
    this.filteredBeneficiaires = this.beneficiaires.filter(
      (beneficiaire) => beneficiaire.id.toString().toLowerCase().includes(id.toLowerCase())
    );
    console.log('Filtered Beneficiaires:', this.filteredBeneficiaires); // Debug statement
}

searchBeneficiairesByName(event: Event): void {
    const target = event.target as HTMLInputElement;
    const name = target.value;
    console.log('Search by Name:', name); // Debug statement
    this.filteredBeneficiaires = this.beneficiaires.filter(
      (beneficiaire) => beneficiaire.firstName.toLowerCase().includes(name.toLowerCase()) ||
                       beneficiaire.lastName.toLowerCase().includes(name.toLowerCase())
    );
    console.log('Filtered Beneficiaires:', this.filteredBeneficiaires); // Debug statement
}

searchBeneficiairesByPhone(event: Event): void {
    const target = event.target as HTMLInputElement;
    const phone = target.value;
    console.log('Search by Phone:', phone); // Debug statement
    this.filteredBeneficiaires = this.beneficiaires.filter(
      (beneficiaire) => beneficiaire.phoneNumber.includes(phone)
    );
    console.log('Filtered Beneficiaires:', this.filteredBeneficiaires); // Debug statement
}





  
}

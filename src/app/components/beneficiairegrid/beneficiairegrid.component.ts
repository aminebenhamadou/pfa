import { Component } from '@angular/core';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { BeneficiaireService } from 'src/app/services/BeneficiaireService';
@Component({
  selector: 'app-beneficiairegrid',
  templateUrl: './beneficiairegrid.component.html',
  styleUrls: ['./beneficiairegrid.component.css']
})
export class BeneficiairegridComponent {

  beneficiaires: Beneficiaire[] = [];
  

  
  constructor(private beneficiaireService: BeneficiaireService) {}

  ngOnInit(): void {
    this.getAllBeneficiaires();
  }

  getAllBeneficiaires(): void {
    this.beneficiaireService.getAllBeneficiaires().subscribe(
      (beneficiaires: Beneficiaire[]) => {
        this.beneficiaires = beneficiaires;
      },
      (error) => {
        console.error('Error fetching beneficiaires: ', error);
      }
    );
  }

}

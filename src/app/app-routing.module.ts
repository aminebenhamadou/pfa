import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { AddFormateurComponent } from './components/formateur/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './components/formateur/edit-formateur/edit-formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation.component';
import { EditFormationComponent } from './components/formation/edit-formation/edit-formation.component';
import { BeneficiairegridComponent } from './components/beneficiairegrid/beneficiairegrid.component';
import { FormateurgridComponent } from './formateurgrid/formateurgrid.component';
const routes: Routes = [
  { path: 'beneficiaire', component: BeneficiaireComponent },
  { path: 'beneficiairegrid', component: BeneficiairegridComponent },
  { path: 'formateurgrid', component: FormateurgridComponent },
  { path: 'beneficiaire/add-beneficiaire', component: AddBeneficiaireComponent },
  { path: 'beneficiaire/edit/:id', component: EditBeneficiaireComponent } ,
  { path: 'formateur', component: FormateurComponent },
  { path: 'formateur/add-formateur', component: AddFormateurComponent },
  { path: 'formateur/edit/:id', component: EditFormateurComponent } ,
  { path: 'formation', component: FormationComponent },
  { path: 'formation/add-formation', component: AddFormationComponent },
  { path: 'formation/edit/:id', component: EditFormationComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

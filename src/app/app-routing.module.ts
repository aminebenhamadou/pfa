import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';

const routes: Routes = [
  { path: 'beneficiaire', component: BeneficiaireComponent },
  { path: 'beneficiaire/add-beneficiaire', component: AddBeneficiaireComponent },
  { path: 'beneficiaire/edit/:id', component: EditBeneficiaireComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

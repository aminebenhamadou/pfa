import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { AddFormateurComponent } from './components/formateur/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './components/formateur/edit-formateur/edit-formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation.component';
import { EditFormationComponent } from './components/formation/edit-formation/edit-formation.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeneficiairegridComponent } from './components/beneficiairegrid/beneficiairegrid.component';
import { FormateurgridComponent } from './formateurgrid/formateurgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AddBeneficiaireComponent,
    EditBeneficiaireComponent,
    FormateurComponent,
    AddFormateurComponent,
    EditFormateurComponent,
    FormationComponent,
    AddFormationComponent,
    EditFormationComponent,
    BeneficiairegridComponent,
    FormateurgridComponent,
    
  ],
  imports:[
    BrowserModule,
    RouterModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

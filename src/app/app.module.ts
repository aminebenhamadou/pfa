import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { FormsModule } from '@angular/forms';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AddBeneficiaireComponent,
    EditBeneficiaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

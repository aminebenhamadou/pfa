import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBeneficiaireComponent } from './edit-beneficiaire.component';

describe('EditBeneficiaireComponent', () => {
  let component: EditBeneficiaireComponent;
  let fixture: ComponentFixture<EditBeneficiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBeneficiaireComponent]
    });
    fixture = TestBed.createComponent(EditBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormateurComponent } from './edit-formateur.component';

describe('EditFormateurComponent', () => {
  let component: EditFormateurComponent;
  let fixture: ComponentFixture<EditFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFormateurComponent]
    });
    fixture = TestBed.createComponent(EditFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

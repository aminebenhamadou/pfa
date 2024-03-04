import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurgridComponent } from './formateurgrid.component';

describe('FormateurgridComponent', () => {
  let component: FormateurgridComponent;
  let fixture: ComponentFixture<FormateurgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormateurgridComponent]
    });
    fixture = TestBed.createComponent(FormateurgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

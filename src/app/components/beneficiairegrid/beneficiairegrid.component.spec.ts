import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiairegridComponent } from './beneficiairegrid.component';

describe('BeneficiairegridComponent', () => {
  let component: BeneficiairegridComponent;
  let fixture: ComponentFixture<BeneficiairegridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiairegridComponent]
    });
    fixture = TestBed.createComponent(BeneficiairegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsAndObservablesComponent } from './signals-and-observables.component';

describe('SignalsAndObservablesComponent', () => {
  let component: SignalsAndObservablesComponent;
  let fixture: ComponentFixture<SignalsAndObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsAndObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsAndObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

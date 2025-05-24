import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsDifferenceComponent } from './signals-difference.component';

describe('SignalsDifferenceComponent', () => {
  let component: SignalsDifferenceComponent;
  let fixture: ComponentFixture<SignalsDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsDifferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

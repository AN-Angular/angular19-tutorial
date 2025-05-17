import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFormsComponent } from './sb-forms.component';

describe('SbFormsComponent', () => {
  let component: SbFormsComponent;
  let fixture: ComponentFixture<SbFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

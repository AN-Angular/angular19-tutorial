import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypeSignalsComponent } from './datatype-signals.component';

describe('DatatypeSignalsComponent', () => {
  let component: DatatypeSignalsComponent;
  let fixture: ComponentFixture<DatatypeSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatypeSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatypeSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

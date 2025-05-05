import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseConditionsComponent } from './if-else-conditions.component';

describe('IfElseConditionsComponent', () => {
  let component: IfElseConditionsComponent;
  let fixture: ComponentFixture<IfElseConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

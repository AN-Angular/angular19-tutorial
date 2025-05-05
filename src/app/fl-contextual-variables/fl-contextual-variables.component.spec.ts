import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlContextualVariablesComponent } from './fl-contextual-variables.component';

describe('FlContextualVariablesComponent', () => {
  let component: FlContextualVariablesComponent;
  let fixture: ComponentFixture<FlContextualVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlContextualVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlContextualVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBTwowayBindingComponent } from './sb-twoway-binding.component';

describe('SBTwowayBindingComponent', () => {
  let component: SBTwowayBindingComponent;
  let fixture: ComponentFixture<SBTwowayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SBTwowayBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBTwowayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

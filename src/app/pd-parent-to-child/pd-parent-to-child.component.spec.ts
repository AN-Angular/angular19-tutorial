import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdParentToChildComponent } from './pd-parent-to-child.component';

describe('PdParentToChildComponent', () => {
  let component: PdParentToChildComponent;
  let fixture: ComponentFixture<PdParentToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdParentToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

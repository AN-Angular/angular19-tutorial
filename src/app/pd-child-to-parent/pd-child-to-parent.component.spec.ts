import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdChildToParentComponent } from './pd-child-to-parent.component';

describe('PdChildToParentComponent', () => {
  let component: PdChildToParentComponent;
  let fixture: ComponentFixture<PdChildToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdChildToParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

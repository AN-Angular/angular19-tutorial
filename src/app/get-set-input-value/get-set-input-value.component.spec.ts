import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetInputValueComponent } from './get-set-input-value.component';

describe('GetSetInputValueComponent', () => {
  let component: GetSetInputValueComponent;
  let fixture: ComponentFixture<GetSetInputValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSetInputValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSetInputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

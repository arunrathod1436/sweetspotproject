import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomizationComponent } from './new-customization.component';

describe('NewCustomizationComponent', () => {
  let component: NewCustomizationComponent;
  let fixture: ComponentFixture<NewCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCustomizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

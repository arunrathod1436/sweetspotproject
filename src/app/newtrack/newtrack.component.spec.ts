import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrackComponent } from './newtrack.component';

describe('NewtrackComponent', () => {
  let component: NewtrackComponent;
  let fixture: ComponentFixture<NewtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewtrackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

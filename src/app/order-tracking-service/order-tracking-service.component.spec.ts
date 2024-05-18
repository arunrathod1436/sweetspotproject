import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingServiceComponent } from './order-tracking-service.component';

describe('OrderTrackingServiceComponent', () => {
  let component: OrderTrackingServiceComponent;
  let fixture: ComponentFixture<OrderTrackingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderTrackingServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderTrackingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

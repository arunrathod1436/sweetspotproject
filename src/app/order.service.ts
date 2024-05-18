import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  // This method simulates fetching order details from an API
  getOrderDetails(orderId: string): Observable<Order | null> {
    // Replace this with actual API call to fetch order details
    // For now, we're just returning a mock order
    const mockOrder: Order = {
      orderId: orderId,
      status: 'shipped' // Mock status
    };

    return of(mockOrder).pipe(
      catchError((error: any) => {
        // Handle errors here
        console.error('Error fetching order details:', error);
        return of(null);
      })
    );
  }
}

interface Order {
  orderId: string;
  status: string;
}

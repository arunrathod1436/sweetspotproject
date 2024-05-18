import { Component } from '@angular/core';
import { Stripe, loadStripe, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber!: string;
  expiry!: string;
  cvv!: string;
  stripe!: Stripe | null; // Allow Stripe to be null
  cardElement!: StripeCardElement | null; // Assuming you're using Elements to collect card information

  paymentInProgress: boolean = false;

  constructor() {
    this.initializeStripe();
  }

  async initializeStripe() {
    try {
      this.stripe = await loadStripe('your_stripe_publishable_key');
      if (this.stripe) {
        const elements = this.stripe.elements();
        this.cardElement = elements.create('card'); // Assuming you're using the card element
        this.cardElement.mount('#card-element'); // Mount the card element to an HTML element with id "card-element"
      }
    } catch (error) {
      console.error('Error loading Stripe:', error);
    }
  }

  async processPayment() {
    if (!this.stripe || !this.cardElement) {
      console.error('Stripe or Card Element is not initialized yet.');
      return;
    }

    try {
      this.paymentInProgress = true;

      // Create a PaymentMethod object from the card element
      const { paymentMethod, error } = await this.stripe.createPaymentMethod({
        type: 'card',
        card: this.cardElement,
      });

      if (error) {
        console.error(error.message);
        return;
      }

      // Confirm the card payment using the payment method ID
      const result = await this.stripe.confirmCardPayment('your_secret_payment_intent_client_secret', {
        payment_method: paymentMethod?.id
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        console.log('Payment successful!');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    } finally {
      this.paymentInProgress = false;
    }
  }
}

import React, { useState } from 'react';
import axios from 'axios';

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false);

  const paymentMethods = [
    {
      id: 'flutterwave',
      name: 'Flutterwave',
    },
    {
      id: 'stripe',
      name: 'Stripe',
    },
    {
      id: 'paypal',
      name: 'PayPal',
    },
  ];

  const handlePayment = async (paymentMethod) => {
    setLoading(true);

    try {
      const response = await axios.post('/api/payments/initiate', {
        amount: 1000, // Amount in cents/pennies
        currency: 'NGN', // Currency code (e.g., NGN, USD, EUR)
        paymentMethod,
        // Include any additional payment details as required by the selected payment provider
        // For example: customer information, products, metadata, etc.
      });

      const { data } = response;

      if (data.status === 'success') {
        const { link, sessionId } = data.data;

        switch (paymentMethod) {
          case 'flutterwave':
            handleFlutterwavePayment(link);
            break;
          case 'stripe':
            handleStripePayment(sessionId);
            break;
          case 'paypal':
            handlePayPalPayment(sessionId);
            break;
          default:
            console.log('Unsupported payment method');
            setLoading(false);
            break;
        }
      } else {
        console.log('Payment initiation failed:', data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log('Error initiating payment:', error);
      setLoading(false);
    }
  };

  const handleFlutterwavePayment = (link) => {
    const flutterwaveScript = document.createElement('script');
    flutterwaveScript.src = link;
    flutterwaveScript.async = true;
    flutterwaveScript.onload = () => {
      setLoading(false);
    };
    document.body.appendChild(flutterwaveScript);
  };

  const handleStripePayment = (sessionId) => {
    const stripe = window.Stripe('YOUR_STRIPE_PUBLIC_KEY');
    stripe.redirectToCheckout({ sessionId });
  };

  const handlePayPalPayment = (sessionId) => {
    // Handle PayPal payment
    // Implement your PayPal integration code here
  };

  return (
    <div className="payment-screen">
      <h1>Make a Payment</h1>
      {paymentMethods.map((method) => (
        <div key={method.id}>
          <button onClick={() => handlePayment(method.id)} disabled={loading}>
            {loading ? 'Processing...' : `Pay with ${method.name}`}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaymentScreen;

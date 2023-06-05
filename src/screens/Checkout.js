import React, { useState } from 'react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleNext = () => {
    if (step === 1) {
      // Perform validation on address
      if (!address) {
        alert('Please enter a valid shipping address');
        return;
      }
    } else if (step === 2) {
      // Perform validation on payment method
      if (!paymentMethod) {
        alert('Please select a payment method');
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    // Perform final confirmation logic
    alert('Order confirmed!');
    // Reset the state or navigate to a success page
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Shipping Address</h2>
            <input type="text" placeholder="Shipping Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Payment Method</h2>
            <div>
              <label>
                <input type="radio" name="paymentMethod" value="stripe" checked={paymentMethod === 'stripe'} onChange={() => setPaymentMethod('stripe')} />
                Stripe
              </label>
              <label>
                <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                PayPal
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Review and Submit</h2>
            <p>Review your order details and click "Confirm" to complete the purchase.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="checkout">
      {renderStep()}
      <div>
        {step > 1 && <button onClick={handlePrevious}>Previous</button>}
        {step < 3 ? <button onClick={handleNext}>Next</button> : <button onClick={handleConfirm}>Confirm</button>}
      </div>
    </div>
  );
};

export default Checkout;

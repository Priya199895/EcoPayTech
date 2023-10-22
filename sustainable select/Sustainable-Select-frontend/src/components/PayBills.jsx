import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./PayBills.css";
import MainNavbar from "./MainNavbar";

function PayBills({ userId }) {
  userId ="65316df470d14d00113e3ae0";
  const [balance, setBalance] = useState(0); // Replace with the actual user's wallet balance
  const [billAmount, setBillAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');

  const fetchWalletBalance = async () => {
    try {
      console.log('bill payments');
        console.log(userId);
      const response = await axios.get(`http://localhost:5000/api/wallets/wallet/${userId}`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  const handlePayment = async () => {
    const amount = parseInt(billAmount);

    if (amount <= 0) {
      setPaymentStatus('Invalid amount');
    } else if (amount > balance) {
      setPaymentStatus('Insufficient funds');
    } else {
      // Replace this with actual payment processing logic (e.g., API calls to payment gateway)
      // In a real app, you would handle authentication and payment processing here.
      await axios.post(`http://localhost:5000/api/wallets/wallet/payment/${userId}`, { 
        amount: parseInt(billAmount) 
      });
      setBalance(balance - amount);
      fetchWalletBalance();
      setPaymentStatus('Payment successful');
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, [userId]);

  return (
    <div>
      <MainNavbar/>
      <div className="pay-bill-container">
        <h1>Bill Payment</h1>
          <h2>Wallet Balance: ${balance}</h2>
        <input
        type="number"
        placeholder="Enter bill amount"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}/>
        <input type='text' placeholder='Merchant Name'/>
        <input type='text' placeholder='Purpose'/>
        <button className="deposit-button" onClick={handlePayment}>Pay Bill</button>
        <p>{paymentStatus}</p>
      </div>
      <p className='fill-text'>Make bill payments here, quick and fast </p>
    </div>
  );
}

export default PayBills;

// src/components/Wallet.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Wallet.css";
import MainNavbar from './MainNavbar';

const Wallet = ({ userId }) => {
    userId ="65316df470d14d00113e3ae0";
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);

  const fetchWalletBalance = async () => {
    try {
      console.log('inifonafin');
        console.log(userId);
      const response = await axios.get(`https://test-deploy-backend-1fc4.onrender.com/api/wallets/wallet/${userId}`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  const handleTopUp = async () => {
    try {
      console.log(topUpAmount);
      await axios.post(`https://test-deploy-backend-1fc4.onrender.com/api/wallets/wallet/topup/${userId}`, { 
        amount: parseInt(topUpAmount) 
      });
      fetchWalletBalance(); // Refresh the wallet balance after top-up
    } catch (error) {
      console.error('Error topping up wallet:', error);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, [userId]);

  return (
    <div>
      <MainNavbar/>
      <div className="pay-bill-container">
        <h1>Deposit Into Wallet</h1>
          <h2>Wallet Balance: ${balance}</h2>
          <input type="number" placeholder="Enter top-up amount" value={topUpAmount}
            onChange={(e) => setTopUpAmount(e.target.value)}/>
        <input type='text' placeholder='From Back Account'/>
        <input type='text' placeholder='Purpose'/>
        <button className="deposit-button" onClick={handleTopUp}>Deposit</button>
      </div>

    </div>
  );
};

export default Wallet;

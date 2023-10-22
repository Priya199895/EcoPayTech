import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1acc from "../images/img1acc.jpg";
import MainNavbar from './MainNavbar';
import "./AddBankAccount.css"
const AddBankAccount = ({userId}) => {
  userId ="65316df470d14d00113e3ae0";
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
    const[sucvalue] = useState('');
  const handleAddAccount = async () => {
    
  };

  return (

    <html lang="en">
   <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" ></link>
    <link rel="stylesheet" href="AddBankAccount.css"></link></head>
    <MainNavbar/>
    <div class="container">
        <div class="header">
            
        </div>
        <div class="wallet-details">
            <div class="row">
                <div class="col-lg-6">
                <h1>Welcome to your wallet</h1>
            
                    
                </div>
                <div class="col-lg-6">
                    <img src={img1acc} class="img-fluid"/>
                </div>
                </div>
            <div class="row">
                <div class="col-lg-6">
            <div class="account-form mt-4">
               
                <h2>Add Bank Account</h2>
                <form>
                    <div class="form-group">
                        <label for="accountNumber">Account Number</label>
                        <input type="text" 
                        class="form-control" 
                        id="accountNumber" 
                        name="accountNumber"
                        
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)} required/>
                    </div>
                    <div class="form-group">
                        <label for="bankName">Bank Name</label>
                        <input type="text" 
                        class="form-control" 
                        id="bankName" 
                        name="bankName" 
                        
        placeholder="Bank Name"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)} required />
                    </div>
                    <button type="submit" onClick={handleAddAccount} class="btn btn-primary mt-3">Add Account</button>
                </form>
                    </div>

            </div>
        
            <div class="col-lg-6">
        <div class="contact-card mt-4">
            <h4>Contact Us</h4>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">EcoPay</h5>
                    <h5 class="card-text" >For inquiries or assistance:</h5>
                    <h5 class="card-text">Email: info@ecopay.com</h5>
                    <h5 class="card-text">Phone: +123 456 789</h5>
                    <a href="#" class="btn btn-info">Join us on LinkedIn</a>
                </div>
            </div>
            
        </div>
        </div>
            </div>
    </div></div>
    </html>
  );
};

export default AddBankAccount;

import React from "react";
import "./Rewards.css";
import MainNavbar from "./MainNavbar";

const Rewards = () => {
    
    return(
        <div>
            <MainNavbar/>
        
            <div className="container">
                
                <br/>
                <br/>
                <br/>
                <h1>Reward Points Summary</h1>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Transaction Description</th>
                    <th>Amount</th>
                    <th>Reward Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2023-10-01</td>
                    <td>Purchase of Product A</td>
                    <td>$50.00</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>2023-09-15</td>
                    <td>Purchase of Product B</td>
                    <td>$30.00</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>2023-08-25</td>
                    <td>Purchase of Product C</td>
                    <td>$20.00</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    );
};

export default Rewards;
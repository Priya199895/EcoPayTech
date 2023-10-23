import React from "react";
import { useSelector } from "react-redux";
import { AccountBalanceWalletRounded, DashboardOutlined, PaymentOutlined, ShopOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import "./MainNavbar.css"; // Import the CSS file
import EcoPaylogo from "./l1.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
    <div className="navbar-container">
      <div className="logo-wrapper">
      <img src={EcoPaylogo} alt="EcoPay" className="nav-logo-image" />

        <div className="header-text-wrapper">
          <h1 className="header-text">EcoPay</h1>
          
        </div>
      </div>
      <div className="search-bar">
      <NavLink to="/addbankaccount" style={({ isActive }) => ({  
            color: isActive ? 'greenyellow' : 'white' })}> 
            <p  style={{ color: "white", fontSize: 22, marginRight: "30px" }}>Your Account</p>
        </NavLink>          
      <NavLink to="/rewards" style={({ isActive }) => ({  
            color: isActive ? 'greenyellow' : 'white' })}> 
            <p style={{ color: "white", fontSize: 22, marginRight: "30px" }}>Rewards</p>
        </NavLink>
        <NavLink to="/stocks" style={({ isActive }) => ({  
            color: isActive ? 'greenyellow' : 'white' })}> 
            <p style={{ color: "white", fontSize: 22, marginRight: "30px" }}>Stocks</p>
        </NavLink>
        <a target='_blank'
            rel='noopener noreferrer' href="https://web.edapp.com/course/653065e1025edb6eedf502be">
              <p style={{ color: "white", fontSize: 22, marginRight: "30px" }}>Learn</p></a>
        <input type="text" placeholder="Search.." className="search-input" />
        <NavLink to="/wallet" style={({ isActive }) => ({  
            color: isActive ? 'greenyellow' : 'white' })}> 
            <AccountBalanceWalletRounded style={{ color: "white", fontSize: 32, marginLeft: "30px" }}/>
        </NavLink>
        <NavLink to="/dashboard" style={({ isActive }) => ({  
                            color: isActive ? 'greenyellow' : 'white' })}> 
                            <DashboardOutlined style={{ color: "white", fontSize: 32, marginLeft: "30px" }}/>
                        </NavLink> 
        <NavLink to="/pay-bills" style={({ isActive }) => ({  
            color: isActive ? 'greenyellow' : 'white' })}> 
            <PaymentOutlined textRendering={"pay bills"} style={{ color: "white", fontSize: 32, marginLeft: "30px" }}/>
        </NavLink> 
        <NavLink to="/shop" style={({ isActive }) => ({  
            color: isActive ? 'greenyellow' : 'white' })}> 
            <ShopOutlined  style={{ color: "white", fontSize: 32, marginLeft: "30px" }}/>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

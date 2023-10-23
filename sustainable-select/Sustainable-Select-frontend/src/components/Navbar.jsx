import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";
import { AccountBalanceWalletRounded, DashboardOutlined, PaymentOutlined, ShopOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logo from "./logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
      <img src={logo} alt="EcoShop Logo" className="nav-logo-image" />

        <div className="header-text-wrapper">
          <h1 className="header-text">EcoShop</h1>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-link">Shop</div>
        <div className="nav-link">Shop by Values</div>
        <div className="nav-link">Rewards</div>
        <div className="nav-link">Corporate Gifting</div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search.." className="search-input" />
        <Link to="/cart">
          <Badge badgeContent={quantity} color="primary" overlap="rectangular">
            <ShoppingCartOutlined style={{ color: "white", fontSize: 32, marginLeft: "30px" }} />
          </Badge>
        </Link>
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
  );
};

export default Navbar;

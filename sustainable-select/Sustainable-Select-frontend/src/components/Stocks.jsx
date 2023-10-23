import React, { Component } from "react";
import "./Stocks.css"
import kl1 from "./kl1.png"
import day1 from "../images/day1.png"
import MainNavbar from "./MainNavbar";

const Stocks = () => {
    return(
      <div>
        <MainNavbar/>
      
        <div>
            <div className="row">
          <div className="column">
            <h1>Redefining Finance for a better Earth</h1>
     <p className="p1">Start investing in stocks with our app</p>
     <p>claim reward points</p> <p> envail discounts</p>
     <img className="img1"
    src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf-hero-img.6cce7418.png"
     alt="Invest In Stocks" />
     <img className="img2" src={kl1} alt="Invest In Stocks" />
     <button className="invest-button" type="submit">Start Investing</button>
  </div>
    </div>

      <div id="mid-section-div">
<div className="relatives">
  <h1>Discover Stocks</h1>
  <p>Search Stocks, AMCs etc</p>
  <input type="text" placeholder="Search Mutual Funds" />
  <div className="list">
    <li className="removelist">&times;</li>
    <a
      href="https://groww.in/mutual-funds/hdfc-small-cap-fund-direct-growth"
      ><li>hdfc</li></a
    >
    <a
      href="https://groww.in/mutual-funds/sbi-small-midcap-fund-direct-growth"
      ><li>sbi</li></a
    >
    <a
      href="https://groww.in/mutual-funds/birla-sun-life-short-term-fund-direct-growth"
      ><li>aditya birla sun life</li></a
    >
    <a
      href="https://groww.in/mutual-funds/kotak-midcap-fund-direct-growth"
      ><li>kotak</li></a
    >
    <a href="https://groww.in/mutual-funds/l-t-midcap-fund-direct-growth"
      ><li>L&T</li></a
    >
    <a
      href="https://groww.in/mutual-funds/icici-prudential-indo-asia-equity-fund-direct-growth"
      ><li>ICICI Prudential life MF</li></a
    >
    <a
      href="https://groww.in/mutual-funds/boi-axa-multi-cap-fund-direct-growth"
      ><li>BOI</li></a
    >
    <a href="https://groww.in/mutual-funds/hsbc-brazil-fund-direct-growth"
      ><li>britanni Industries</li></a
    >
  </div>
  <img
    width="19px"
    height="19px"
    className="image"
    src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/search.494f6987.svg"
  />
</div>
<div className="sub-sections">
  <div>
    <img
      src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf_high_return.36c4ba17.svg"
    />
    <a
      href="https://groww.in/mutual-funds/collection/best-high-returns-direct-mutual-funds"
      ><p>High Return</p></a
    >
  </div>
  <div>
    <img
      src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf_tax_saving.a2cd4a1a.svg"
    />
    <a
      href="https://groww.in/mutual-funds/collection/best-tax-saving-direct-mutual-funds"
      ><p>Tax Saving</p></a
    >
  </div>
  <div>
    <img
      src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf_low_risk.190d88fc.svg"
    />
    <a
      href="https://groww.in/mutual-funds/collection/better-than-fd-direct-mutual-funds"
      ><p>Better Than fd</p></a
    >
  </div>
  <div>
    <img
      src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf_large_cap.9cf9b353.svg"
    />
    <a
      href="https://groww.in/mutual-funds/collection/best-top-large-caps-direct-mutual-funds"
      ><p>Top Companies</p></a
    >
  </div>
  <div>
    <img
      src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf_small_mid.2daccdba.svg"
    />
    <a
      href="https://groww.in/mutual-funds/collection/best-sip-with-%E2%82%B9500-direct-mutual-funds"
      ><p>Sip With ₹500</p></a
    >
  </div>
  <div>
    <img
      src="https://assets-netstorage.groww.in/website-assets/prod/1.8.1/build/client/images/mf_returns_risk.ac1502c1.svg"
    />
    <a
      href="https://groww.in/mutual-funds/collection/best-balance-returns-risk-direct-mutual-funds"
      ><p>Sector Bets</p></a
    >
  </div>
</div>
<a><p className="btn">Explore all Stocks</p></a>
</div>
        </div>
        </div>
    );
}

export default Stocks;

  
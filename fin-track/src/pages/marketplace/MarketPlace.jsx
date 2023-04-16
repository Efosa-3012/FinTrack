import React from "react";
import "./marketplace.scss";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import uber from "../../assets/uber.jpeg"
import netflix from "../../assets/netflix.png"
import uberEats from "../../assets/uberEats.png"
import hulu from "../../assets/hullu.jpeg"
// import amazon from "../../assets/amazon.svg"
// import amazon from "../../assets/"
import lyft from "../../assets/lyft.jpeg"

const MarketPlace = () => {
  return (
    <div>
      <Header />
      <div className="market-body">
        <h1>You currently have: 2000 points</h1>
        <div className="discounts-bar">
            <div className="discounts">
                <img src={uber} alt="" />
                <p>40$ voucher (500 points)</p>
                <Button>Buy</Button>
            </div>
            <div className="discounts">
                <img src={netflix} alt="" />
                <p>30$ voucher (700 points)</p>
                <Button>Buy</Button>
            </div>
            <div className="discounts">
                <img src={uberEats} alt="" />
                <p>20$ voucher (700 points)</p>
                <Button>Buy</Button>
            </div>
            <div className="discounts">
                <img src={hulu} alt="" />
                <p>40$ voucher (650 points)</p>
                <Button>Buy</Button>
            </div>
        </div>
        <div className="discounts-bar">
            <div className="discounts">
                <img src={uberEats} alt="" />
                <p>40$ voucher (500 points)</p>
                <Button>Buy</Button>
            </div>
            <div className="discounts">
                <img src={netflix} alt="" />
                <p>30$ voucher (700 points)</p>
                <Button>Buy</Button>
            </div>
            <div className="discounts">
                <img src={uberEats} alt="" />
                <p>20$ voucher (700 points)</p>
                <Button>Buy</Button>
            </div>
            <div className="discounts">
                <img src={hulu} alt="" />
                <p>40$ voucher (650 points)</p>
                <Button>Buy</Button>
            </div>
        </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;

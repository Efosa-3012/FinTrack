import "./home.scss";
import React, { useState } from "react";
import image2 from "../../assets/person2.jpeg";
import image3 from "../../assets/person3.jpeg";
import userImage from "../../assets/user.jpeg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FinancialTipCard from "./FinancialCard";
import NewsTipCard from "./NewTips";
import image4 from "../../assets/person4.jpeg";

const financialTips = [
  "Create a budget to track your income and expenses.",
  "Save money by cutting unnecessary expenses.",
  "Set up an emergency fund for unexpected expenses.",
  "Pay off high-interest debt as soon as possible.",
  "Invest in low-cost index funds for long-term growth.",
  "Save for retirement by contributing to a 401(k) or IRA.",
  "Build good credit by paying bills on time and keeping credit card balances low.",
  "Consider refinancing your mortgage if interest rates are low.",
  "Automate your savings to make it easier to stick to your goals.",
  "Review your insurance coverage to make sure you're adequately protected.",
];

const financialNews = [
  "The Dow Jones Industrial Average hit a new record high today, fueled by strong earnings reports from major companies.",
  "The Federal Reserve announced that it will keep interest rates unchanged for the time being, citing concerns about inflation and economic growth.",
  "The unemployment rate in the United States has fallen to its lowest level in 50 years, according to the latest data from the Labor Department.",
  "Tesla announced that it will be opening a new factory in Texas, creating thousands of jobs and boosting the local economy.",
  "The stock market rallied today on news that the U.S. and China have reached a new trade deal, ending months of uncertainty and market volatility.",
  "The Federal Reserve has signaled that it may begin to taper its bond-buying program in the coming months, raising concerns among investors about the potential impact on the economy.",
  "Apple announced that it will be investing $1 billion in a new manufacturing plant in the United States, bringing thousands of jobs to the region.",
  "The U.S. Treasury Department has imposed sanctions on several Russian companies and individuals in response to cyberattacks and other malicious activities.",
  "Amazon reported record profits in the latest quarter, driven by strong sales in its core e-commerce business and continued growth in its cloud computing division.",
  "The price of crude oil has surged to its highest level in more than three years, driven by supply disruptions and rising global demand.",
];

function getRandomFinancialTip() {
  const randomIndex = Math.floor(Math.random() * financialTips.length);

  return financialTips[randomIndex];
}

function getRandomNewTip() {
  const randomIndex = Math.floor(Math.random() * financialNews.length);

  return financialNews[randomIndex];
}

const Home = () => {
  const [currentTip, setCurrentTip] = useState(getRandomFinancialTip());
  const updateTip = () => {
    setCurrentTip(getRandomFinancialTip());
  };

  const [currentNewTip, setNewTip] = useState(getRandomNewTip());
  const updateNewsTip = () => {
    setNewTip(getRandomFinancialTip());
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="profile-body">
          <div className="profile-body-subsection">
            <div className="profile-picture">
              <img src={userImage} alt="the user" />
            </div>
            <div>
              <div className="profile-details">
                <h1>Welcome, Abby 😇</h1>
                <p>You currently have 5000 points</p>
              </div>
              <div>
                <p>See your friend's Scoreboard</p>
              </div>
            </div>
          </div>
          {/* user profile scores */}
          <div className="user-points">
            <div className="user-points-sub">
              <img src={image4} alt="userpic" />
              <p>Godsheritage</p>
            </div>
            <div className="user-points-sub2">
              <p>9000 points</p>
            </div>
          </div>
          <div className="user-points">
            <div className="user-points-sub">
              <img src={image2} alt="userpic" />
              <p>Saad Nadeem</p>
            </div>
            <div className="user-points-sub2">
              <p>1000 points</p>
            </div>
          </div>
          <div className="user-points">
            <div className="user-points-sub">
              <img src={image3} alt="userpic" />
              <p>Ahmad Conteh</p>
            </div>
            <div className="user-points-sub2">
              <p>0 points</p>
            </div>
          </div>
          <div className="financial-tip-cards">
            <div className="financial-card" onClick={updateTip}>
              <FinancialTipCard tip={currentTip} />
            </div>

            <div className="financial-tip-cards"> </div>
            <div className="financial-card" onClick={updateNewsTip}>
              <NewsTipCard tip={currentNewTip} />
            </div>
          </div>
        </div>

        {/* tip of the day app */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

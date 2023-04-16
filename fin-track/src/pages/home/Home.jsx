import "./home.scss";
import React from "react";
import userImage from "../../assets/user.jpeg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
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
                <h1>Welcome, Godsheritage</h1>
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
              <img src={userImage} alt="userpic" />
              <p>Godshseritage</p>
            </div>
            <div className="user-points-sub2">
              <p>9000 points</p>
            </div>
          </div>
          <div className="user-points">
            <div className="user-points-sub">
              <img src={userImage} alt="userpic" />
              <p>Saad Nadeem</p>
            </div>
            <div className="user-points-sub2">
              <p>1000 points</p>
            </div>
          </div>
          <div className="user-points">
            <div className="user-points-sub">
              <img src={userImage} alt="userpic" />
              <p>Ahmad Conteh</p>
            </div>
            <div className="user-points-sub2">
              <p>0 points</p>
            </div>
          </div>
          <div className="financial-tip">
            <h1 className="financial-tip-heading">Financial Tip Of The Day</h1>
            <p className="financial-tip-paragraph">
              If you're having trouble saving money, just pretend that you're a
              character in a survival game and every dollar you save is a
              valuable resource for your survival.
            </p>
          </div>
        </div>
        {/* tip of the day app */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

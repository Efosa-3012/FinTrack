import "./Education.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Education from "../../components/Education/Education";
//import "//home/Home.css"

const Edu = () => {
  const arr = [
    {
      id: 1,
      Title: "All about Credit",
      Description: "Learn about credit and how to build it",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 2,
      Title: " Balling on a budget",
      Description: "Learn how to save money",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 3,
      Title: "Rich Retirement",
      Description: "Learn how to save for retirement",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 4,
      Title: "Leveraging Loans",
      Description: "Learn how to leverage loans",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 5,
      Title: "How to invest like a Tycoon",
      Description: "Learn how to invest",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 6,
      Title: "Troubling Taxes",
      Description: "Learn how to file taxes",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ];
  return (
    <div>
      <Header />
      <div className="cards">
        <div className="card-div">
          {arr.map((item, idx) => (
            <Education key={idx} title={item.Title} description={item.Description} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

//style the card div in css to have multiple cards in a grid

export default Edu;

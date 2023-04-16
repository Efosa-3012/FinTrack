import "./Education.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Education from "../../components/Education/Education";
import { Link } from "react-router-dom";
//import "//home/Home.css"

const Edu = () => {
  const arr = [
    {
      id: 1,
      Title: "All about Credit",
      Description: "Learn about credit and how to build it",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      Link: "https://www.dropbox.com/sh/ausiixivd1p19jp/AAAxJyMGRWTvP-Cubr2VXIhOa/2023-CL-MSU2-7%20Ways%20to%20improve%20your%20credit%20score.pdf?dl=0",
    },
    {
      id: 2,
      Title: " Balling on a budget",
      Description: "Learn how to save money",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      Link: "https://www.wealthnoir.com/blog/make-budget-balling/",
    },
    {
      id: 3,
      Title: "Rich Retirement",
      Description: "Learn how to save for retirement",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      Link: "https://www.dropbox.com/sh/ausiixivd1p19jp/AACVRb_YTwpeJE2KOEuBi986a/2023-CL-MSU2-Retirement%20101.pdf?dl=0",
    },
    {
      id: 4,
      Title: "Leveraging Loans",
      Description: "Learn how to leverage loans",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      Link: "https://www.investopedia.com/terms/l/leveragedloan.asp",
    },
    {
      id: 5,
      Title: "How to invest like a Tycoon",
      Description: "Learn how to invest",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      Link: "https://www.dropbox.com/sh/ausiixivd1p19jp/AACn60uaFimXaCXkTXBrGZeDa/2023-CL-MSU2-Raising%20Financially%20Savvy%20Kids.pdf?dl=0",
    },
    {
      id: 6,
      Title: "Troubling Taxes",
      Description: "Learn how to file taxes",
      Image:
        "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      Link: "https://home.treasury.gov/news/featured-stories/the-case-for-a-robust-attack-on-the-tax-gap",
    },
  ];
  return (
    <div>
      <Header />
      <div className="cards">
        <div className="card-div">
          {arr.map((item, idx) => (
            <Link to = {item.Link}>
              <Education
                key={idx}
                title={item.Title}
                description={item.Description}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

//style the card div in css to have multiple cards in a grid

export default Edu;

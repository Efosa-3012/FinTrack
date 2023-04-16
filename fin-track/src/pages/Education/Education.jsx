import "./Cards";
import "./Cards.css";
import Card from "./Cards";
import Header from "../../components/header/Header";
import Chat from "../../components/chatgpt/Chatgpt";
import image from "../../assets/mail.JPG"

const Edu = () => {
  const data = [
    {
      title: "Budgeting",
      description: "Learn how to create a budget",
      content:
        "Budgeting is the process of creating a plan to spend your money. It involves identifying your sources of income, estimating your expenses, and balancing your income and expenses. A budget can help you save money, reduce debt, and achieve your financial goals.",
      image:image
    },
    {
      title: "Credit Scores",
      description: "Learn how your credit score works",
      content:
        "Your credit score is a number that represents your creditworthiness. It is calculated based on your credit history, including your payment history, the amount of debt you have, and the length of your credit history. A higher credit score can help you qualify for lower interest rates and better loan terms.",
    },
    {
      title: "Investing",
      description: "Learn how to invest your money",
      content:
        "Investing is the process of putting your money into assets with the expectation of earning a profit. There are many different types of investments, including stocks, bonds, mutual funds, and real estate. Investing can help you grow your wealth and achieve your financial goals.",
    },
    {
      title: "Taxes",
      description: "Learn about taxes and how to file your tax return",
      content:
        "Taxes are the way that governments raise revenue to pay for public services. If you earn income, you are required to file a tax return and pay taxes on that income. There are many different types of taxes, including income taxes, sales taxes, and property taxes.",
    },
    {
      title: "Retirement",
      description: "Learn how to save for retirement",
      content: `Retirement planning often slides down the priority list as people face daily responsibilities and find it overwhelming to predict their future needs. People struggle to identify with their future selves and underestimate the duration of their retirement, leading to procrastination in planning. To overcome these challenges, individuals can utilize online calculators, interactive tools, and educational resources to better understand their future needs, start saving early, and incrementally increase contributions to their retirement accounts.`,
    },
    {
      title: "Debt Management",
      description: "Learn how to manage your debt",
      content:
        "Debt management involves creating a plan to pay off your debt. It involves identifying your debts, prioritizing which debts to pay off first, and developing a strategy to pay off your debts as quickly and efficiently as possible. Debt management can help you reduce your debt and improve your financial health.",
    },
  ];

  return (
    <>
      <Header></Header>
      <div className="financial-literacy">
        <div className="body">
          <h1>Financial Literacy</h1>
          <div className="card-grid">
            {data.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                content={card.content}
                image = {card.image}
              />
            ))}
          </div>
        </div>

        <Chat />
      </div>
    </>
  );
};

export default Edu;

//   const arr = [
//     {
//       id: 1,
//       Title: "All about Credit",
//       Description: "Learn about credit and how to build it",
//       Image:
//         "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//       path:"../src/pages/Education/Education.jsx"
//     },
//     {
//       id: 2,
//       Title: " Balling on a budget",
//       Description: "Learn how to save money",
//       Image:
//         "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//       Link: "https://www.wealthnoir.com/blog/make-budget-balling/",
//     },
//     {
//       id: 3,
//       Title: "Rich Retirement",
//       Description: "Learn how to save for retirement",
//       Image:
//         "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//       Link: "https://www.dropbox.com/sh/ausiixivd1p19jp/AACVRb_YTwpeJE2KOEuBi986a/2023-CL-MSU2-Retirement%20101.pdf?dl=0",
//     },
//     {
//       id: 4,
//       Title: "Leveraging Loans",
//       Description: "Learn how to leverage loans",
//       Image:
//         "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//       Link: "https://www.investopedia.com/terms/l/leveragedloan.asp",
//     },
//     {
//       id: 5,
//       Title: "How to invest like a Tycoon",
//       Description: "Learn how to invest",
//       Image:
//         "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//       Link: "https://www.dropbox.com/sh/ausiixivd1p19jp/AACn60uaFimXaCXkTXBrGZeDa/2023-CL-MSU2-Raising%20Financially%20Savvy%20Kids.pdf?dl=0",
//     },
//     {
//       id: 6,
//       Title: "Troubling Taxes",
//       Description: "Learn how to file taxes",
//       Image:
//         "https://images.unsplash.com/photo-1519680772-3b7b1b1b5b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZGl0JTIwY2FyZCUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//       Link: "https://home.treasury.gov/news/featured-stories/the-case-for-a-robust-attack-on-the-tax-gap",
//     },
//   ];
//   return (
//     <div>
//       <Header />
//       <div className="cards">
//         <div className="card-div">
//           {arr.map((item, idx) => (
//             <a href={item.Link} target="_blank" rel="noopener noreferrer">
//             <Education
//               key={idx}
//               title={item.Title}
//               description={item.Description}
//               />
//           </a>

//           ))}
//         </div>
//       </div>
//       <Chat />
//       <Footer />
//     </div>
//   );
// };

// export default Edu;

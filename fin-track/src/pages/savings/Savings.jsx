import React, { useState, useEffect } from "react";
import Parse from "parse/dist/parse.min.js";
import "./savings.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Savings = () => {
  let returnValForJsx
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [Dpay, setDpay] = useState("");
  const [Tpay, setTpay] = useState("");
  const [DateS, setDate] = useState("");
  const [Interest, setInterest] = useState("");
  const [personData, setPersonData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // ahmad code

  function simulator(start, stop, year, salary) {
    const yields = {
      Bonds: 8.0,
      Funds: 7.5,
      "Risk Averse Portfolio ": 5.5,
      "Agressive Portfolio": 12,
    };
    const to_find = stop - start;
    const per_year = to_find / year;
    const per_month = per_year / 12;
    const annual_yield = (per_year / salary) * 100;
    const suggestion = [];
    let ans = [];

    for (let yld in yields) {
      if (annual_yield - yields[yld] <= 2 && annual_yield - yields[yld] >= -2) {
        suggestion.push(yld + " (annual yield of " + yields[yld] + "%)");
      }
    }

    if (suggestion.length === 0) {
      const largest = Math.max(...Object.values(yields));
      for (let i in yields) {
        if (yields[i] === largest) {
          suggestion.push(i + " (annual yield of " + largest + "%)");
        }
      }
    }

    console.log("");
    ans.push(
      "You will need to save approx. $" +
        per_year.toFixed(2) +
        " a year or $" +
        per_month.toFixed(2) +
        " monthly to reach $" +
        stop
    );
    ans.push(
      "You can achieve this by saving " +
        annual_yield.toFixed(2) +
        "% of your salary a year."
    );
    ans.push("");
    ans.push("Some suggested ways to do this are: ");
    for (let i of suggestion) {
      ans.push(i);
    }
    ans.push("");

    return ans;
  }

  function answeralgo(chosen, answer) {
    if (answer === chosen) {
      return 5;
    } else {
      return 0;
    }
  }


  function main() {
    // let total = 0;
    const start = parseInt(Dpay);
    const stop = parseInt(Tpay);
    const year = parseInt(DateS);
    const salary = parseInt(Interest);

    returnValForJsx = simulator(start, stop, year, salary);
    // const answers = `
    //     What is 2 + 2?;4
    //     What is the capital of France?;Paris
    //     Who wrote The Great Gatsby?;F. Scott Fitzgerald
    //     `
    //   .trim()
    //   .split("\n");

    // for (let i of answers) {
    //   const question = i.split(";");
    //   const promptText = question[0];
    //   const correctAnswer = question[1];
    //   const response = prompt(promptText + "\nChoose an answer:");
    //   console.log();

    //   total += answeralgo(response, correctAnswer);
    // }

    // console.log(total);
  }
  main();

  // Ahmad's algorithm

  async function addPerson() {
    try {
      // create a new Parse Object instance
      const Person = new Parse.Object("Savings");
      Person.set("name", name);
      Person.set("DPay", Dpay);
      Person.set("TPay", Tpay);
      Person.set("DateS", DateS);
      Person.set("Interest", Interest);
      await Person.save();
      alert("Person saved!");
    } catch (error) {
      console.log("Error saving new person: ", error);
    }
  }

  async function getAllRows(className) {
    const query = new Parse.Query(className);
    const results = await query.find();
    const data = results.map((result) => ({
      name: result.get("name"),
      Dpay: result.get("DPay"),
      Tpay: result.get("TPay"),
      DateS: result.get("DateS"),
      Interest: result.get("Interest"),
    }));
    setPersonData(data);
    setDataLoaded(true);
  }

  useEffect(() => {
    getAllRows("Savings");
  }, []);

  return (
    <div>
      <Header />
      <div className="over-div">
        <button onClick={() => setShowForm(!showForm)} className="Goal-Button">
          Add a new goal
        </button>
        {showForm && (
          <div className="Form-div">
            <input
              type="text"
              placeholder="Goal Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Target Savings"
              value={Tpay}
              onChange={(e) => setTpay(e.target.value)}
            />
            <input
              type="number"
              placeholder="Current Savings"
              value={Dpay}
              onChange={(e) => setDpay(e.target.value)}
            />
            <input
              type="number"
              placeholder="Years to reach goal"
              value={DateS}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Annual Salarly"
              value={Interest}
              onChange={(e) => setInterest(e.target.value)}
            />

            <button onClick={addPerson} className="sub-goal-Button">
              Add Goal
            </button>
          </div>
        )}
        <div className="scard">
          <div className="person-card">
            <h1>Person List</h1>
            <div>{returnValForJsx}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Savings;

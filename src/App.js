import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Balance from "./components/Balance.js";
import IncomeExpense from "./components/IncomeExpense.js";
import History from "./components/History.js";
import Transaction from "./components/Transaction.js";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

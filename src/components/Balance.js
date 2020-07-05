import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const sum = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${sum}</h1>
    </>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionItem({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  const color = transaction.amount > 0 ? "plus" : "minus";
  return (
    <li className={color}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Transaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  function submitTransaction(e) {
    e.preventDefault();

    addTransaction({
      id: Math.floor(Math.random() * 1000) + 10,
      text: text,
      amount: parseInt(amount),
    });
    setText("");
    setAmount(0);
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={submitTransaction} className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
}

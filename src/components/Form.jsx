import React, { useState } from "react";

import axios from "axios";
function TransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const handleAddTransaction = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/transactions", {
        date,
        description,
        category,
        amount,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            id="date"
            className="form-input datepicker"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="description"
            className="form-input"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="category"
            className="form-input"
            placeholder="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label"></label>
          <input
            type="number"
            id="amount"
            className="form-input"
            step="0.01"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
      </div>
      <div className="button-container">
        <button className="btn" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}
export default TransactionForm;
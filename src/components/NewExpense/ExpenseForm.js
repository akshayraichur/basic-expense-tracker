import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, setAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => setTitle(e.target.value);
  const amountChangeHandler = (e) => setAmount(e.target.value);
  const dateChangeHandler = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);
    console.log(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
    setAddExpense(false);
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            id="date"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

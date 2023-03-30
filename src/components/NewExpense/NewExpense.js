import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  return (
    <div className="new-expense">
      {!addExpense && <button onClick={() => setAddExpense(true)}>Add Expense</button>}
      {addExpense && <ExpenseForm onSaveExpenseData={props.onSaveExpenseData} setAddExpense={setAddExpense} />}
    </div>
  );
};

export default NewExpense;

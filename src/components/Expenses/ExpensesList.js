import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredData }) => {
  if (filteredData.length === 0) return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  return (
    <ul className="expenses-list">
      {filteredData.map((item) => (
        <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.amount} />
      ))}
    </ul>
  );
};

export default ExpensesList;

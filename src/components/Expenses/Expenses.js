import { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenseData }) => {
  console.log("Expense data", expenseData);
  const [filteredYear, setFilteredYear] = useState();
  const [filteredData, setFilteredData] = useState(expenseData);

  useEffect(() => {
    setFilteredData(expenseData);
  }, [expenseData]);

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    let arr = expenseData.filter((item) => item.date.getFullYear() === parseInt(year));
    setFilteredData(arr);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList filteredData={filteredData} />
    </Card>
  );
};

export default Expenses;

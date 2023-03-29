import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenseData, setExpenseData] = useState([
    {
      id: 1,
      title: "Hyundai Creta",
      amount: "100",
      date: new Date(2023, 2, 24),
    },
    {
      id: 2,
      title: "Hyundai Verna",
      amount: "200",
      date: new Date(2023, 2, 25),
    },
    {
      id: 3,
      title: "Hyundai i20",
      amount: "50",
      date: new Date(2023, 2, 26),
    },
    {
      id: 4,
      title: "Hyundai Tucson",
      amount: "200",
      date: new Date(2023, 2, 28),
    },
  ]);

  const onSaveExpenseData = (data) => {
    setExpenseData((prevState) => [
      ...prevState,
      {
        id: Math.random().toString(),
        title: data.title,
        amount: data.amount,
        date: data.date,
      },
    ]);
  };
  return (
    <div>
      <NewExpense onSaveExpenseData={onSaveExpenseData} />
      <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;

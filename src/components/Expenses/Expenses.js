import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseData }) => {
  return (
    <Card className="expenses">
      {expenseData.map((item) => (
        <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.amount} />
      ))}
    </Card>
  );
};

export default Expenses;

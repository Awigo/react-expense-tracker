import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("The filteredYear changed to " + selectedYear);
  };

  const filteredExpenses = props.items
    .filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

  let expensesContent = <p>No expenses found for year {filteredYear}</p>

  if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map(expense => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={yearChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;

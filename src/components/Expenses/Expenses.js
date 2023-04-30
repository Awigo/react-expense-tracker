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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={yearChangeHandler}
        />
        {props.items
          .filter(expense => {
            return expense.date.getFullYear() == filteredYear
          })
          .map(expense => {
            return <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          })
        }
      </Card>
    </div>
  );
}

export default Expenses;

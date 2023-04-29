import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpanseDataHandler = (newExpense) => {
        const newExpenseWithId = {
            ...newExpense,
            id: Math.random().toString()
        };
        props.onAddExpense(newExpenseWithId)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpanseDataHandler}/>
        </div>
    )

};

export default NewExpense;

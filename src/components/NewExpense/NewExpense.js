import React from 'react';
import './NewExpense.css'; 
import ExpenseForm from './ExpenseForm.js';

const NewExpense = () => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        console.log(expenseData);
    };
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;
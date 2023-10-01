import React from "react";
import Form from "./Form";
const NewExpense = (props)=>{

        const saveDataEnteredHandler = (dataEntered)=>{
            const expenseData = {
              ...dataEntered,
              id: Math.random().toString()
            };
            props.onAddExpense(expenseData)
        };

    

  return <div>
    <Form onSaveExpenseData = {saveDataEnteredHandler}/>
  </div>

};

export default NewExpense;
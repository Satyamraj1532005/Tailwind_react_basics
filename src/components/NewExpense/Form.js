import React, { useState } from 'react'

function Form(props) {


  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const [enteredTitle, setInputTitle] = useState('');
  const [enteredAmount, setInputAmount] = useState('');
  const [enteredDate, setInputDate] = useState('');

  const titleInputHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,

    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
    setInputTitle(event.target.value);
  };
  const amountInputHandler = (event) => {
    //  setUserInput({
    //   ...userInput,
    //   enteredAmount : event.target.value,
    //  })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
    setInputAmount(event.target.value);


  }
  const dateInputHandler = (event) => {
    //  setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    //  })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
    setInputDate(event.target.value);
  }
  const submitHandler=(event)=>{
      event.preventDefault()
      
     const expenseData = {

      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)

     };

    props.onSaveExpenseData(expenseData);
     setInputDate('');
     setInputAmount('');
     setInputTitle('');

  };


  return (
    <form onSubmit={submitHandler}>
      <div className='flex'>

        <div className='m-2'>
          <label className='font-light p-1 '> Title: </label>
          <input onChange={titleInputHandler} value = {enteredTitle} className='bg-teal-100 rounded-lg p-2 mt-2' type='text'></input>
        </div>

        <div className='m-2'>
          <label className='font-light p-1' > Amount(₹): </label>
          <input onChange={amountInputHandler} value = {enteredAmount} className='bg-teal-100 rounded-lg p-2 mt-2' type='number' min="0.01" step="0.01"></input>
        </div>

        <div className='m-2'>
          <label className='font-light p-1'> Date: </label>
          <input onChange={dateInputHandler} value = {enteredDate} className='bg-teal-100 rounded-lg font-light p-2 mt-2' type='date' min='2019-01-01' max='2022-12-31'></input>
        </div>
      </div>

      <div className='flex justify-center m-3'>
        <button className='bg-teal-600  p-2 items-center text-white font-light border-teal-900 border-4 rounded-lg  hover:bg-teal-300 text-black ' type='submit'> Add Expense </button>
      </div>

    </form>
  )
}

export default Form
import React from 'react'
import ExpenseItem from "./ExpenseItem"
import NewExpense from '../NewExpense/NewExpense';


function Detail() {

    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: (new Date(2020, 7, 14)),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Register',
          amount: 294.67,
          date: (new Date(2021, 2, 28)),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: (new Date(2021, 5, 12)),
        },
      ];


      const addExpenseHandler=(expense)=>{
         console.log(expense);
         console.log("In App.js")
      }


  return (
    
    <div className=' bg-slate-400 flex flex-col justify-center items-center h-auto text-xl'>
      < div className='bg-teal-400 p-5  border rounded-3xl m-14'>
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     </div>

    <div className=' bg-black rounded-xl text-white p-2'>

    <div className='flex'>

        <div className='flex-1 mx-3 my-1 bg-teal-400 text-black p-2 rounded-md '> Filter By Year </div>
        <div  className='mx-3 '>
          <select className=" text-black bg-teal-500   rounded p-2 mt-1 rounded-md cursor-pointer">
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
        </select></div>
        </div> 
        

        
       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
       <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={(expenses[1].date)}></ExpenseItem>
       <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={(expenses[2].date)}></ExpenseItem>
       {/* <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={(expenses[3].date)}></ExpenseItem>  */}
      {/* <div className='p-2 rounded-md text-center'>
        <button className='mb-2 bg-white rounded-md p-2'> Add More </button>
      </div> */}

    </div>
  </div>
    
  )
}

export default Detail
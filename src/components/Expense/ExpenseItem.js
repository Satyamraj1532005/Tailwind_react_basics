import React, {useState} from 'react'


import Timing from './Timing'

const ExpenseItem = (props) => {
 

  const[title, setTitle] =  useState(props.title);

   const  clickHandler = ()=>{
        setTitle('Upda');
   };
   
  return (
    

    <div className='bg-yellow-200  flex justify-between rounded-2xl my-2 mx-2 '>
       <div><Timing value={props.date}></Timing> </div>
       <h1 className='my-auto px-4 pb-2 text-white bg-slate-500  border  border-black pt-1  rounded-2xl mr-4'> {title} </h1>
       <h1 className='my-auto px-4 pb-2  text-white bg-slate-600 border border-black pt-1  rounded-2xl mr-4'> ₹ {props.amount}  </h1>
       <button onClick={clickHandler}> Change Title </button>
    </div>
 
    
    
  )
}

export default ExpenseItem
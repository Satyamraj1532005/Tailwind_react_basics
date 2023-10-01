import React from 'react'

const Timing = (props) => {
  const month = props.value.toLocaleString('en-US', { month: 'short' });
  const day = props.value.toLocaleString('en-US', { day: '2-digit' });
  const year = props.value.getFullYear();
  return (

    
    <div className='my-3  text-white bg-slate-500  mx-3 px-5 m-2 p-2 border border-black border-4 w-28 text-center rounded-2xl'>
        
        <h5>{month}</h5>
        <h5>{day}</h5>
        <h5>{year}</h5>
    </div>
  )
}

export default Timing
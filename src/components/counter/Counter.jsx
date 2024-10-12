import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, updateCount } from '../../store/slices/counter';

const Counter = () => {

  const [value, setValue] = useState();

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count)


  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const updateValue = Number(value) || 0

  return (
    <div className='flex flex-col gap-8 p-8'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className='flex gap-4 align-middle'>
        <input className='button' type="button" value="increment" onClick={() =>dispatch(increment())}/>
        <span>{count}</span>
        <input className='button' type="button" value="decrement" onClick={() => dispatch(decrement())} />
      </div>

      <div className='flex gap-4'>
        <input className='border' type="text" value={value}
          onChange={handleChange}
        />
        <input className='border text-[#ddd] bg-[#000] p-2' type="button" value="add Value" onClick={() =>dispatch(updateCount(updateValue))}/>
      </div>
    </div>
  )
}

export default Counter
"use client";

import React, { useState } from "react";

const ComplexButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col gap-2 border-2 border-red-500 p-2 rounded-md'>
      <p className='text-2xl font-bold'>count:{count}</p>
      <div className='flex flex-row gap-2'>
        <button
          className='bg-blue-500 text-white p-2 rounded-md'
          onClick={() => setCount(count + 1)}>
          increment
        </button>
        <button
          className='bg-orange-500 text-white p-2 rounded-md'
          onClick={() => setCount(count - 1)}>
          decrement
        </button>
        <button
          className='bg-red-500 text-white p-2 rounded-md'
          onClick={() => setCount(0)}>
          reset
        </button>
      </div>
    </div>
  );
};

export default ComplexButton;

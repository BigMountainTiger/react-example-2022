import React, { useState, useEffect } from 'react'

const NAME = 'Page1'
export default function Page1() {

  const style = {
    container: {
      backgroundColor: 'lightblue',
      height: '100px'
    }
  }

  console.log(`${NAME} Rendered`);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`UseEffect called in ${NAME}`);

    return () => {
      // This place can be used to do cleanup work
      console.log(`${NAME} will unmount`);
    }

  }, []);

  return (
    <div style={style.container}>
      <div>{NAME}</div>
      <br />
      <div>The count is {count}</div>
      <br />
      <div>
        <button className='btn-primary' onClick={() => {
          setCount(c => c + 1)
        }}>Increment count</button>
      </div>
    </div>
  )
};
import React from 'react'



export default function array() {

    const fruits =["Apple","Banana","Mango","Orange"];
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  )
}

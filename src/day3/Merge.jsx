import React from 'react'

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
let array3 = [...array1, ...array2];

export default function Merge() {
  return (
    <div>
      <h2>Merged Numbers:</h2>
      {array3.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  )
}

import React from 'react'


const object1 = {FirstName:"Zonk", LastName:"Cake",age:19};
export default function Object() {
  return (
    <div> Name: {object1.FirstName}
    <br></br>
          Age: {object1.age}
    </div>
  )
}

import React from 'react'

export default function condition() {
    const isLoggedIn = true;
    let content;
  if (isLoggedIn) {
    content = <h1>Login successful</h1>;
  } else {
    content = <button>Login</button>;
  }
  return (

    <div>
    {content}
    </div>
  )
}

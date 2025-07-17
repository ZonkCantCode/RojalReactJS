import React, { useRef } from 'react'

export default function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

  return (
    <div style={{
        height: "100vh", 
        justifyContent: "center", alignItems: "center", 
        display: "flex", flexDirection: "column"}}> 

      <input type="text" placeholder="Click button to Focus me" style={{padding: "10px"}} ref={inputRef} />
      <input type="text" placeholder="no focus" style={{padding: "10px"}}  />
      <button onClick={handleFocus} style={{marginTop: "20px", padding: "10px 20px"}}> 
        Focus the Input
      </button>
    </div>
  )
}

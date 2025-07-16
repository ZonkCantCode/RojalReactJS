import React, { useState } from 'react';
import './styles/Calc.css';
export default function SymbolCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [symbol, setSymbol] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    if (isNaN(a) || isNaN(b)) {
      res = 'Enter valid numbers';
    } else {
      switch (symbol) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = b === 0 ? 'Cannot divide by zero' : a / b;
          break;
        default:
          res = 'Select a valid operation';
      }
    }

    setResult(res);
  };

  return (
    <div className='main'>
      <h2>Simple Calculator</h2>
      <input type="number" className="num1" placeholder='number 1' value={num1}onChange={(e) => setNum1(e.target.value)}/>
      <input type="number" className="num2" placeholder='number 2' value={num2} onChange={(e) => setNum2(e.target.value)}/>

      <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
        <option value="Addition(+)">Addition(+)</option>
        <option value="Subtraction(-)">Subtraction(-)</option>
        <option value="Multiplication(*)">Multiplication(*)</option>
        <option value="Divide(/)">Divide(/)</option>
      </select>

      <div>
        <button onClick={calculate}>
          Calculate
        </button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
      } catch (error) {
        setResult('Ошибочка :<');
        setInput('');
      }
    } else if (value === 'clear') {  //Handles both 'clear' and 'Clear'
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
  <div className="calculator-container">
    <div className="calculator">
      <div className='Kotik'>
      <h2>Котолятор ฅ^•ﻌ•^ฅ </h2>
      </div>
      <div className="screen">
        <input type="text" readOnly value={input} placeholder="Циферки" />
        <input type="text" readOnly value={result} placeholder="Ответик :3" />
      </div>
      <div className="button-row">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear" onClick={() => handleClick('clear')}>Очистка</button> {/* Corrected this line */}
      </div>
    </div>
   </div> 
  );
};

export default Calculator;
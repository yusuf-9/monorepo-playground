import { useState } from 'react';
import { isOdd } from '@repo/utils';
import { Button } from '@repo/ui';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = () => {
    const num = parseInt(inputValue, 10);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }
    const odd = isOdd(num);
    setResult(odd ? `${num} is odd!` : `${num} is even!`);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Is It Odd?</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #646cff',
            }}
          />
          <Button onClick={handleCheck} variant="danger">
            Check
          </Button>
        </div>
        {result && (
          <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>{result}</p>
        )}
        <p style={{ marginTop: '30px' }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

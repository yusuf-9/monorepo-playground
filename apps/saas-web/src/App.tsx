import { useState } from 'react';
import { isOdd } from '@repo/utils';
import { Button } from '@repo/ui';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <img src={reactLogo} className="h-24 w-24" alt="React logo" />
        </a>
      </div>

      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>

      <div className="bg-gray-800 rounded-lg p-8 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Is It Odd?</h2>

        <div className="flex gap-3 items-center">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
            className="flex-1 px-3 py-2 text-base rounded border border-indigo-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button onClick={handleCheck} variant="danger">
            Check
          </Button>
        </div>

        {result && <p className="mt-5 text-lg font-bold text-center">{result}</p>}

        <p className="mt-8 text-sm text-gray-400 text-center">
          Edit <code className="bg-gray-700 px-2 py-1 rounded text-indigo-400">src/App.tsx</code>{' '}
          and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-gray-500 text-sm">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;

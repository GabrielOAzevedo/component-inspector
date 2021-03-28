import JsxParser from 'react-jsx-parser';
import { useState } from 'react';
import Toolbar from '../toolbar/index.js';

function App() {

  const [html, setHtml] = useState('');

  function changeHtml(e) {
    setHtml(e.target.value);
  }

  return (
    <div className="h-screen">
      <Toolbar></Toolbar>
      <main className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-full">
        <div className="flex">
          <textarea className="resize-none h-full w-full bg-gray-400" value={html} onChange={changeHtml}></textarea>
        </div>
        <div>
          <JsxParser jsx={html}></JsxParser>
        </div>
      </main>
    </div>
  );
}

export default App;

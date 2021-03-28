import JsxParser from 'react-jsx-parser';
import { useEffect, useRef, useState } from 'react';
import Toolbar from '../toolbar/index.js';
import { editor } from 'monaco-editor';

function App() {

  const [html, setHtml] = useState('');
  const divEl = useRef(null);

  useEffect(() => {
    const monEditor = editor.create(divEl.current, {
      value: ['// Import React from \'react\''],
      language: 'javascript'
    });
    
    monEditor.onDidChangeModelContent((e) => {
      console.log(e);
    })

    return () => {
      monEditor.dispose();
    }
  })

  function changeHtml(e) {
    setHtml(e.target.value);
  }

  return (
    <div className="h-screen">
      <Toolbar></Toolbar>
      <main className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-full">
        <div className="flex">
          {/* <textarea className="resize-none h-full w-full bg-gray-400" value={html} onChange={changeHtml}></textarea> */}
          <div ref={divEl}></div>
        </div>
        <div>
          <JsxParser jsx={html}></JsxParser>
        </div>
      </main>
    </div>
  );
}

export default App;

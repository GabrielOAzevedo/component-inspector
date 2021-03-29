import JsxParser from 'react-jsx-parser';
import { useEffect, useRef, useState } from 'react';
import Toolbar from '../toolbar/index.js';
import Popup from '../popup/index.js';

function App() {

  const [html, setHtml] = useState(`<div className="flex flex-col p-16 m-16 shadow-md">
    <p className="text-xl">This is a component</p>
    <p className="text-blue-600">We support Tailwind CSS out of the box. Try it!</p>
</div>`);
  const [popUpVisibility, setPopupVisibility] = useState(false);

  function showPopup() {
    setPopupVisibility(true);
  }

  function closePopup() {
    setPopupVisibility(false);
  }

  function changeHtml(e) {
    setHtml(e.target.value);
  }

  return (
    <div className="h-screen">
      <Toolbar helpFunction={showPopup}></Toolbar>
      <Popup closeFunction={closePopup} visible={popUpVisibility}></Popup>
      <main className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-full">
        <div className="flex">
          <textarea className="resize-none h-full w-full bg-gray-400" value={html} onChange={changeHtml}></textarea>
        </div>
        <div>
          <JsxParser blacklistedAttrs={[]} jsx={html}></JsxParser>
        </div>
      </main>
    </div>
  );
}

export default App;

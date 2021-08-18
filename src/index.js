import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App-1';
import App2 from './App-2';
import "tailwindcss/tailwind.css"

ReactDOM.render(
  <React.StrictMode class="flex justify-center ...">
    <div>1</div>
    <div //---------------------------App1
      class="flex items-stretch"
      >
      <App1 
        class="self-center"
      />
    </div>
    <div>2</div>
    <div //---------------------------App
      class="flex items-stretch"
      >
      <App2
        class="self-center" 
      />
    </div>
    <div>3</div>
  </React.StrictMode>,
  document.getElementById('root')
);


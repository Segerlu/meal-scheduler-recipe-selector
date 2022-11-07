import React from 'react';
import ReactDOM from 'react-dom/client';
import Base from './Base';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<div id='title'>
<div><h1>RECIPE TRACKER</h1></div>
<div><h2>MEAL SCHEDULER</h2></div>
</div>
  <div id='book'>
  <Base />
  </div>
</>
);
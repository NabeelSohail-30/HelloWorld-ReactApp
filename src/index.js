import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi() {
  return (
    <div className="App">
      <h1>Hello World - React</h1>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));

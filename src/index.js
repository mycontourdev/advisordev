import React from 'react'
import ReactDOM from 'react-dom'


function App() {
  const fetch = require('node-fetch');
  fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text));
  return <h1>..</h1>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

import React from 'react'
import ReactDOM from 'react-dom'
import { setup } from 'goober'
import 'tailwindcss/dist/base.min.css'
import App from './App'

setup(React.createElement)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

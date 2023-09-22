import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  //catch errors and bugs at run time
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ScrollToAnchor from './components/common/ScrollToAnchor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToAnchor />
    </BrowserRouter>
  </React.StrictMode>,
)

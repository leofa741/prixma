import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter ,HashRouter } from 'react-router-dom'
import App from './App'
import '../src/assets/css/style.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/owl.theme.default.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter  >
    <App />
    </HashRouter >  
  </React.StrictMode>
)

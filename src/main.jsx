import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

const root = document.getElementById('root')

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// The prerenderer serializes browser-normalized DOM values, which are not always
// byte-identical to React's client style output. Keep the static HTML crawlable,
// then replace it with a clean interactive client render to avoid hydration errors.
ReactDOM.createRoot(root).render(app)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { SongsContextProvider } from './context/SongsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SongsContextProvider>
      <App />
    </SongsContextProvider>
  </React.StrictMode>,
)

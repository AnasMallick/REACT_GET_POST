import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
    <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
    <App />
    </ToastProvider>
    </BrowserRouter>
   
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from '@/pages/MainPage'
import '@/shared/styles/reset_style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)

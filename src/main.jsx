import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux';
import App from './App.jsx'
import './styles/GlobalStyles.css';
import AuthContext from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';
// import { store } from './app/store.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
    <Toaster/>
  </React.StrictMode>,
)

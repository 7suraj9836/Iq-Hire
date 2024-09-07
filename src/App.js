import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store, persistor } from './redux/store';
import Layout from './layout';
import "./assets/styles/global.scss";
import Popup from './components/popup';

function App() {
  const [acceptCookies, setAcceptCookies] = React.useState(false);
  useEffect(() => {
    localStorage.getItem('acceptCookies') ? setAcceptCookies(false) : setAcceptCookies(true);
    if(!localStorage.getItem('acceptCookies')){
      
    }
    
  },[])
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <div className="App">
          <BrowserRouter>
            <Layout />
            <Popup visible={acceptCookies} setVisible={setAcceptCookies}/>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
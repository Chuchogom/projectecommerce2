import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SendEmail from './pages/SendEmail/SendEmail';
import NewPassword from './pages/NewPasword/NewPasword';
import MyAccount from './pages/MyAccount/MyAccount';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState'

const App = () => {
  const initialState = useInitialState();


  return (
    <AppContext.Provider value = {initialState}>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path= "/" element = {<Home/>} />
        <Route path= "/login" element = {<Login/>} />   
        <Route path= "/recovery-password" element = {<PasswordRecovery/>} />
        <Route path= "/send-email" element={<SendEmail/>} />
        <Route path= "/new-password" element={<NewPassword/>} />
        <Route path= "account" element={<MyAccount/>} />
        <Route path= "/signup" element={<CreateAccount/>} />
        <Route path= "/checkout" element={<Checkout/>} />
        <Route path= "/orders" element={<Orders/>} />
        <Route path= "*" element = {<NotFound/>} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );

}

export default App;

import { Fragment } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { SignupForm } from './pages/signup/SignUpForm';
import { Home } from './pages/home-page/HomePage';
import { Login } from './pages/login/Login';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/signup' element={<SignupForm/>} /> 
        <Route path='/login' element={<Login/>} />         
      </Routes>      
    </Fragment>
  );
}

export default App;

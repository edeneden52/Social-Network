import React from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import NavBar from "./components/Nav/NavBar"
import Footer from "./components/Footer/Footer"


const App=(props)=> {
  return (
    
    
    <div className={s.page}>
      
       <Header />
      
      <NavBar/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;

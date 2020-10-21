import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/admin' component={Admin}/>
        <Route exact path='/' component={MainPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

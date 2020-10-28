import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Admin/Login';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile/Profile';
import store from './redux/redux-store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/' component={MainPage} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

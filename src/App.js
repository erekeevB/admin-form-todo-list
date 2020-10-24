import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import MainPage from './components/MainPage/MainPage';
import store from './redux/redux-store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Route path='/admin' component={Admin} />
          <Route exact path='/' component={MainPage} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

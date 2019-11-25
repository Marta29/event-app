import React from 'react';
import './App.scss';

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

import './assets/bootstrap/css/bootstrap.css'
import './assets/bootstrap/css/sb-admin.min.css'


import { Home } from './home/Home';
import { AddGroup } from './add-group/AddGroup';
import { CheckPresence } from './check-presence/CheckPresence';
import Group from './group/Group';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href="index.html">Start Bootstrap</a>
          <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i className="fas fa-bars"></i>
          </button>
        </nav>

        <div id="wrapper" className="app-container">
          <nav className='sidebar navbar-nav main-menu'>
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-group">Add group</Link>
              </li>
            </ul>
          </nav>
          <main id="content-wrapper">
              <div className="container-fluid">
                <Route exact path='/' component={Home} />
                <Route path='/add-group' component={AddGroup} />
                {/*<Route path='/check-presence/:groupId' component={CheckPresence} />*/}
                {/*<Route path='/group/:groupId' component={Group} />*/}
              </div>
          </main>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

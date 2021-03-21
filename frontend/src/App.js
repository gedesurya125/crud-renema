import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import React from 'react';

import {NavBar} from './components/NavBar';
import {UserList} from './components/UserList';
const App = () => {

  return(
    <Router>
      <div className="bg-gray-400 min-h-screen w-screen ">
        <h1 className="text-2xl font-bold text-center text-blue-400">DW EMPLOYEE</h1>
          <div className="">
              <Switch>
              <Route exact path="/" render={
                () => (
                  <React.Fragment>
                    <NavBar/>
                    <UserList/>
                  </React.Fragment>
                )
              }/>
              <Route exact path="/addUser" component="{/*AddUserComponent*/}"/>
              <Route exact path="/editUser" component="{/*editUserComponent*/}"/>
              <Redirect to="/"/>
            </Switch>
          </div>       
      </div>
    </Router>
    
  )
}

export default App;

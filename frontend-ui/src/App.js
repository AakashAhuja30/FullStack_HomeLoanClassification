import './App.css';
import FileUpload from './FileUpload';
import Navigator from './Navigator';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigator/>
      <Switch>
        <Route exact path='/batchProcessing' component={FileUpload}></Route>
        <Route exact path='/' component={Home}></Route>
        
        </Switch>
      </Router>

    </div>
  );
}

export default App;

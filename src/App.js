import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home.js'
import Category from './components/Category.js'

class App extends Component {

  render() {
    return (
      <div className="App">

	      <Switch>
	        <Route exact path="/" component={Home} />
	        <Route path="/movie/:id" component={Category} />
	        <Route path="/tv/:id" component={Category} />
	        <Route path="/person/:id" component={Category} />
	      </Switch>

      </div>
    )
  }
}

export default App;

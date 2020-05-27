import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home.js'
import Movie from './components/Movie.js'
import Tv from './components/Tv.js'
import Person from './components/Person.js'

class App extends Component {

  render() {
    return (
      <div className="App">

	      <Switch>
	        <Route exact path="/" component={Home} />
	        <Route path="/movie/:id" component={Movie} />
	        <Route path="/tv/:id" component={Tv} />
	        <Route path="/person/:id" component={Person} />
	      </Switch>

      </div>
    )
  }
}

export default App;

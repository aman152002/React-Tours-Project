import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Tours from './components/Tours/Tours'

const App = () => {
  return(
    <Router>
        <div className="app">
          <Navbar />
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/tours"><Tours /></Route>
              <Route path="/testimonials"><Testimonials /></Route>
              <Route path="/contact"><Contact /></Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
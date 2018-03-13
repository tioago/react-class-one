import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './Home'
import Series from './Series'
import NewSerie from './NewSerie'

//functional-stateless component
const About = () => <p className="intro-section">SOBRE</p>


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/logo.png" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/new">Nova Série</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/series/:genre' component={Series}/>
          <Route exact path='/new' component={NewSerie} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App

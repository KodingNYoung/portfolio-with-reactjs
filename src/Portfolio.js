import React, { Component } from 'react';

// components
import Navs from './Components/Nav/Nav';

// pages
import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import Contact from './views/Contact';

// dependencies
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css
import './portfolio.css';

//class
class Portfolio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      views: ['home', 'about', 'projects', 'contact'],
      isDrawerOpen: false,
    };
  }

  openDrawer = () => {
    this.setState({
      isDrawerOpen: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpen: false,
    })
  }

  render () {
    return (
    <Router>
      <div className="portfolio">
        <Navs 
          views={this.state.views} 
          openDrawer = {this.openDrawer}
          closeDrawer={this.closeDrawer}
          open={this.state.isDrawerOpen} 
        />
        <Switch>
          <Route path='/home' component={Home}/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Project}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
  }
}

export default Portfolio;
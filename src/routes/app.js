import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './indexPages';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/about'>关于</Link></li>
                    <li><Link to='/topics'>主题列表</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
  }
}

export default App;

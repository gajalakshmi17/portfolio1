import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/App" component={App} />
          <Route path="/Home" component={Home} />
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Routes from './routes/Routes'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
export class App extends Component {

  render() {
    return (
        <Router history={hist}>
          <Routes />
        </Router>
    );
  }
}
export default App;

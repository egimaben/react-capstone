import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'


const NavBar =(props)=>{
    return (<nav className="navbar-wrapper">
      <div>
        <p>Welcome <b>{props.name}</b></p>
      </div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div>
        <Link to="/logout">
          <p>Logout</p>
        </Link>
      </div>

    </nav>)
  }
export default withRouter(NavBar);
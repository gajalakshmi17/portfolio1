//import React from 'react';
import React, {Component} from 'react';

import { Link} from "react-router-dom";
import back from './download.png';
import back1 from './bg.jpeg';
//import back2 from './back3.jpg';
import './home.css';
import './App.css';
import { Button } from 'semantic-ui-react';
//import back2 from './gaju.jpeg';
import Container from '@material-ui/core/Container';
import $ from 'jquery';
import App from './App.js';


import BackgroundSlideshow from 'react-background-slideshow'


export default class Home extends Component {
	
 render (){
	 

  return (
    <div>
 
	  <section id="header">
	  <div class="container text-center" id="home">
	  <div class="mydiv" >
	 <img src={back}/>
      <div className="hero">
	  <h1>Hi I am Gajalakshmi,<br/>A Full Stack Developer</h1>
	  <div className="btn">
	  <span></span><span></span><span></span><span></span>
	  <Link to="/App"><p>Click Here To Know More About Me</p></Link>
	 
	  </div>
	  </div>
	 </div>
	 <div className="scroll-btn">
	 <div className="scroll-bar"><a href="#about"><span>  </span></a></div>
	 </div>
	 </div>
	 </section>
  
<div>
<App/>
</div>
    
  </div>
      );
}
}

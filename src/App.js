import React, {Component} from 'react';
import {
 Segment,
 Divider,
 Input,
 Grid,
 Icon,
 Button,
 Image,
 Card,
   Popup,
} from 'semantic-ui-react';
import TextField from 'material-ui/TextField';
import './App.css'
import {hashHistory} from 'react-router'
import back2 from './gaju.jpeg';
import home from './home';
import About from './About';
import Container from '@material-ui/core/Container';
import Tab from './Tab.js';
import $ from 'jquery';
import './tab.css';
import { MDBScrollspyBox, MDBScrollspyList, MDBScrollspyListItem, MDBScrollspyText, MDBTabContent } from "mdbreact";




export default class App extends Component {


render() {
	
   return (

   <div>
   
   <section id="user-info">
   <div class="nav-bar">
   <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <i class="fa fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#home">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#resume">EXPERIENCE</a>
      </li>
      <li class="nav-item" >
	  <a class="nav-link" href="#contact">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
</div>

  <div>
   <About/>
   </div>
   <div class="resume" id="resume">
   <div class="container">
   <div class="row">
   <div class="col-md-6">
   <h3 class="text-center">My Experience</h3>
   <ul class="timeline">
   <li>
   <h4>2016 Developer</h4>
   <p>I had worked as a intern in Wipro Technologies in Java and completed by creating an application.<br/>
<b>Company</b> - Wipro Technologies<br/>
<b>Duration</b> -3 months [2016]<br/>
<b>Location</b> - Hydreabad India<br/>

</p>

   </li>
   <li>
   <h4>2016-2018 Full-stack Developer</h4>
   <p>I'm the Full-stack Developer.
.under Wipro Digital ,worked for various clients in Scrum Medothology.I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences<br/>
<b>Company</b> - Wipro Digital<br/>
<b>Duration</b> -2yr 6 months [2016-2018]<br/>
<b>Location</b> - Bangalore India<br/>

</p>

   </li>
   <li>
   <h4>2018-2019 Software Enginer</h4>
   <p>I'm worked as a Software Enginer in Wiro Homles Rollout.I have serious passion for dealing various customers across Wipro and providing solutions to them<br/>
<b>Company</b> - Wipro Technologies<br/>
<b>Duration</b> -1yr [2019]<br/>
<b>Location</b> - Chennai India<br/>

</p>

   </li>
   </ul>
   </div>
   <div class="col-md-6">
   <h3 class="text-center">My Experience</h3>
   <ul class="timeline">
   <li>
   <h4>2010 Front -end Developer</h4>
   <p>I'm the Front-End Developer.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.<br/>
<b>Company</b> - xyz Compay<br/>
<b>Duration</b> -1yr [2017]<br/>
<b>Location</b> - Chennai India<br/>

</p>

   </li>
   <li>
   <h4>2018 Front -end Developer</h4>
   <p>I'm the Front-End Developer.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.<br/>
<b>Company</b> - xyz Compay<br/>
<b>Duration</b> -1yr [2017]<br/>
<b>Location</b> - Chennai India<br/>

</p>

   </li>
   <li>
   <h4>2018 Front -end Developer</h4>
   <p>I'm the Front-End Developer.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.<br/>
<b>Company</b> - xyz Compay<br/>
<b>Duration</b> -1yr [2017]<br/>
<b>Location</b> - Chennai India<br/>

</p>

   </li>
   </ul>
   </div>
   </div>
   </div>
   </div>
   <div class="Contact" id="contact">
   <div class="container text-center">
   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@email"><i class="fa fa-address-book"></i>Email Me</button>
   <p class="text-center">I'm the Front-End Developer.<br/>
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Leave Your Message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="contact">
        <form  method="POST" action="send">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">From:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
		  <div class="form-group">
            <label for="recipient-name" class="col-form-label">To:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
       
     
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"><i class="fa fa-angle-up"></i>Send message</button>
      </div>
	  </form>
	   </div>
    </div>
  </div>
</div>
   <div class="row">
   <div class="col-md-4">
   <i class="fa fa-phone"></i>
   <p>07404093548</p>
   </div>
   <div class="col-md-4">
   <i class="fa fa-envelope"></i>
   <p>gajunagaraj@gmail.com</p>
   </div>
   <div class="col-md-4">
   <i class="fa fa-internet-explorer"></i>
   <p>gajunagaraj.com</p>
   </div>
   </div>
   </div>
   
   </div>
   
   </section>
   </div>

   )
 }
}

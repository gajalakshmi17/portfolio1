//import React from 'react';
import React, {Component} from 'react';


import './home.css';
import './App.css';
import { Button } from 'semantic-ui-react';
//import back2 from './gaju.jpeg';
import Container from '@material-ui/core/Container';
import $ from 'jquery';
import App from './App.js';
import back2 from './gaju.jpeg';

import BackgroundSlideshow from 'react-background-slideshow'


export default class About extends Component {
	
 render (){
	 $(document).ready(function() {
        		$('.html').animate({width:'90%'},2000);
        		$('.css').animate({width:'95%'},2000);
        		$('.js').animate({width:'90%'},2000);
        		$('.react').animate({width:'80%'},2000);
        		$('.mongo').animate({width:'95%'},2000);
				$('.node').animate({width:'75%'},2000);
        	});
	 

  return (
    <div class="about container" id="about">
	<u><h3 class="text-center">About</h3></u>
<div class="row">

<div class="col-md-6 text-center">

 <div class="part">
    <div class="octo">
      <div class="octo1">
        <img src={back2} className="image" alt="" /></div>
		
	 </div></div>
	 <h3>WHO AM I?</h3>
<p>I'm the Front-End Developer.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
</div>
<div class="col-md-6" id="progress">

<div class="main">
		<div class="progressBar" >
			<div class="title htmlColor">HTML5</div>
			<div class="progress html"></div>
			<div class="progress_value">90%</div>
		</div>
		<div class="progressBar">
			<div class="title cssColor">CSS3</div>
			<div class="progress css"></div>
			<div class="progress_value">95%</div>
		</div>
		<div class="progressBar">
			<div class="title jsColor">JScript/Jquery</div>
			<div class="progress js"></div>
			<div class="progress_value">90%</div>
		</div>
		<div class="progressBar">
			<div class="title reactColor">ReactJS</div>
			<div class="progress react"></div>
			<div class="progress_value">80%</div>
		</div>
		<div class="progressBar">
			<div class="title mongoColor">MongoDB</div>
			<div class="progress mongo"></div>
			<div class="progress_value">95%</div>
		</div>
		<div class="progressBar">
			<div class="title nodeColor">NodeJS</div>
			<div class="progress node"></div>
			<div class="progress_value">75%</div>
		</div>
	</div>
</div>
</div>
</div>
    );
}
}
import { Carousel, Radio  } from 'antd';
import './index.css'
import * as React from "react";
import {EDFCard} from '../../component/card/index.jsx'
import {OurTeams} from '../ourTeams/index.jsx'
import {EDFheader} from '../../component/header/header.jsx'
import {OurProjects} from '../ourProjects/index.jsx'

const contentStyle = {
  height:'100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

export const LandingBody = (event) => {
	const img = React.useRef(null);

	var scrollEvent =(event)=> {
		console.log(event.nativeEvent.wheelDelta)
		if (event.nativeEvent.wheelDelta > 0) {
			img.current.prev()
		} else {
			img.current.next()
		}
	};
	
	function now() {
	  return +new Date()
	}
	
	function debounce (func, wait = 50, immediate = true) {
	  let timer, context, args
	
	  const later = () => setTimeout(() => {
	    timer = null 
	    if (!immediate) {
	      func.apply(context, args)
	      context = args = null
	    }
	  }, wait)

	  return function(...params) {
	    if (!timer) {
	      timer = later()
	      
	      if (immediate) {
	        func.apply(this, params)
	      } else {
	        context = this
	        args = params
	      }
	    
	    } else {
	      clearTimeout(timer)
	      timer = later()
	    }
	  }
	}
	  



	return (
		<div onWheel={debounce(scrollEvent,40)} className='landing-body'>
		  
			<Carousel dotPosition='left' effect='fade' ref={img}>
			<div >
			  <div  className='page' style={contentStyle}>
			   <OurProjects></OurProjects>
			 
			  </div>
			</div>
			
			<div >
			  <div  className='page' style={contentStyle}>
			  <OurTeams></OurTeams>
			  </div>
			</div>

			<div > 
				<div className='page' style={contentStyle}>
				  <EDFheader />    
				</div >
			</div>
			</Carousel>
		</div>
	);
};


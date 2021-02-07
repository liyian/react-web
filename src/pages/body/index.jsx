import { Carousel, Radio  } from 'antd';
import './index.css'
import * as React from "react";
import {EDFCard} from '../../component/card/index.jsx'
import {OurTeams} from '../ourTeams/index.jsx'
import {EDFbanner} from '../../component/header/banner.jsx'
import {OurProjects} from '../ourProjects/index.jsx'
import {Careers} from '../careers/index.jsx'

const contentStyle = {
};

export const LandingBody = React.forwardRef((props,ref) => {

	var scrollEvent =(event)=> {
		console.log(event.nativeEvent.wheelDelta)
		if (event.nativeEvent.wheelDelta > 0) {
			ref.current.prev()
		} else {
			ref.current.next()
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
		  
			<Carousel dotPosition='left' effect='fade' ref={ref}>
			<div > 
				<div className='page'>
				  <EDFbanner />    
				</div >
			</div>

			<div >
			  <div  className='page'>
			    <OurTeams></OurTeams>
			  </div>
			</div>
			
			<div >
			  <div  className='page'>
			    <OurProjects></OurProjects>			 		
			  </div>
			</div>

			<div > 
				<div className='page'>
				  <Careers refDom={ref}></Careers>
				</div >
			</div>
			</Carousel>
		</div>
	);
}
)


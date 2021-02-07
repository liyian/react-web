import './index.scss'
import * as React from "react";
import {EDFCard} from '../../component/card/index.jsx'
import { Button, Radio } from 'antd';
import {LanguageContext} from '../../containers/Language.js'
import artwork_ech1 from '../../component/header/artwork_ech1.png';
import Team from '../../static/Team.png'
import { Text } from '../../containers/Language';

export const Careers = (props) => {
	
	var handle=()=>{
	  const w=window.open('about:blank');
	  w.location.href="https://www.shixiseng.com/com/com_70ventmhmecw"
	}
	
	return (
		<div className='careers'>
			<img className='left-img' src={artwork_ech1} />
			<div className = 'top-img'>
				<p><Text tid="careerTitle" /></p>
				<p><Text tid="careerText" /></p>
				<Button  onClick={handle} type="primary" danger><Text tid="careerButton" /></Button>
			</div>
			<img className='right-img' src={require('../../static/job.png').default} />
			
			<div className='foot'>
			<div className='left-text'>
				<p onClick={()=>{props.refDom.current.goTo(0)}}><Text tid="career1" /></p>
				<p onClick={()=>{props.refDom.current.goTo(1)}}><Text tid="career2" /></p>
				<p onClick={()=>{props.refDom.current.goTo(2)}}><Text tid="career3" /></p>
			</div>
			<div className='right-text'>
				<p><Text tid="career4" /></p>
				<p onClick={handle}><Text tid="career5" /></p>
			</div>
			</div>
		</div>
	);
};


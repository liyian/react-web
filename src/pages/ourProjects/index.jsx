import './index.scss'
import * as React from "react";
import {EDFCard} from '../../component/card/index.jsx'
import { Button, Radio } from 'antd';
import {LanguageContext} from '../../containers/Language.js'
import artwork_ech1 from '../../component/header/artwork_ech1.png';
import Team from '../../static/Team.png'

export const OurProjects = (event) => {
	const { dictionary } = React.useContext(LanguageContext);
	const [isFront,setBool] = React.useState(true)
	const [cardsFront,setCardsFront] =  React.useState([])
	const [cardsBack,setCardsBack] =  React.useState([])
	const [cardsTemp,setCardsTemp] =  React.useState([])
	
	function changeBackground(e,i) {
		console.log('hover',cardsBack,cardsFront)
		setBool(false)
		
		setCardsTemp((prevState)=>[...cardsFront])
		setCardsFront((prevState)=>[...cardsBack])
	}
	  
	 function Leave(e,i) {
		setBool(true)
	   console.log('stop',cardsTemp,cardsFront,cardsBack)
	  setCardsFront((prevState)=>[...cardsTemp])
	}
	
	React.useEffect(() => {
		var frontTemp=[]
		var backTemp=[]
		console.log('useeffect')
		for(let i =0; i<Object.keys(dictionary.projectTitle).length;i++){
			var imgIndex = i+1
			frontTemp.push(
			<div key={i} onMouseEnter={(e)=>{changeBackground(e,i)}}
				onMouseLeave={(e)=>{Leave(e,i)}}>
				<EDFCard className='card-front'
					coverImage={<img src={require('../../static/i'+imgIndex+'.png').default} alt="image not found" />}
					content={Object.values(dictionary.projectTitle)[i]}>
				</EDFCard>
			</div>)
				
			backTemp.push(<div key={i}
			onMouseLeave={(e)=>{Leave(e,i)}}>
			<EDFCard className='card-back'
				title={Object.values(dictionary.projectTitle)[i]} 
				content={Object.values(dictionary.projectText)[i]}></EDFCard>
				</div>)
		}
		setCardsFront(frontTemp)
		setCardsBack(backTemp)
	},[]);
	
	return (
		<div className='ourProjects' >
		{cardsFront}
			{ 
			isFront?null:cardsBack		
			}	
			{isFront?null:cardsTemp}
		</div>
		
	);
};


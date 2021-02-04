import './index.scss'
import * as React from "react";
import {EDFCard} from '../../component/card/index.jsx'
import { Button, Radio } from 'antd';
import {LanguageContext} from '../../containers/Language.js'
import artwork_ech1 from '../../component/header/artwork_ech1.png';
import Team from '../../static/Team.png'

export const OurTeams = (event) => {
	const { dictionary } = React.useContext(LanguageContext);
	const [current, setCurrent] = React.useState('0');
	const [TextList] = React.useState([dictionary.activityText1,dictionary.activityText2,dictionary.activityText3]);
	const [TitleList] = React.useState([dictionary.activityTitle1,dictionary.activityTitle2,dictionary.activityTitle3]);
	 
	var handleSizeChange = e => {
		setCurrent( Number(e.target.value ))
	};
	  
    var content = 
		<Radio.Group value={current.toString()} onChange={(e)=>handleSizeChange(e)}>
			{
				TitleList.map((value,index)=>{
					return(<Radio.Button value={index.toString()}>{value}</Radio.Button>
					)
				})
			}
		</Radio.Group>

	return (
	
		<div className='ourTeam' >
			<img src={artwork_ech1} />
			<EDFCard className='card-left' title={dictionary.ourTeam} content={content}></EDFCard>
			<EDFCard className='card-right' title={TitleList[current]} coverImage='' content={<p>{TextList[current]}</p>}></EDFCard>
		</div>
	);
};


import './index.scss'
import * as React from "react";
import {EDFCard} from '../../component/card/index.jsx'
import {EDFCard2} from '../../component/card2/index.jsx'
import { Button, Radio } from 'antd';
import {LanguageContext} from '../../containers/Language.js'

export const OurProjects = (event) => {
	const { dictionary } = React.useContext(LanguageContext); 
		const {aOurProjectList} = dictionary
		return (
			<div className='ourProjects'>
				{
					aOurProjectList.map((item, index) => (
						<div key={index} className='card-container'>
							<div key={index} className='card-wrap'>
	
								<div className='card-front'>
									<EDFCard2
										type="front"
										coverImage={require(`../../static/${item.mainImg}`).default}
										title={item.title}
										>
									</EDFCard2>
								</div>
	
								<div className='card-back'>
									<EDFCard2
										type="back"
										title={item.title} 
										content={item.desc}>
									</EDFCard2>
							  </div>
	
						</div>
					</div>
					))
				}
			</div>
			
		);
};


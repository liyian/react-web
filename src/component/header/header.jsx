import './header.less'
import * as React from "react";
import { PageHeader } from 'antd';

import {EDFbanner} from './banner'
import {EDFnavbar} from './navbar'

//import { Row, Col } from 'antd';


const menuStyle = {
	background: 'rgba(0,26,112,1)',
};

const itemStyle ={
	background: 'rgba(255,26,112,1)',
	color: 'rgb(0,0,0)',
};

class EDFheader extends React.Component {
	render() {
		return (
			<div>
				<div style={{position: 'sticky'}}>
				<EDFnavbar />
				</div>
				
				<EDFbanner />
			</div>
		);
	}
}

export {EDFheader}

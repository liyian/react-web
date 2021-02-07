import './header.less'
import * as React from "react";
import { PageHeader } from 'antd';

import {EDFbanner} from './banner'
import {EDFnavbar} from './navbar'

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

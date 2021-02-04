import './index.less'
import * as React from "react";

import { Card } from 'antd';
const { Meta } = Card;

export var EDFCard= (props) => {
	
	return (
		<Card className={props.className} title={props.title}
		    hoverable
		    cover={props.coverImage}>
			{props.content}
		</Card>
  );
};


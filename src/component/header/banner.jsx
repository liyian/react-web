import React, { useContext, useState } from 'react';

import { Carousel } from 'antd';

import artwork_ech1 from './artwork_ech1.png';

import { Text, LanguageContext } from '../../containers/Language';

const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

const contentStyle = {
	height: '91hv',
	color: '#fff',
	lineHeight: '91hv',
	textAlign: 'center',
	background: '#364d79',
	position: 'relative'
  };

const imgStyle = {
	height: '20%',
	width: '100%',
	color: '#fff',
	lineHeight: '20%',
	textAlign: 'center',
	background: '#364d79',
};

const boxStyle = {
	position: 'absolute',
	background: 'rgba(0,26,112,0.4)',
	bottom: '10%',
	left: '5%',
	width: '50%',
	maxHeight: '50%',
	minHeight: '40%',
	color: 'white',
	overflow: 'auto',
	padding: '15px'
};

const pStyle = {
	textAlign: 'left',
	color: 'white'
};

const bannerStyle = {
    height: '91vh',
    padding: '0px'
};

//class EDFbanner extends React.Component {
export function EDFbanner() {

//    render(){

        const [clickText, setClickText] = useState();
        const { dictionary } = useContext(LanguageContext);
        return(
            <div style={bannerStyle}>
                <div style = {contentStyle}>
                    <Carousel autoplay='true' dots ={false}>
                        <div>
                        <img 
                        width="100%"
                        height = '530px'
                        src={artwork_ech1} 
                        alt="img"
                        />
                        </div>
                        <div>
                        <img width="100%" height = '530px' src={'https://react.semantic-ui.com/images/wireframe/image.png'} alt="img"/>
                        </div>
                        <div>
                        <img width="100%" height = '530px' src={'https://react.semantic-ui.com/images/wireframe/image.png'} alt="img"/>
                        </div>
                    </Carousel>
                </div>
                <div style={boxStyle}>
                    <h1 style ={pStyle}><Text tid="headerTitle" /></h1>
                    <h2 style ={pStyle}><Text tid="headerSubtitle" /></h2>
                    <p style ={pStyle}><Text tid="headerText" /></p>
                </div>
            </div>
        );

    //}
};

//export {EDFbanner}



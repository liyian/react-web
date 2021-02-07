import React, { useContext, useState } from 'react';

import { Carousel, Card, Image } from 'antd';

import beijing from './beijing2.jpg';
import shanghai from './shanghai.jpg';
import shenzhen from './shenzhen.jpg';
// 'https://react.semantic-ui.com/images/wireframe/image.png'

import { Text, LanguageContext } from '../../containers/Language';

const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

const contentStyle = {
    flex: 1,
	height: '100vh',
	color: '#fff',
	lineHeight: '100vh',
	textAlign: 'center',
	background: '#FFFFFF',
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
	backgroundColor: 'rgba(0,0,0,0.5)',
	bottom: '10%',
	left: '5%',
    width: '45%',
    minheight: '20%',
	color: 'white',
	overflow: 'auto',
};

const titleStyle = {
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '30pt',
    fontWeight: 'bolder',
    lineHeight: '12pt',
    padding: '10px 0'
}

const stitleStyle = {
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '20pt',
    lineHeight: '12pt',
    fontWeight: 'bolder'
}

const pStyle = {
	textAlign: 'left',
    color: 'white',
    fontFamily: 'Montserrat',
    paddingBottom: '0px'
};

const bannerStyle = {
    height: '100vh',
    padding: '0px'
};

export function EDFbanner() {

        //const [clickText, setClickText] = useState();
        //const { dictionary } = useContext(LanguageContext);
        return(
            <div style={bannerStyle}>
                <div style = {contentStyle}>
                    <Carousel autoplay='true' dots ={false}>
                        <div>
                        <Image preview={false} width="100%" height = '100vh' src={shenzhen} alt="img"/>
                        </div>
                        <div>
                        <Image preview={false} width="100%" height = '100vh' src={shanghai} alt="img"/>
                        </div>
                        <div>
                        <Image preview={false} width="100%" height = '100vh' src={beijing} alt="img"/>
                        </div>
                    </Carousel>
                </div>
                <div style={boxStyle}>
                    <Card style={{borderColor: 'rgba(0,0,0,0.5)' , borderRadius: '0', textAlign:'left', lineHeight:'20px', backgroundColor:'rgba(0,0,0,0.25)'}}>
                        <div style ={{height: '200px'}}>
                            <h1 style={{color:'white', lineHeight:'30px'}}><Text tid="headerTitle" /></h1>
                            <h2 style={{color:'white', lineHeight:'35px'}}><Text tid="headerSubtitle" /></h2>
                            <p style={{color:'white'}}><Text tid="headerText" /></p>
                        </div>
                    </Card>
                </div>
            </div>
        );

};

import React, { useContext, useState } from 'react';
import { Text, LanguageContext } from '../../containers/Language';
import { languageOptions } from '../../languages';
import logo from '../../static/logo.png'
import { Menu } from 'antd';
import { Button } from 'antd';

const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

const getChildrenToRender = (item, i) => {
	let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
	tag = item.href ? 'a' : tag;
	let children = typeof item.children === 'string' && item.children.match(isImg)
	  ? React.createElement('img', { src: item.children, alt: 'img' })
	  : item.children;
	if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
	  children = React.createElement(Button, {
		...item.children
	  });
	}
	return React.createElement(tag, { key: i.toString(), ...item }, children);
};

const dataSource = {

	logo: {
		className: 'header0-logo',
		children: logo,
	  },
	Menu: {
		className: 'header0-menu',
		children:[
			{
				name: 'item0',
				className: 'header0-item',
				hovered: 'false',
				children: {
				  href: '#',
				  children: [{ children: 'Home', name: 'text' }],
				},
			},
			{
				name: 'item1',
				className: 'header0-item',
				hovered: 'false',
				children: {
				  href: '#',
				  children: [{ children: 'Our Teams', name: 'text' }],
				},
			},
			{
				name: 'item2',
				className: 'header0-item',
				hovered: 'false',
				children: {
				  href: '#',
				  children: [{ children: 'Our Projects', name: 'text' }],
				},
			},
			{
				name: 'item3',
				hovered: 'false',
				className: 'header0-item',
				children: {
				  href: '#',
				  children: [{ children: 'Careers', name: 'text' }],
				},
			},
		]
	}
};

class LeftMenu extends React.Component {

    handleClick = e => {
		this.props.control.current.goTo(e.key)
    };

	render() {
		const navData = dataSource.Menu.children;
		const navChildren = navData.map((item,index) => {
			const { children: a, subItem, ...itemProps } = item;
			return (
			  <Menu.Item key={index} {...itemProps} 
			  onMouseEnter={() => {a.children.hovered= 'true';}}
				
			  >
				<a {...a} className={`header0-item-block ${a.className}`.trim()}>
				  {a.children.map(getChildrenToRender)}
				</a>
			  </Menu.Item>
			);
		  });

		return (
			<Menu
            mode={'horizontal'}
            onClick={this.handleClick}
 
            defaultSelectedKeys={['sub0']}
            >
				{navChildren}
			</Menu>

		);
	}
}

function RightMenu() {
	
	const { userLanguage, userLanguageChange } = useContext(LanguageContext);
	const handleLanguageChange = e => userLanguageChange(e.key);

	return (
		<Menu mode="horizontal" onClick={handleLanguageChange}>
			{Object.entries(languageOptions).map(([id, name]) => (
				<Menu.Item key={id}>
					{name}
				</Menu.Item>
			))}
		</Menu>
	);	
};

/*
<Menu.Item key="language-en">
	<a href="" onClick={handleLanguageChange} value={userLanguage}> English</a>
	</Menu.Item>
	<Menu.Item key="language-cn">
	<a href="" onClick={handleLanguageChange} value={userLanguage}>Chinese</a>
</Menu.Item>
*/

class EDFnavbar extends React.Component{

	
    /*
    handleClick = e => {
		console.log('click ', e);
		this.setState({ current: e.key });
    };
    */

	render() {
		return (
			<nav className='menuBar'>
				<div className='logo'> <img href="" src={logo}></img> </div>
				<div className='menuContent'>
					<div className='leftMenu'> <LeftMenu control={this.props.control}/> </div>
					<div className='rightMenu'> <RightMenu /> </div>
				</div>
			</nav>


		);
	}
	
}

export {EDFnavbar}
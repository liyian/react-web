import * as React from "react";
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
		children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
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

    state = {
		current: 'home',
    }

    handleClick = e => {
		console.log('click ', e);
		this.setState({ current: e.key });
    };

	render() {
        const {current} = this.state;
		const navData = dataSource.Menu.children;
		const navChildren = navData.map((item) => {
			const { children: a, subItem, ...itemProps } = item;
			return (
			  <Menu.Item key={item.name} {...itemProps} 
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
            selectedKeys={[current]}
            defaultSelectedKeys={['sub0']}
            >
				{navChildren}
			</Menu>

		);
	}
}

class RightMenu extends React.Component {
	render() {
	  return (
		<Menu mode="horizontal">
		  <Menu.Item key="language-en">
			<a href="">English</a>
		  </Menu.Item>
		  <Menu.Item key="language-cn">
			<a href="">Chinese</a>
		  </Menu.Item>
		</Menu>
	  );
	}
  }

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
				<div className='logo'> <a href="">logo</a> </div>
				<div className='menuContent'>
					<div className='leftMenu'> <LeftMenu /> </div>
					<div className='rightMenu'> <RightMenu /> </div>
				</div>
			</nav>


		);
	}
	
}

export {EDFnavbar}
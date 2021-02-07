import React from 'react';
import { Button, Affix } from 'antd';
import './App.css';


import {EDFbanner} from './component/header/banner.jsx'
import {EDFnavbar} from './component/header/navbar.jsx'
import {EDFCard} from './component/card/index.jsx'
import { LandingBody} from './pages/body/index.jsx'

import { LanguageProvider } from './containers/Language';

/*
Multi Language: https://dev.to/halilcanozcelik/create-a-multi-language-website-with-react-context-api-4i27
Ant Design Navbar: https://medium.com/zestgeek/ant-design-navbar-with-responsive-drawer-a8d718e471e0


Custom Ant Design: https://medium.com/@aksteps/customising-ant-design-antd-theme-without-using-react-eject-or-any-unreliable-libraries-782c53cbc03b
List of theme variables: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
To change theme, modify theme colors in "styles/main.less" and then run:
  lessc "./src/styles/main.less" "./src/styles/antd.css" --js
*/

const App = () => {
	const ref = React.createRef();
	return (
	<LanguageProvider>
	<div className="App">

	  <Affix className='navBar' offsetTop={0}>
		<EDFnavbar control={ref} />
	  </Affix>
	  <LandingBody ref={ref}/>
	</div>
	</LanguageProvider>
	)
};

export default App;
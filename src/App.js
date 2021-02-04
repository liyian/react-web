import React from 'react';
import { Button } from 'antd';
import './App.css';

import {EDFCard} from './component/card/index.jsx'
import { LandingBody} from './pages/body/index.jsx'

import { LanguageProvider } from './containers/Language';
import LanguageSelector from './component/LanguageSelector';

const App = () => (
  <LanguageProvider>
    <div className="App">
      <LandingBody />
    </div>
  </LanguageProvider>
);

export default App;
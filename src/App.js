import React from 'react';
import './App.css';

import AppHeader from './components/common/Header';
import { Layout } from 'antd';
import Home from './views/Home';
const { Header, Content } = Layout; 

function App() {
  return (
    <Layout className="min layout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <Home/>
    </Content>
  </Layout>
  );
}

export default App;

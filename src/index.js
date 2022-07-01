import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import { StoreProvider } from './Store';
  
  ReactDOM.render(
    <StoreProvider>
    <App />
  </StoreProvider>,
    document.getElementById("root")
  );


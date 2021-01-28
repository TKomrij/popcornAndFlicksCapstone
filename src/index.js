import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Flick } from './components/Flick';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Flick />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



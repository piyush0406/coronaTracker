import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

import ReactGA from 'react-ga';
//import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-177100276-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
//ReactGA.set({
//  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
//})

ReactDOM.render(<App /> , document.getElementById('root'));

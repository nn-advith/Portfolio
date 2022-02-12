import './styles.css'

import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import mongoose from 'mongoose';

const CONNECTION_URL = "mongodb+srv://portfolio:portfolio@visiters.spbzn.mongodb.net/Cluster0?retryWrites=true&w=majority"


ReactDOM.render(  <App / >,document.getElementById('root'));
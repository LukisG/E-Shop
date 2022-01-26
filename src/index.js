import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

const rootElement = document.getElementById("root");
render(
  <Container>
  <App/>
  </Container>,
  rootElement
);



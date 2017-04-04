import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HelloWorld } from "./hello";


ReactDom.render(
  <HelloWorld you="Jason ou Didier" me="Ludovic" />,
  document.getElementById('root')
);

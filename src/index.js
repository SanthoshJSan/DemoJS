import React from 'react';
import ReactDOM from 'react-dom';
import Comp,{Read} from './components/buttons';
import "./index.css"

ReactDOM.render(
  <div>
    <Comp name="Create" />
    <Comp name="Update" />
    <Comp name="Delete" />
    <Read name="Read" />
  </div>
    ,
  document.getElementById('root')
);


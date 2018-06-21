import React, { Component } from 'react';
import ListBig from '../UserPreview/ListBig';
import ListSmall from '../UserPreview/ListSmall';
// import ajax from 'ajax';
// import axios from 'axios';
// import $ from  'jquery';
import style from './body.css'

export class Body extends React.Component {
   

  render() {
    return (
        <div className="div_team">
          <div className="text_team"><a>Team</a></div>
            <ListBig/>
            <div className="list_small">
            <ListSmall/>
            </div>
        </div>
    );
  }
}

export default Body;
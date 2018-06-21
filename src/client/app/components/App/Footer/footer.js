import React, { Component } from 'react';
import PositionList from '../PositionPreview/PositionList'
import style from './footer.css';

export class Footer extends React.Component {
    render(){
      return(
        <div className="div_hiring">
        <div className="text_hiring">
        <a>Hiring</a>
        </div>
        <div className="positions_hiring">
        <PositionList/>
        </div>
        </div>
      );
    }
  }

export default Footer;
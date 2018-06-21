import React, { Component } from 'react'

import styles from './PositionList.css'

class PositionList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/positions')
      .then(res => res.json())
      .then(data => this.setState({ data }, () =>
        console.log('positions')
      ));
  }

  render() {
    return (
      <div className="p_div">
        {this.state.data.map(function (item, key) {
          return (
            <ul className={'p'+key} key={key}>
                <li className="p_title">{item.title}</li>
            </ul>
          )
        })}</div>
        
    );
  }
}
export default PositionList;
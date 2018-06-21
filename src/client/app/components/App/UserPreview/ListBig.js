import React, { Component } from 'react'

import styles from './ListBig.css'

class ListBig extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/users/big')
      .then(res => res.json())
      .then(data => this.setState({ data }, () =>
        console.log('fetch')
      ));
  }

  render() {
    return (
      <table className="t01">
        {this.state.data.map(function (item, key) {
          return (
              <tbody className={'t'+key} key={key}>
              <tr>
                <td><img className="big_pic" src={'/assets/' + item.picture}></img></td>
              </tr>
              <tr>
                <td className="big_name">{item.name}</td>
            </tr>
          </tbody>
          )
        })}</table>
        
    );
  }
}
export default ListBig;

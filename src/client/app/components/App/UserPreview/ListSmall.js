import React, { Component } from 'react'

import styles from './ListSmall.css'

class ListSmall extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/users/small')
      .then(res => res.json())
      .then(data => this.setState({ data }, () =>
        console.log('fetch')
      ));
  }

  render() {
    return (
      <table className="z01">
        {this.state.data.map(function (item, key) {
          return (
              <tbody className={'z'+key} key={key}>
              <tr>
                <td><img className="small_pic" src={'/assets/' + item.picture}></img></td>
                <td className="small_name">{item.name}</td>
            </tr>
          </tbody>
          )
        })}</table>
        
    );
  }
}
export default ListSmall;

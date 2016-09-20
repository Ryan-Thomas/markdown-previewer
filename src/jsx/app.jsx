import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';
import Input from './input';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
      </div>
    )
  }
}

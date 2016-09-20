import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <textarea rows="20" cols="50" placeholder="Type your raw markdown here">
      </textarea>
    );
  }
}

import { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <span>{this.props.contact}</span>
      </>
    );
  }
}

export default Contact;

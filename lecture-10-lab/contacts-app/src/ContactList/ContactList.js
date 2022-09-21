import { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact/Contact';

import './ContactList.scss';

const mapStateToProps = (state) => ({ contacts: state.contacts });

class ContactListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const contacts = this.props.contacts.map((c, i) => (
      <li>
        <Contact contact={c} />
      </li>
    ));
    return <ol>{contacts}</ol>;
  }
}

const ContactList = connect(mapStateToProps)(ContactListComponent);

export default ContactList;

import { Component } from 'react';
import './Navbar.scss';

import { addContact as addContactAction } from '../Store/Actions/contacts-action';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContactAction(contact)),
  };
};

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }
  create() {
    // const addContactHandler = this.props.addContactHandler;
    const contact = 'John Cena';
    this.props.addContact(contact);
  }
  render() {
    return (
      <nav>
        <button onClick={this.create.bind(this)}>Add Contact</button>
      </nav>
    );
  }
}
const Navbar = connect(null, mapDispatchToProps)(NavbarComponent);
export default Navbar;

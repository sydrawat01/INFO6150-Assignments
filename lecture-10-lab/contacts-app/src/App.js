import { Component } from 'react';
import './App.scss';

import Navbar from './Navbar/Navbar';
import ContactList from './ContactList/ContactList';

// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//   };
// };

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contacts: this.props.contacts,
  //   };
  // }

  // When the page loads
  // componentDidMount() {
  //   // this.setState({
  //   //   contacts: [...this.state.contacts, 'Tim Cook'],
  //   // });
  // }

  // addContact(newContact) {
  //   const contacts = [...this.state.contacts]; //shallow clone
  //   this.setState({
  //     contacts: [...contacts, newContact],
  //   });
  // }

  render() {
    return (
      <>
        {/* <Navbar addContactHandler={this.addContact.bind(this)} />
        <ContactList contacts={this.state.contacts} /> */}
        <Navbar></Navbar>
        <ContactList></ContactList>
      </>
    );
  }
}

// const App = connect(mapStateToProps)(AppComponent);

export default App;

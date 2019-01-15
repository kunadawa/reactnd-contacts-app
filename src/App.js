import React, { Component } from 'react';
import ContactList from './contact-list';

class App extends Component {
    state = {
        contacts :
            [{
                "id": "karen",
                "name": "Karen Isgrigg",
                "handle": "karen_isgrigg",
                "avatarURL": "http://localhost:5001/karen.jpg"
            },
            {
                "id": "richard",
                "name": "Richard Kalehoff",
                "handle": "richardkalehoff",
                "avatarURL": "http://localhost:5001/richard.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "handle": "tylermcginnis",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }

    // created as an arrow function so that it's ref can be passed to the button as a component prop
    removeContact = (contact) => {
        // not sure not using a concise syntax inside filter() did not work
        this.setState((currentState) => ({contacts :currentState.contacts.filter((current_contact) => {return current_contact.id !== contact.id})}))
    }

  render() {
      return <div><ContactList contacts={this.state.contacts} remove_contact={this.removeContact} /></div>
  }
}

export default App;

import React, {Component} from 'react';
// this was preceded by running `npm install --save prop-types` on the CLI
import PropTypes from 'prop-types';

class ContactList extends Component{
    // prop-types warnings are displayed in the browser console (not app CLI)
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        remove_contact: PropTypes.func.isRequired,
    }

    /* since contacts came in as a prop, we are advised against placing it in the state, otherwise
        that would have been the place to carry out the 'filter by query'
     */
    state = {
        query: ''
    }

    // to see this value being updated on the fly in react dev tools, select the contact list component
    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render() {
        // using this variable since this.props.contacts is readonly
        let showingContacts;
        if (this.state.query.length > 0) {
            showingContacts = this.props.contacts.filter(
                contact => contact.name.toLowerCase().includes(this.state.query.toLowerCase()))
        } else {
            showingContacts = this.props.contacts
        }
        return (
            <div className="list-contacts">
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <div className='showing-contacts'>
                    Showing {showingContacts.length} of {this.props.contacts.length} contacts
                </div>
                <ol className="contact-list">
                    {
                        showingContacts.map(
                            contact => <li className='contact-list-item' key={contact.id}>
                                <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}>

                                </div>
                                <div className='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                                <button onClick={() => this.props.remove_contact(contact)} className='contact-remove'>Remove</button>
                            </li>
                        )
                    }
                </ol>
            </div>
        )
    }
}

export default ContactList
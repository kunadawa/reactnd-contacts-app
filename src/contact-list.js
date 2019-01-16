import React from 'react';
// this was preceded by running `npm install --save prop-types` on the CLI
import PropTypes from 'prop-types';

function ContactList (props) {
    return (
        <ol className="contact-list">
            {
                props.contacts.map(
                    contact => <li className='contact-list-item' key={contact.id}>
                        <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}>

                        </div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button onClick={() => props.remove_contact(contact)} className='contact-remove'>Remove</button>
                    </li>
                )
            }
        </ol>
    )
}

// prop-types warnings are displayed in the browser console (not app CLI)
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    remove_contact: PropTypes.func.isRequired,
}

export default ContactList
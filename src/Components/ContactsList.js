import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

const ContactList = props => (
    <div>
        {props.contacts.map(contact => (
            <Contact item={contact} key={contact.id}/>
        ))}
    </div>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default ContactList;

import React from "react";
import PropTypes from "prop-types";
import icon from "../data/contact_icon.png";

const Contact = props => (
    <div className="contactItem">
        <img src={icon} alt="sorry"/>
        <p>Imię: {props.item.firstName}</p>
        <p>Nazwisko: {props.item.lastName}</p>
        <a href={"mailto:" + props.item.email}>{props.item.email}</a>
    </div>
);

Contact.propTypes = {
    item: PropTypes.object.isRequired
};

export default Contact;

import React from 'react';
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactsList";
import "./style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts
        }
    }

    formHandling(firstName, lastName, email) {
        let newContacts = Array.from(this.state.contacts);
        let newContact = {
            id: newContacts.length + 1,
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        newContacts.push(newContact);
        this.setState({contacts: newContacts});
    }

    render() {
        return (
            <div>
                <ContactForm formHandling={this.formHandling.bind(this)}/>
                <ContactList contacts={this.state.contacts}/>
            </div>
        )
    }
}

export default App;

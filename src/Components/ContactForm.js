import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
    }

    render() {
        return (
            <form className="contactForm">
                <input type="text" placeholder="Imię" onChange={event => (
                    this.setState({firstName: event.target.value})
                )}/>
                <input type="text" placeholder="Nazwisko" onChange={event => (
                    this.setState({lastName: event.target.value})
                )}/>
                <input type="email" placeholder="Email" onChange={event => (
                    this.setState({email: event.target.value})
                )}/>
                <button type="submit" onClick={(event) => {
                    event.preventDefault();
                    this.props.formHandling(this.state.firstName, this.state.lastName, this.state.email)}
                }
                >Dodaj kontakt</button>
            </form>
        )
    }
}

export default ContactForm;

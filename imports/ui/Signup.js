import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        // Mit "e" könnten die Werte geholt werden. Eleganter ist jedoch es mit React-"refs" zu machen.
        // Die beiden "input"-Elemente besitzen zusätzlich ein "ref"-Attribut. Die können direkt angesprochen
        // werden. Etwa so:
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if(password.length < 5) {
            return this.setState({error: 'Passwort muss mindestens 5 Zeichen lang sein!'});
        }
        // console.log(email,password);
        // Accounts.createUser({email: email,password: password}, (err) => {});
        // Beispiel: Besser, Shorthand version von Zeile hier drüber
        Accounts.createUser({email,password}, (err) => {
            if(err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
                console.log('Signup callback',err);
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Join</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="eMail"/>
                    <input type="password" ref="password" name="password" placeholder="Passwort"/>
                    <button>Create Account</button>
                </form>
                <p><Link to="/">Already have an account?</Link></p>
            </div>
        );
    }
}

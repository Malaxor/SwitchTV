
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends Component {

    state = {

        isSignedIn: null
    };

    componentDidMount() {

        window.gapi.load('client:auth2', () => {

            window.gapi.client.init({

                clientId: "1011041699108-j978qfkpsj92qi4lnhu5554kqq73f8g1.apps.googleusercontent.com",
                scope: 'email'
            })
            .then(() => {

                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                // dynamically displays whether or not a user is signed in
                // prior to this method's utilization, you'd have to refresh the page to see the signed in/out status
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {

        isSignedIn === true ? this.props.signedIn() : this.props.signOut();
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });

    };

    onSignInClick = () => {

        this.auth.signIn();
    };

    onSignOutClick = () => {

        this.auth.signOut();
    };

    renderOffButton() {
        
        if(this.state.isSignedIn === null) {
            
            return null;
        }
        else if(this.state.isSignedIn) {

            return (

                <button 
                    className="ui red google button"
                    onClick={this.onSignOutClick}    
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (

                <button 
                    className="ui red google button"
                    onClick={this.onSignInClick}
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return(

            <div>{this.renderOffButton()}</div>
        );
    }
}
export default connect(null, { signOut, signIn })(GoogleAuth);
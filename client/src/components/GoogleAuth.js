
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends Component {

    componentDidMount() {

        window.gapi.load('client:auth2', () => {

            window.gapi.client.init({

                clientId: "1011041699108-j978qfkpsj92qi4lnhu5554kqq73f8g1.apps.googleusercontent.com",
                scope: 'email'
            })
            .then(() => {

                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // dynamically displays whether or not a user is signed in
                // prior to this method's utilization, you'd have to refresh the page to see the signed in/out status
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {

        isSignedIn ? this.props.signIn() : this.props.signOut();
    };

    onSignInClick = () => {

        this.auth.signIn();
    };

    onSignOutClick = () => {

        this.auth.signOut();
    };

    renderOffButton() {
        
        if(this.props.isSignedIn === null) {
            
            return null;
        }
        else if(this.props.isSignedIn) {

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

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);
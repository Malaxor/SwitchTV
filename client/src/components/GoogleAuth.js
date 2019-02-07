
import React, { Component } from 'react';

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
                // prior to this method's utilization, you'd have to refresh the page to see the signed in status
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {

        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderOffButton() {
        
        if(this.state.isSignedIn === null) {
            
            return <div>I don't know if we're signed in</div>;
        }
        else if(this.state.isSignedIn) {

            return <div>I'm signed in</div>;
        }
        else {
            return <div>I'm not signed in</div>;
        }
    }

    render() {
        return(

            <div>{this.renderOffButton()}</div>
        );
    }
}
export default GoogleAuth;
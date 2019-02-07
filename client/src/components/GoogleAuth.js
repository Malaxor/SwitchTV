
import React, { Component } from 'react';

class GoogleAuth extends Component {

    componentDidMount() {

        window.gapi.load('client:auth2', () => {

            window.gapi.client.init({

                clientId: "715690154409-e7ktalqrltk1olgfog36ggev2n5lqd7l.apps.googleusercontent.com",
                scope: 'email'
            });
        });
    }
    render() {
        return(

            <div>Google Auth</div>
        );
    }
}
export default GoogleAuth;
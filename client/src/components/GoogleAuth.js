import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSignIn, setSignOut } from '../actions';

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
            // prior to this method's utilization, after signing in/out, you had to refresh the page to see the changed status
            this.auth.isSignedIn.listen(this.onAuthChange);
         });
      });
   };
   onAuthChange = isSignedIn => {
      isSignedIn ? this.props.setSignIn(this.auth.currentUser.get().getId()) : this.props.setSignOut();
   };
   // both signIn and signOut trigger the gapi, eventually causing re-renders
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
export default connect(mapStateToProps, { setSignOut, setSignIn })(GoogleAuth);
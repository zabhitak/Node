import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Feedback"
        description="For credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        // token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_NOT_SECRET_CODE}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);

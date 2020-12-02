import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import query from "../../utils/query";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        price: null
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    componentDidMount() {
        const data = query.searchToObject(this.props.location.search)
        this.setState({ingredients: {
                salad: data.salad,
                meat: data.meat,
                cheese: data.cheese,
                bacon: data.bacon
            }, price: data.price})
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    onCheckoutContinued={this.checkoutContinuedHandler}
                    />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)}
                    />
            </div>
        );
    }
}

export default Checkout;

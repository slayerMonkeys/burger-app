import React, {Component} from 'react';
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import styles from './ContactData.module.css'
import Spinner from "../../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../../HOC/withErrorHandler/withErrorHandler";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'test',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'France'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
                console.error(error);
            })

    }

    render() {
        let form = (
            <form>
                <ul>
                    <li><input type='text' name='name' placeholder="Your Name" /></li>
                    <li><input type='email' name='email' placeholder="Your Mail" /></li>
                    <li><input type='text' name='street' placeholder="Street" /></li>
                    <li><input type='text' name='postal' placeholder="Postal Code" /></li>
                    <li><Button btnType="Success" clicked={this.orderHandler}>ORDER</Button></li>
                </ul>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default withErrorHandler(ContactData, axios);

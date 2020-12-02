import React, {Component} from 'react';

import Button from "../../../components/UI/Button/Button";
import styles from './ContactData.module.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    render() {
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <ul>
                        <li><input type='text' name='name' placeholder="Your Name" /></li>
                        <li><input type='email' name='email' placeholder="Your Mail" /></li>
                        <li><input type='text' name='street' placeholder="Street" /></li>
                        <li><input type='text' name='postal' placeholder="Postal Code" /></li>
                        <li><Button btnType="Success">ORDER</Button></li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default ContactData;

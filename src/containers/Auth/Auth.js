import React, {Component} from 'react';
import { connect } from 'react-redux';

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from './Auth.module.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                errorMessage: null
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false,
                errorMessage: null
            }
        },
        formIsValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        let errorMessage = null

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
            if (!isValid) errorMessage = 'This input is required'
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
            if (errorMessage === null && !isValid) errorMessage = 'minimum '+rules.minLength+' characters are required'
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
            if (errorMessage === null && !isValid) errorMessage = 'you need a maximum of '+rules.maxLength+' characters'
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return {
            isValid: isValid,
            errorMessage: errorMessage
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControlsForm = {...this.state.controls}
        const updatedFormElement = {...updatedControlsForm[controlName]}
        updatedFormElement.value = event.target.value;
        if (updatedFormElement.validation) {
            const { isValid, errorMessage } = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
            updatedFormElement.valid = isValid
            updatedFormElement.errorMessage = errorMessage
        }
        updatedFormElement.touched = true
        updatedControlsForm[controlName] = updatedFormElement;
        let formIsValid = true
        for (let inputIdentifier in updatedControlsForm) {
            formIsValid = updatedControlsForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({controls: updatedControlsForm, formIsValid: formIsValid});
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                errorMessage={formElement.config.errorMessage}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ))

        return (
            <div className={styles.Auth}>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success" disabled={!this.state.formIsValid} >SUBMIT</Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);

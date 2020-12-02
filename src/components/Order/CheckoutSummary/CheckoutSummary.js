import React from 'react';

import styles from './CheckoutSummary.module.css';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <div className={styles.CheckoutSummaryButtons}>
                <Button
                    btnType="Danger"
                    clicked
                >CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked
                >CONTINUE</Button>
            </div>

        </div>
    )
};

export default CheckoutSummary;

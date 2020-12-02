import React from 'react';

import styles from './Order.module.css';
import {capitalize} from '../../utils/String';

const Order = (props) => {
    let ingredientString = []
    for (let ingredient in props.ingredients) {
        ingredientString.push(`${ingredient} (${props.ingredients[ingredient]})`)
    }
    return (
        <div className={styles.Order}>
            <p>Ingredients: {capitalize(ingredientString.join(", "))}</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    );
}

export default Order;

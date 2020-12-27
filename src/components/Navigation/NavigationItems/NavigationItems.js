import React from 'react';

import styles from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {!props.isAuth ? <NavigationItem link="/auth">Authenticate</NavigationItem>: <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default NavigationItems;

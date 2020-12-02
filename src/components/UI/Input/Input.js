import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={styles.InputElement}
                {...props.elementConfig}
                value={props.changed} />
            break
        case ('textarea'):
            inputElement = <textarea
                className={styles.InputElement}
                {...props.elementConfig}
                value={props.changed} />
            break
        default:
            inputElement = <input
                className={styles.InputElement}
                {...props.elementConfig}
                value={props.changed} />
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;

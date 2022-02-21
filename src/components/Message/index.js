import classNames from 'classnames';
import styles from './message.module.css';
import React from 'react';

export const Message = (props) => {
    let className = classNames(styles.message, {
        [styles.primary]: props.theme === 'primary',
        [styles.error]: props.theme === 'error',
    })

    return (<message
        className={className}
    >
        {props.children}  
        {props.content}
    </message>)
}
import classNames from 'classnames';
import styles from './message.module.css';

export const Message = (props) => {
    let className = classNames(styles.message, {
        [styles.primary]: props.theme === 'primary',
        [styles.error]: props.theme === 'error',
    })

    return (<div
        className={className}
    >
        {props.children}  
        {props.content}
    </div>)
}
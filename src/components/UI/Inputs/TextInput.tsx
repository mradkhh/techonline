import React, {FC} from 'react';
import styles from './styles/TextInput.module.scss'

interface TextInputProps {
    label: string | boolean,
    placeholder: string,
    type: string,
    require?: boolean,
    radioValue?: string | number,
    radioName?: string
}

const TextInput: FC<TextInputProps> = ({ label, placeholder , type, require = true, radioValue, radioName}) => {
    return (
        <div className={styles.field}>
            { (label && type !== 'radio') && <label htmlFor="label">{label}<span>{ require && '*' } </span></label> }
            {
                type === 'text' ?
                        <input type="text"  placeholder={placeholder}/>
                    :
                    type === 'password' ?
                            <input type="password"  placeholder={placeholder}/>
                         :
                        type === 'email' ?
                                <input type="email"  placeholder={placeholder}/>
                             :
                            type === 'textarea' ?
                                    <textarea name="" id="" cols={50} rows={15} placeholder={placeholder}/>
                                    :
                                type === 'radio' ?
                                    <>
                                        <label htmlFor="html">{label}</label>
                                    <input type="radio" name={radioName} value={radioValue}/>
                                    </>
                                    :
                                    <input type="text"  placeholder={placeholder}/>
            }
        </div>
    );
};

export default TextInput;
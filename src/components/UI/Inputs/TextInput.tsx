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

const TextInput: FC<TextInputProps> = ({ label,
                                           placeholder ,
                                           type,
                                           require = true,
                                           radioValue,
                                           radioName,
    ...props
}) => {
    return (
        <div className={styles.field}>
            { (label && type !== 'radio') && <label htmlFor="label">{label}<span>{ require && '*' } </span></label> }
            {
                type === 'text' ?
                        <input {...props} type="text"  placeholder={placeholder}/>
                    :
                    type === 'password' ?
                            <input {...props} type="password"  placeholder={placeholder}/>
                         :
                        type === 'email' ?
                                <input {...props} type="email"  placeholder={placeholder}/>
                             :
                            type === 'textarea' ?
                                    <textarea name="" id="" cols={50} rows={15} placeholder={placeholder}/>
                                    :
                                type === 'radio' ?
                                    <>
                                        <label htmlFor="html">{label}</label>
                                    <input {...props} type="radio" name={radioName} value={radioValue}/>
                                    </>
                                    :
                                    <input {...props} type="text"  placeholder={placeholder}/>
            }
        </div>
    );
};

export default TextInput;
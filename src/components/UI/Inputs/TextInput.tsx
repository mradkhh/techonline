import React, {FC} from 'react';
import styles from './styles/TextInput.module.scss'

interface TextInputProps {
    label: string,
    placeholder: string,
    type: string,
    require?: boolean
}

const TextInput: FC<TextInputProps> = ({ label, placeholder , type, require = true}) => {
    return (
        <div className={styles.field}>
            {
                type === 'text' ?
                    <>
                        <label htmlFor="label">{label}<span>{ require && '*' } </span></label>
                        <input type="text"  placeholder={placeholder}/>
                    </> :
                    type === 'password' ?
                        <>
                            <label htmlFor="label">{label}<span>{ require && '*' } </span></label>
                            <input type="password"  placeholder={placeholder}/>
                        </> :
                        type === 'email' ?
                            <>
                                <label htmlFor="label">{label}<span>{ require && '*' } </span></label>
                                <input type="email"  placeholder={placeholder}/>
                            </> :
                            type === 'textarea' ?
                                <>
                                    <label htmlFor="label">{label}<span>{ require && '*' } </span></label>
                                    <textarea name="" id="" cols={50} rows={15} placeholder={placeholder}/>
                                </> :
                                <>
                                    <label htmlFor="label">{label}<span>{ require && '*' } </span></label>
                                    <input type="text"  placeholder={placeholder}/>
                                </>
            }
        </div>
    );
};

export default TextInput;
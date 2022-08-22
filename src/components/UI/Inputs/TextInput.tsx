import React, {createRef, FC, memo, useContext, useEffect} from 'react';
import styles from './styles/TextInput.module.scss'
import {Context} from "pages/_app";

interface TextInputProps {
    label: string | boolean,
    placeholder: string,
    type: string,
    require?: boolean,
    radioValue?: string | number,
    radioName?: string,
    error?: boolean,
    setError?: (bool: boolean) => void,
    errorText?: string,
    defaultValue?: any
}

const TextInput: FC<TextInputProps> = ({ label,
                                           placeholder ,
                                           type,
                                           require = true,
                                           radioValue,
                                           radioName,
                                           error,
                                           setError, errorText, defaultValue,
                                           ...props
}) => {

    const handleFocus = (e: any) => {
        setError && setError(false)
    }


    return (
        <div className={styles.field}>
            <div className={styles.label}>
                { (label && type !== 'radio') &&
                    <label htmlFor="label">{label}<span>{ require && '*' } </span></label> }
                {(error) &&
                    <span style={{color: 'var(--red)'}}>{ errorText }</span>}
            </div>
            {
                type === 'text' ?
                        <input {...props}
                               onFocus={handleFocus}
                               defaultValue={defaultValue ? defaultValue : ''}
                               style={{
                                   border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                                   animation: (error ) ? 'light 500ms ease' : '' }} type="text"
                               placeholder={placeholder}/>
                    :
                    type === 'password' ?
                            <input {...props}
                                   onFocus={handleFocus}
                                   style={{
                                       border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                                       animation: (error ) ? 'light 500ms ease' : '' }}
                                   type="password"
                                   placeholder={placeholder}/>
                         :
                        type === 'email' ?
                                <input {...props}
                                       onFocus={handleFocus}
                                       style={{
                                           border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                                           animation: (error) ? 'light 500ms ease' : '' }}
                                       type="email"
                                       placeholder={placeholder}/>
                            :
                            type === 'tel' ?
                                <input {...props}
                                       onFocus={handleFocus}
                                       style={{
                                           border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                                           animation: (error) ? 'light 500ms ease' : '' }}
                                       type="tell"
                                       placeholder={placeholder}/>
                             :
                            type === 'textarea' ?
                                    <textarea
                                        {...props}
                                        style={{
                                            border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                                            animation: (error ) ? 'light 500ms ease' : '' }}
                                        onFocus={handleFocus}
                                        name="" id="" cols={50} rows={15} placeholder={placeholder}/>
                                    :
                                type === 'radio' ?
                                    <>
                                        <label htmlFor="html">{label}</label>
                                    <input {...props}
                                           onFocus={handleFocus}
                                           style={{
                                               border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                                               animation: (error ) ? 'light 500ms ease' : '' }}
                                           type="radio"
                                           name={radioName}
                                           value={radioValue}/>
                                    </>
                                    : null
            }
        </div>
    );
};

export default memo(TextInput);
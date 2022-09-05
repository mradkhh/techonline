import React, {FC, memo} from 'react';
import {IRegion} from "models/index";
import styles from './styles/SelectInput.module.scss'

interface SelectInputProps {
    label: string | boolean,
    placeholder: string,
    type: string,
    require?: boolean,
    radioValue?: string | number,
    radioName?: string,
    error?: boolean,
    setError?: (bool: boolean) => void,
    options?: IRegion[],
    onFocus: any,
    setState?: (value: string) => void,
    state: string,
    handleChange: any,
    errorText: string
}

const SelectInput: FC<SelectInputProps> = ({ label,
                         placeholder ,
                         type,
                         require = true,
                         radioValue,
                         radioName,
                         error,
                         setError,
                         options,
                         onFocus,
                         setState, state, handleChange, errorText,
                         ...props
                     }) => {


    return (
       <>
           <div className={styles.field}>
               <div className={styles.label}>
                   { (label) &&
                       <label htmlFor="label">{label}<span>{ require && '*' } </span></label> }
                   {(error) &&
                       <span style={{color: 'var(--red)'}}>{ errorText }</span>}
               </div>
               <select
                   style={{
                       border: (error ) ? '1px solid var(--red)' : '1px solid var(--gray)',
                       animation: (error) ? 'light 500ms ease' : '' }}
                   value={state} onChange={handleChange} onFocus={onFocus} name="" id="">
                   <option defaultValue={''}>select...</option>
                   {
                       options && options.map(item =>
                           <option key={item.id} value={item?.id}>{item?.name}</option>
                       )
                   }
               </select>
           </div>
       </>
    );
};

export default memo(SelectInput);
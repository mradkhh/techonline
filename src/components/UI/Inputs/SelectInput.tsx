import React, {FC} from 'react';
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
    handleChange: any
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
                         setState, state, handleChange,
                         ...props
                     }) => {


    console.log(state)

    return (
       <>
           <div className={styles.field}>
               <label htmlFor="">{label}</label>
               <select value={state} onChange={handleChange} onFocus={onFocus} name="" id="">
                   <option defaultValue={''} selected={true}>select...</option>
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

export default SelectInput;
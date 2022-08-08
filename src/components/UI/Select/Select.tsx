import React, {FC, ReactNode, useState} from 'react';
import {ArrowDown} from "static/icons/icon";
import styles from './Select.module.scss';

type Options = {
    value: number,
    title: string
}

interface SelectProps {
    children: ReactNode,
    options: Options[],
    title: string,
    value: number,
    setTitle: (title: string) => void,
    setValue: (value: number) => void
}

const Select: FC<SelectProps> = ({ children, options, title, setTitle, setValue, value}) => {

    const [ show, setShow ] = useState<boolean>(false)
    const handleSelect = (optionValue: number, optionTitle: string): void => {
        setValue(optionValue)
        setTitle(optionTitle)
        setShow(false);
    }

    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div className={styles.select}>
            <button
                onClick={handleShow}
            >
                {children}
                <span>{ title }</span>
                <ArrowDown/>
            </button>
            {
                show && <div className={styles.options}>
                    {
                        options && options.map(option =>
                            <div
                                onClick={() => handleSelect(option.value, option.title)}
                                key={option.value}
                                className={styles.item}
                            >
                                {option.title}
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default Select;
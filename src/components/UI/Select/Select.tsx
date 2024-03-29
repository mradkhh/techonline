import React, {createRef, FC, memo, ReactNode, useCallback, useState} from 'react';
import {ArrowDown} from "static/icons/icon";
import {useMousedownClickInvisible} from "hooks/useMousedownClickInvisible";
import styles from './Select.module.scss';

type Options = {
    value: string | number,
    title: string
}

interface SelectProps {
    children: ReactNode,
    options: Options[],
    title: string,
    value: number | string,
    setTitle: (title: string) => void,
    setValue: (value: number | string) => void
}

const Select: FC<SelectProps> = ({ children, options, title, setTitle, setValue, value}) => {

    const [ show, setShow ] = useState<boolean>(false)
    const handleSelect = (optionValue: number | string, optionTitle: string): void => {
        setValue(optionValue)
        setTitle(optionTitle)
        setShow(false);
    }
    const showRef = createRef<HTMLDivElement>()

    useMousedownClickInvisible(showRef, () => { setShow(false) })

    const handleShow = useCallback(() => {
        setShow(!show)
    }, [show])
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
                show && <div ref={showRef} className={styles.options}>
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

export default memo(Select);
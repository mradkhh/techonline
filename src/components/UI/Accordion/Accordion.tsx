import React, {FC, memo, ReactNode, useEffect, useState} from 'react';
import styles from './Accordion.module.scss'
import {ArrowDown} from "static/icons/icon";
import useMediaQuery from "hooks/useMediaQuery";

interface AccordionProps {
    children: ReactNode,
    header: string,
    className?: any,
    headerStyle?: any,
    itemsStyle?: any
}

const Accordion: FC<AccordionProps> = ({ children, header, className, headerStyle, itemsStyle}) => {


    const matches = useMediaQuery("(max-width: 991.98px)")
    const [ show, setShow ] = useState<boolean>(true)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className={`${styles.accordion} ${className}`}>
                    <div
                        onClick={handleShow} className={`${styles.header} ${headerStyle}`}>
                        {header}
                        <span className={show ? styles.arrow : ''}>
                            <ArrowDown/>
                        </span>
                    </div>
            {
                show && <div className={`${styles.items} ${itemsStyle} `}>
                            { children }
                        </div>
            }
        </div>
    );
};

export default memo(Accordion);
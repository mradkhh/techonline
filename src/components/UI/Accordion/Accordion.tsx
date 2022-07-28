import React, {FC, memo, ReactNode, useEffect, useState} from 'react';
import styles from './Accordion.module.scss'
import {ArrowDown} from "static/icons/icon";
import useMediaQuery from "hooks/useMediaQuery";

interface AccordionProps {
    children: ReactNode,
    header: string,
}


const Accordion: FC<AccordionProps> = ({ children, header }) => {

    const matches = useMediaQuery("(max-width: 991.98px)")
    const [ show, setShow ] = useState<boolean>(true)


    const handleShow = () => {
        setShow(!show)
    }


    return (
        <div className={styles.accordion}>
            <div onClick={handleShow} className={styles.header}>{header} <span>
                <ArrowDown/>
            </span></div>
            {
                show && <div className={styles.items}>
                    { children }
                </div>
            }
        </div>
    );
};

export default memo(Accordion);
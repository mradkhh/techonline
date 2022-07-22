import React, {FC, memo, ReactNode} from 'react';
import styles from './Accordion.module.scss'

interface AccordionProps {
    children: ReactNode,
    header: string
}


const Accordion: FC<AccordionProps> = ({ children, header }) => {
    return (
        <div className={styles.accordion}>
            <div>{header}</div>
            <div>
                { children }
            </div>
        </div>
    );
};

export default memo(Accordion);
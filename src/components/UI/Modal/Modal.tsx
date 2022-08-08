import React, {FC, ReactNode} from 'react';
import styles from './Modal.module.scss'

interface ModalProps {
    show: boolean,
    setShow: (bool: boolean) => void,
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ show, setShow, children }) => {

    return (
        show ? <div
                onClick={(e) => setShow(false)}
                className={styles.root}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.content}
            >
                {
                    children
                }

            </div>
        </div> : null
    );
};

export default Modal;
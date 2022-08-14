import React, {FC, useState} from 'react';
import styles from './styles/ColorItem.module.scss'

interface ColorItemProps {
    id: number,
    name: string
}


const ColorItem: FC<ColorItemProps> = ({ id, name }) => {

    const [ select, setSelect ] = useState<boolean>(false)

    const handleChoiceColor = () => {
        setSelect(!select)
    }


    return (
        <div style={{ border: select ? '1px solid var(--brand)' : '1px solid var(--white)' }} onClick={handleChoiceColor} className={styles.root}>
            <span style={{backgroundColor: `${name}`, opacity: select ? 1 : 0.7}} ></span>
        </div>
    );
};

export default ColorItem;
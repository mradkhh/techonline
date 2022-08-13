import React, {FC, useState} from 'react';
import styles from './styles/ColorItem.module.scss'

interface ColorItemProps {
    id: number,
    setColorId: (id: number | string) => void,
    name: string
}


const ColorItem: FC<ColorItemProps> = ({ setColorId, id, name }) => {

    const [ select, setSelect ] = useState<boolean>(false)

    console.log(name)
    const handleChoiceCategory = () => {
        select ? setColorId(id) : setColorId('')
        setSelect(!select)
    }
    return (
        <div style={{ border: select ? '1px solid var(--gray)' : '1px solid var(--white)' }} onClick={handleChoiceCategory} className={styles.root}>
            <span style={{backgroundColor: `${name}`, opacity: select ? 1 : 0.7}} ></span>
        </div>
    );
};

export default ColorItem;
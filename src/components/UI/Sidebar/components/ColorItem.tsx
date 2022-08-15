import React, {FC, useEffect, useState} from 'react';
import styles from './styles/ColorItem.module.scss'

interface ColorItemProps {
    id: number,
    setColorId: (arg: any) => void,
    name: string,
    clear: boolean
}


const ColorItem: FC<ColorItemProps> = ({ setColorId, id, name, clear }) => {

    const [ select, setSelect ] = useState<boolean>(false)

    const handleChoiceColor = () => {
        setColorId((state: number[]) => {
            if (state?.find(i => i === id)) {
                return state.filter(item => item !== id)
            } else {
                return [...state, id]
            }
        })
        setSelect(!select)
    }

    useEffect(() => {
        setSelect(false)
    }, [clear] )
    return (
        <div style={{ border: select ? '1px solid var(--brand)' : '1px solid var(--white)' }} onClick={handleChoiceColor} className={styles.root}>
            <span style={{backgroundColor: `${name}`, opacity: select ? 1 : 0.7}} ></span>
        </div>
    );
};

export default ColorItem;
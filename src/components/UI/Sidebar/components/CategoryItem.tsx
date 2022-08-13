import React, {FC, useState} from 'react';
import styles from './styles/CategoryItem.module.scss'

interface CategoryItemProps {
    id: number,
    setCategoryId: (id: number | string) => void,
    name: string
}

const CategoryItem: FC<CategoryItemProps> = ({ id, setCategoryId, name }) => {

    const [ select, setSelect ] = useState<boolean>(false)

    const handleChoiceCategory = () => {
        select ? setCategoryId(id) : setCategoryId('')
        setSelect(!select)
    }

    return (
        <div
            onClick={handleChoiceCategory}
            key={id}
            className={styles.root}
            style={{border: select ? '1px solid var(--gray)' : '1px solid transparent'}}
        >
            <h5>{name}</h5>
        </div>
    );
};

export default CategoryItem;
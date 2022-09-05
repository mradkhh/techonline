import React, {FC, memo, ReactNode, useState} from 'react';
import {RedXIcon} from "static/icons/icon";
import styles from './Tags.module.scss'

type Tag = {
    id: number,
    title: string,
    count: number
}

interface TagsProps {
    tags: Tag[]
}

const Tags: FC<TagsProps> = ({ tags }) => {

    const [ tagArr, setTagArr ] = useState<Tag[]>(tags)

    const handleRemove = (id: number): void => {
        if ( tagArr.length === 1 ) {
            setTagArr([] as Tag[])
            return
        }
        const newTags =  tags.filter(tag => tag.id !== id)
        setTagArr(newTags)
    }

    const handelClear = (): void => {
        setTagArr([] as Tag[])
    }
    return (
        <div className={styles.tags}>
            {
                tagArr && tagArr.map(tag =>
                <div key={tag.id} className={styles.tag}>
                    <h4>
                        { tag.title }
                    </h4>
                    <span>
                        ({tag.count})
                    </span>
                    <button onClick={() => handleRemove(tag.id)}>
                        <RedXIcon/>
                    </button>
                </div>
                )
            }
            {
                tagArr.length > 1 && <button onClick={handelClear} >Clear All</button>
            }
        </div>
    );
};

export default memo(Tags);
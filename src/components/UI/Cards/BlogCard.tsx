import React, {FC, memo} from 'react';
import Image from "next/image";
import styles from './styles/BlogCard.module.scss'

interface BlogCardProps {
    date: string,
    text: string,
    img: any
}


const BlogCard: FC<BlogCardProps> = ({ date, text, img }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <Image
                    width={225}
                    height={150}
                    objectFit='cover'
                    objectPosition='center'
                    alt='blogs'
                    src={img}
                />
            </div>
            <div className={styles.body}>
                <p>{text}</p>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default memo(BlogCard);
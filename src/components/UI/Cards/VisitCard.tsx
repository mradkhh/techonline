import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import Image from "next/image";
import styles from './styles/VisitCard.module.scss'

interface VisitCardProps {
    title: string,
    href: string,
    img: any
}


const VisitCard: FC<VisitCardProps> = ({ title, href, img }) => {
    return (
        <div className={styles.card}>
            <Image
                width={230}
                height={350}
                alt={title}
                src={img}
            />
            <h4>{title}</h4>
            <A href={href}>See All Products</A>
        </div>
    );
};

export default memo(VisitCard);
import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import Image from "next/image";
import styles from './styles/VisitCard.module.scss'
import useMediaQuery from "hooks/useMediaQuery";

interface VisitCardProps {
    title: string,
    href: string,
    img: any
}


const VisitCard: FC<VisitCardProps> = ({ title, href, img }) => {

    const matches = useMediaQuery("(max-width: 768px)")
    const imgHeight = matches ? 240 : 350
    const imgWidth = matches ? 768 : 230
    return (
        <div className={styles.card}>
            <Image
                objectFit={'cover'}
                objectPosition={'center'}
                width={imgWidth}
                height={imgHeight}
                alt={title}
                src={img}
            />
            <h4>{title}</h4>
            <A href={href}>See All Products</A>
        </div>
    );
};

export default memo(VisitCard);
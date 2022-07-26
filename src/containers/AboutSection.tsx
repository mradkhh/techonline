import React, {FC} from 'react';
import Image from "next/image";
import styles from './styles/AboutSection.module.scss'

interface AboutSectionProps {
    type: string,
    title: string,
    text: string,
    icon?: JSX.Element | boolean,
    img: any,
    imgWidth: number,
    imgHeight: number
}


const AboutSection: FC<AboutSectionProps> = ({ type, img, icon = false, title, text , imgWidth, imgHeight}) => {
    return (
        <section className={type === 'black' ? styles.about : styles.content_white}>
            <div>
                <div>
                    {
                        icon && icon
                    }
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div>
                    <Image
                        width={imgWidth}
                        height={imgHeight}
                        objectFit='contain'
                        objectPosition='center'
                        alt={title}
                        src={img}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
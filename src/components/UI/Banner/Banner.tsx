import React, {memo} from 'react';
import Image from "next/image";
import Carousel from "components/UI/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import img from 'static/banner.png'
import styles from './styles/Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Carousel type='banner' autoplay={true} button={true} loop={true} >
                <SwiperSlide>
                        <Image
                            width={1400}
                            height={328}
                            objectPosition='center'
                            objectFit='cover'
                            placeholder='blur'
                            src={img}
                            alt='Premiere'
                        />
                </SwiperSlide>
            </Carousel>
        </div>
    );
};

export default memo(Banner);
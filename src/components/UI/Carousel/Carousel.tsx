import React, {createRef, FC, memo, ReactNode} from 'react';
import {Swiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import SliderBtn from "components/UI/Carousel/SliderBtn";
import useCaseOne from "hooks/useCaseOne";
import 'swiper/css';
import cl from './Carousel.module.scss'

interface CarouselProps {
    children: ReactNode,
    type: string,
    autoplay?: any,
    button?: boolean,
    loop?: boolean
}

const breakpointSlider = {
    320: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 12
    },
    480: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 12
    },
    678: {
        slidesPerGroup: 3,
        slidesPerView: 4,
        spaceBetween: 12
    },
    992: {
        slidesPerGroup: 4,
        slidesPerView: 5,
        spaceBetween: 12
    },
    1200: {
        slidesPerGroup: 5,
        slidesPerView: 6,
    }
}

const breakpointBanner = {
    320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30
    }
}

const breakpointBrand = {
    320: {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 12
    },
    480: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 12
    },
    678: {
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween: 12
    },
    992: {
        slidesPerGroup: 2,
        slidesPerView: 6,
        spaceBetween: 12
    },
    1280: {
        slidesPerGroup: 1,
        slidesPerView: 6,
        spaceBetween: 0
    },
    1300: {
        slidesPerGroup: 1,
        slidesPerView: 7,
        spaceBetween: 0
    }
}

const Carousel: FC<CarouselProps> = memo(({ children, type, autoplay, button = true, loop = true }) => {
    const navigationPrevRef = createRef<HTMLButtonElement>()
    const navigationNextRef = createRef<HTMLButtonElement>()

    const breakpoints = useCaseOne(type, breakpointBanner, breakpointSlider, breakpointBrand)

    return (
        <Swiper
            slidesPerGroup={2}
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
            }}
            onSwiper={(swiper) => {
                setTimeout(() => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    // Re-init navigation
                    swiper.navigation.destroy()
                    swiper.navigation.init()
                    swiper.navigation.update()
                })
            }}
            loop={loop}
            autoplay={autoplay ? autoplay : false }
            breakpoints={breakpoints}
            effect='fade'
            pagination={{
                clickable: true
            }}
        >
            { children }
            { button ?
               <div>
                   <div className={cl.leftButton}>
                       <SliderBtn dir='left' ref={navigationPrevRef}/>
                   </div>
                   <div className={cl.rightButton}>
                       <SliderBtn dir='right' ref={navigationNextRef}/>
                   </div>
               </div>
                :
                null
            }
        </Swiper>
    );
});

Carousel.displayName = 'Carousel'

export default Carousel;
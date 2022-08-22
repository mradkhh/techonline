import {NextPage} from "next";
import React, {useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import img1 from "static/images/about/1.png"
import img2 from "static/images/about/2.png"
import img3 from "static/images/about/3.png"
import img4 from "static/images/about/4.png"
import img5 from "static/images/about/5.png"
import AboutSection from "containers/AboutSection";
import {BlueAvtoIcon, BlueBrandLogoSvg, BlueHeardSvg, BlueStarSvg} from "static/icons/icon";
import Carousel from "components/UI/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import QuoteBanner from "components/UI/Banner/QuoteBanner";
import styles from 'styles/pages/about.module.scss'
import Loading from "components/UI/Loading/Loading";


const breadcrumbs = [
    { path: '/', text: 'Home' }
]


const About: NextPage = () => {

    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
       loading ?
        <Loading/>
           :
           <MainLayout title={"TechOnline - About"} description={"about"} mainClass={"main_about"}>
               <Breadcrumbs array={breadcrumbs} current="About Us"/>
               <h1 className={styles.title}>About Us</h1>
               <AboutSection
                   type={"black"}
                   title="A Family That Keeps On Growing"
                   text="We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                        Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success."
                   img={img1}
                   imgHeight={470}
                   imgWidth={488}
               />
               <AboutSection
                   type={"white"}
                   title="shop.com"
                   text="Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service."
                   img={img2}
                   icon={<BlueBrandLogoSvg/>}
                   imgHeight={540}
                   imgWidth={760}
               />
               <AboutSection
                   type={"black"}
                   title="You're In Safe Hands"
                   text="Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                    *Performance compared to i7-9700. Specs varies by model."
                   img={img3}
                   icon={<BlueHeardSvg/>}
                   imgWidth={700}
                   imgHeight={570}
               />
               <AboutSection
                   type={"white"}
                   title="The Highest Quality of Products"
                   text="We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals."
                   img={img4}
                   icon={<BlueStarSvg/>}
                   imgWidth={600}
                   imgHeight={500}
               />
               <AboutSection
                   type={"black"}
                   title="Delivery to All Regions"
                   text="We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be."
                   img={img5}
                   icon={<BlueAvtoIcon/>}
                   imgWidth={600}
                   imgHeight={500}
               />
               <section className={styles.quotes}>
                   <Carousel type='banner' autoplay={true} button={false} loop={true}>
                       <SwiperSlide>
                           <QuoteBanner
                               quote='My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
                               author='- Adkhambek Yusupov'
                               href="/"
                           />
                       </SwiperSlide>
                   </Carousel>
               </section>
           </MainLayout>
    );
};

export default About;
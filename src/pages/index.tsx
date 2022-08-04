import type { NextPage } from 'next'
import {Tab, TabList, TabPanel} from "react-tabs"
import {SwiperSlide} from "swiper/react";
import MainLayout from "layouts/MainLayout";
import Banner from "components/UI/Banner/Banner";
import Carousel from "components/UI/Carousel/Carousel";
import ProductCard from "components/UI/Cards/ProductCard";
import Tabs from "components/UI/Tabs/Tabs"
import A from "components/UI/A/A";
import VisitCard from "components/UI/Cards/VisitCard";
import BlogCard from "components/UI/Cards/BlogCard";
import QuoteBanner from "components/UI/Banner/QuoteBanner";
import img1 from 'static/images/products/1.jpg'
import img2 from 'static/images/products/2.jpg'
import img3 from 'static/images/products/3.png'
import img4 from 'static/images/products/4.png'
import img5 from 'static/images/products/5.png'
import img6 from 'static/images/products/6.png'
import img7 from 'static/images/products/7.png'
import img8 from 'static/images/products/8.png'
import customImg from 'static/images/categories/custom.png'
import msiImg from 'static/images/categories/msi.png'
import desktopImg from 'static/images/categories/desktop.png'
import gaminImg from 'static/images/categories/gaming.png'
import blogImg1 from 'static/images/blogs/1.png'
import blogImg2 from 'static/images/blogs/2.png'
import { MSIIcon, PartnerLogo } from "static/icons/icon";
import styles from "styles/pages/home.module.scss"
import {useContext, useEffect} from "react";
import {Context} from "pages/_app";

const Index: NextPage = () => {

    const { storeMobx } = useContext(Context)


    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            storeMobx.checkAuth()
        }
    }, [])



  return (
    <>
      <MainLayout title={'Home'} description='Tech Online Market' mainClass={'main_home'}>
          <Banner/>
          <div className={styles.products}>
              <h3>New Products</h3>
              <Carousel type='items' autoplay={false} button={true} loop={true} >
                  <SwiperSlide>
                      <ProductCard
                        image={img1}
                        title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={400}
                        discountPrice={300}
                        isInStock={true}
                        rating={5}
                        reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img2}
                          title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={false}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img3}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img4}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={false}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img5}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img6}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img7}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img8}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
              </Carousel>
          </div>

          <section className={styles.ads}>
              <div className={styles.adsContent}>
                  <PartnerLogo/>
                  <h3><span>own</span> it now, up to 6 months interest free  </h3>
                  <A href='/'> learn more</A>
              </div>
          </section>

          <section className={styles.category}>
                <VisitCard
                    title='Custom Builds'
                    href='/'
                    img={customImg}
                />
              <Carousel type='category' autoplay={false} button={false} loop={true} >
                  <SwiperSlide>
                      <ProductCard
                          image={img1}
                          title='EX DISPY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img2}
                          title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={false}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img3}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img4}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={false}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img5}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img6}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img7}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img8}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
              </Carousel>
          </section>

          <Tabs>
              <TabList className={styles.tabsList}>
                  <Tab key={'first'}>
                      Titan GT Series
                  </Tab>
                  <Tab key={'second'}>
                      Stealth GS Series
                  </Tab>
              </TabList>
          <TabPanel key={'first'} >
              <div className={styles.category}>
                  <VisitCard
                      title='MSI Laptops'
                      href='/'
                      img={msiImg}
                  />
                  <Carousel type='category' autoplay={false} button={false} loop={true} >
                      <SwiperSlide>
                          <ProductCard
                              image={img1}
                              title='EX DISPLArY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={true}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img2}
                              title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={false}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img3}
                              title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={true}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img4}
                              title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={false}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img5}
                              title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={true}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img6}
                              title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={true}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img7}
                              title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={true}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <ProductCard
                              image={img8}
                              title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                              price={400}
                              discountPrice={300}
                              isInStock={true}
                              rating={5}
                              reviews={34}
                          />
                      </SwiperSlide>
                  </Carousel>
              </div>
          </TabPanel>
              <TabPanel key={'second'} >
                  <div className={styles.category}>
                      <VisitCard
                          title='Custom Builds'
                          href='/'
                          img={msiImg}
                      />
                      <Carousel type='category' autoplay={false} button={false} loop={true} >
                          <SwiperSlide>
                              <ProductCard
                                  image={img1}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img2}
                                  title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={false}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img3}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img4}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={false}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img5}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img6}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img7}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img8}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                      </Carousel>
                  </div>
              </TabPanel>
          </Tabs>

          <Tabs>
              <TabList className={styles.tabsList}>
                  <Tab key={'first'}>
                      MSI Infinute Series
                  </Tab>
                  <Tab key={'second'}>
                      MSI Triden
                  </Tab>
                  <Tab key={'third'}>
                      MSI GL Series
                  </Tab>
                  <Tab key={'fifth'}>
                      MSI Night blade
                  </Tab>
              </TabList>
              <TabPanel key={'first'} >
                  <div className={styles.category}>
                      <VisitCard
                          title='Desktops'
                          href='/'
                          img={desktopImg}
                      />
                      <Carousel type='category' autoplay={false} button={false} loop={true} >
                          <SwiperSlide>
                              <ProductCard
                                  image={img1}
                                  title='EX DweISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img2}
                                  title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={false}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img3}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img4}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={false}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img5}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img6}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img7}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img8}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                      </Carousel>
                  </div>
              </TabPanel>
              <TabPanel key={'second'} >
                  <div className={styles.category}>
                      <VisitCard
                          title='Custom Builds'
                          href='/'
                          img={msiImg}
                      />
                      <Carousel type='category' autoplay={false} button={false} loop={true} >
                          <SwiperSlide>
                              <ProductCard
                                  image={img1}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img2}
                                  title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={false}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img3}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img4}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={false}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img5}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img6}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img7}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                          <SwiperSlide>
                              <ProductCard
                                  image={img8}
                                  title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                  price={400}
                                  discountPrice={300}
                                  isInStock={true}
                                  rating={5}
                                  reviews={34}
                              />
                          </SwiperSlide>
                      </Carousel>
                  </div>
              </TabPanel>
          </Tabs>

          <section className={styles.category}>
              <VisitCard
                  title='Gaming Monitors'
                  href='/'
                  img={gaminImg}
              />
              <Carousel type='category' autoplay={false} button={false} loop={true} >
                  <SwiperSlide>
                      <ProductCard
                          image={img1}
                          title='EX DISPLAY : MerSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img2}
                          title='Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={false}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img3}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img4}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={false}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img5}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img6}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img7}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductCard
                          image={img8}
                          title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                          price={400}
                          discountPrice={300}
                          isInStock={true}
                          rating={5}
                          reviews={34}
                      />
                  </SwiperSlide>
              </Carousel>
          </section>

          <section className={styles.brands}>
              <Carousel type='brand' autoplay={true} button={false} loop={true} >
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={styles.brandIcon}>
                          <MSIIcon/>
                      </div>
                  </SwiperSlide>
              </Carousel>
          </section>

          <h2 className={styles.blogsTitle}>Follow us on Instagram for News, Offers & More</h2>
          <section className={styles.blogs}>
              <BlogCard
                text="If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
                date='01.09.2020'
                img={blogImg1}
              />
              <BlogCard
                date='01.09.2020'
                img={blogImg2}
                text="As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
              />
              <BlogCard
                  text="If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
                  date='01.09.2020'
                  img={blogImg1}
              />
              <BlogCard
                  date='01.09.2020'
                  img={blogImg2}
                  text="As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
              />
              <BlogCard
                  text="If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
                  date='01.09.2020'
                  img={blogImg1}
              />
              <BlogCard
                  date='01.09.2020'
                  img={blogImg2}
                  text="As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
              />
              <BlogCard
                  date='01.09.2020'
                  img={blogImg2}
                  text="As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
              />
              <BlogCard
                  text="If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
                  date='01.09.2020'
                  img={blogImg1}
              />
              <BlogCard
                  date='01.09.2020'
                  img={blogImg2}
                  text="As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
              />
              <BlogCard
                  text="If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
                  date='01.09.2020'
                  img={blogImg1}
              />
              <BlogCard
                  date='01.09.2020'
                  img={blogImg2}
                  text="As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
              />
          </section>


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
    </>
  )
}

export default Index

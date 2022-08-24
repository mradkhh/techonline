import React from "react";
import Image from "next/image";
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
import gaminImg from 'static/images/categories/gaming.png'
import blogImg1 from 'static/images/blogs/1.png'
import blogImg2 from 'static/images/blogs/2.png'
import { PartnerLogo } from "static/icons/icon";
import Loading from "components/UI/Loading/Loading";
import { useFetchAllBrandsQuery } from "services/BrandsService";
import {useGetAllProductsQuery} from "services/ProductService";
import {useFetchAllCategoriesQuery} from "services/CategoriesService";
import styles from "styles/pages/home.module.scss"


const Index: NextPage = () => {
    // =----------------- fetching for data -----------------=
    const { data: brands } = useFetchAllBrandsQuery('');
    const { data: categories } = useFetchAllCategoriesQuery('')
    const { data: newProducts, isLoading: products_loading } = useGetAllProductsQuery({page_size: 10, page: 1})

    return (
      // products_loading ?
      //   <Loading/>
      //     :
          <MainLayout title={'Home'} description='Tech Online Market' mainClass={'main_home'}>
              <Banner/>

              {/* =-------------- new products section --------------= */}
              <section className={styles.products}>
                  <h3 className={styles.products_title}>New Products</h3>
                  <Carousel type='items' autoplay={false} button={true} loop={true} >
                      {
                          newProducts && newProducts.results.map(item =>
                              <SwiperSlide key={item.id}>
                                  <ProductCard
                                      rating={item?.rating}
                                      id={item.id}
                                      key={item.id}
                                      image={item?.product_img?.image}
                                      title={item.short_desc}
                                      price={item.price}
                                      discountPrice={item.discount}
                                      isInStock={item.is_stock}
                                  />
                              </SwiperSlide>
                          )
                      }
                  </Carousel>
              </section>

              {/* =----------------- ads section -----------------= */}
              <section className={styles.ads}>
                  <div className={styles.adsContent}>
                      <PartnerLogo/>
                      <h3><span>own</span> it now, up to 6 months interest free  </h3>
                      <A href='/'> learn more</A>
                  </div>
              </section>

              {
                  categories && categories.results.map(item => {
                      return <section className={styles.sections_wrapper} key={item?.id}>
                          <Tabs>
                              <TabList className={styles.tabsList}>
                                  {
                                      item?.childs && item?.childs.map(child => {
                                          return <Tab key={child?.id}>
                                              { child?.name }
                                          </Tab>
                                      })
                                  }
                              </TabList>

                                  {
                                      item?.childs?.map(child => {
                                          return <TabPanel key={child.id} >
                                              <div className={styles.category}>
                                                  <VisitCard
                                                      title={child?.name}
                                                      href={`/${child?.name}`}
                                                      img={child?.icon ? child?.icon : gaminImg}
                                                  />
                                                  <Carousel type='category' autoplay={false} button={false} loop={true} pagination={true} >
                                                      {
                                                          child?.products ? child?.products?.map(product =>
                                                              <SwiperSlide key={product.id}>
                                                                  <ProductCard
                                                                      rating={product?.rating}
                                                                      id={product.id}
                                                                      key={product.id}
                                                                      image={product?.product_img?.image}
                                                                      title={product.short_desc}
                                                                      price={product.price}
                                                                      discountPrice={product.discount}
                                                                      isInStock={product.is_stock}
                                                                  />
                                                              </SwiperSlide>
                                                          )
                                                          :
                                                          <h1>Mavjud emas...</h1>
                                                      }
                                                  </Carousel>
                                              </div>
                                          </TabPanel>
                                      })
                                  }
                          </Tabs>
                      </section>
                  })
              }

              <section className={styles.brands}>
                  <Carousel type='brand' autoplay={true} button={false} loop={true} >
                      {
                          brands?.results && brands.results.map((item: any) =>
                              <SwiperSlide key={item.id}>
                                  <div className={styles.brandIcon}>
                                      <Image
                                          objectFit='contain'
                                          objectPosition='center'
                                          width={153}
                                          height={80}
                                          src={item?.icon}
                                          alt={item?.name}
                                      />
                                  </div>
                              </SwiperSlide>
                          )
                      }
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
                              quote='My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Techs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
                              author='- John Doe'
                              href="/"
                          />
                      </SwiperSlide>
                  </Carousel>
              </section>

          </MainLayout>
  )
}

export default Index

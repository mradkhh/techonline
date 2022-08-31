import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import React, {useEffect, useState} from "react";
import { Suspense } from 'react'
import Image from "next/image";
import {Tab, TabList, TabPanel} from "react-tabs"
import {SwiperSlide} from "swiper/react";
import MainLayout from "layouts/MainLayout";
import { useFetchAllBrandsQuery } from "services/BrandsService";
import {useGetAllProductsQuery} from "services/ProductService";
import {useFetchAllCategoriesQuery} from "services/CategoriesService";
import {PartnerLogo} from "static/icons/icon";
import gaminImg from 'static/images/categories/gaming.png'
import blogImg1 from 'static/images/blogs/1.png'
import blogImg2 from 'static/images/blogs/2.png'
import styles from "styles/pages/home.module.scss"
import BannerSkeleton from "components/skeleton/BannerSk";

const Carousel = dynamic(() => import("components/UI/Carousel/Carousel"))
const ProductCard = dynamic(() => import("components/UI/Cards/ProductCard"))
const Tabs = dynamic(() => import("components/UI/Tabs/Tabs"))
const VisitCard = dynamic(() => import("components/UI/Cards/VisitCard"))
const A = dynamic(() => import("components/UI/A/A"))
const Loading = dynamic(() => import('components/UI/Loading/Loading'))
const Banner  = dynamic(() => import('components/UI/Banner/Banner'), {
    suspense: true
})
const QuoteBanner = dynamic(() => import("components/UI/Banner/QuoteBanner"))
const BlogCard = dynamic(() => import("components/UI/Cards/BlogCard"))

const SkeletonScreen = () => {
    return (
        <div>
        </div>
    );
};

const Index: NextPage = () => {

    const [ loading, setLoading ] = useState<boolean>(true)

    // =----------------- fetching for data -----------------=
    const { data: brands } = useFetchAllBrandsQuery('');
    const { data: categories, isLoading: categoriesLoading } = useFetchAllCategoriesQuery('')
    const { data: new_products } = useGetAllProductsQuery({page_size: 10, page: 1})

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
          // loading ?
          //   <Loading/>
          //     :
              <MainLayout title={'Home'} description='Tech Online Market' mainClass={'main_home'}>

                  {/* =------------ banner section -----------------= */}
                  <Banner/>

                  {/* =-------------- new products section --------------= */}

                          <section className={styles.products}>
                              <h3 className={styles.products_title}>New Products</h3>
                              {
                                  categoriesLoading ?
                                      <BannerSkeleton/>
                                      :
                                      <Carousel type='items' autoplay={false} button={true} loop={true} >
                                          {
                                              new_products && new_products.results.map(item =>
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
                              }
                          </section>

                  {/* =----------------- ads section -----------------= */}
                  <section className={styles.ads_section}>
                      <div className={styles.ads}>
                          <PartnerLogo/>
                          <h3><span>own</span> it now, up to 6 months interest free  </h3>
                          <A href='/'> learn more</A>
                      </div>
                  </section>

                  {/* =------------------ categories section ------------------= */}
                  {
                      categories && categories.results.map(item => {
                          return <section className={styles.categories_wrapper} key={item?.id}>
                              <Tabs>
                                  <TabList className={styles.tabs_list}>
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
                                              <div className={styles.carousel_wrapper}>
                                                  <VisitCard
                                                      title={child?.name}
                                                      href={`/${child?.name}`}
                                                      img={child?.icon ? child?.icon : gaminImg}
                                                  />
                                                  <Carousel type='category' autoplay={false} button={false} loop={true} pagination={true} >
                                                      {
                                                          child?.products?.map(product =>
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

                  {/* =-------------- brands section ----------------= */}
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

                  {/* =----------------------- blogs section -------------------------= */}
                  <h2 className={styles.blogs_title}>Follow us on Instagram for News, Offers & More</h2>
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

                  {/* =------------------ quotes section -----------------------= */}
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

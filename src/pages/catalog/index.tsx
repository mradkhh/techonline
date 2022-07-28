import React, {useState} from 'react';
import {NextPage} from "next";
import MainLayout from "layouts/MainLayout";
import Image from "next/image";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Sidebar from "components/UI/Sidebar/Sidebar";
import ProductCard from "components/UI/Cards/ProductCard";
import Pagination from "components/UI/Pagination/Pagination";
import Select from "components/UI/Select/Select";
import FullProductCard from "components/UI/Cards/FullProductCard";
import Tags from "components/UI/Tags/Tags";
import {GridIcon, LineIcon} from "static/icons/icon";
import bannerImg  from 'static/images/catalogs/banner.png'
import img1 from 'static/images/catalogs/1.png'
import img2 from 'static/images/catalogs/2.png'
import img3 from 'static/images/catalogs/3.png'
import img4 from 'static/images/catalogs/4.png'
import img5 from 'static/images/catalogs/5.png'
import img6 from 'static/images/catalogs/6.png'
import bigImg1 from 'static/images/catalogs/big1.png'
import bigImg2 from 'static/images/catalogs/big2.png'
import styles from 'styles/pages/catalog.module.scss'

const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/laptops', text: 'Laptops' },
    { path: '/laptops/id', text: 'MSI Prestige Series' }
]

const tags = [
    { id: 1, title: 'CUSTOM PCS', count: 24 },
    { id: 2, title: 'HP/COMPAQ PCS', count: 24 }
]

const sortOption = [
    { value: 'position', title: 'Position' },
    { value: 'new', title: 'New' },
    { value: 'popular', title: 'Popular' }
]

const showOption = [
    { value: '35', title: '35 Per page' },
    { value: '15', title: '15 Per page' },
    { value: '5', title: '5 Per page' },
]

const Catalog: NextPage = () => {
    const [ page, setPage ] = useState<number>(1)
    const pages = 234

    return (
        <MainLayout title='Catalog' description='Catalog' mainClass='main_catalog'>
            <div className={styles.adsBanner}>
                <Image
                    width={1400}
                    height={104}
                    objectFit='cover'
                    objectPosition='center'
                    src={bannerImg}
                    alt="banner"
                />
            </div>
            <Breadcrumbs array={breadcrumbs} current='MSI WS Series'/>
            <h1 className={styles.title}>MSI PS Series (20)</h1>
            <div className={styles.main}>
                <Sidebar/>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <div className={styles.headViewTools}>
                            <p>Items 1-35 of 61</p>
                            <div className={styles.sort}>
                                <Select options={sortOption}>Sort by: </Select>
                                <Select options={showOption}>Show: </Select>
                            </div>
                            <div className={styles.viewType}>
                                <button>
                                    <GridIcon/>
                                </button>
                                <button>
                                    <LineIcon/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.headTags}>
                            <Tags tags={tags}/>
                        </div>
                    </div>
                    <FullProductCard
                        isInStock={true}
                        image={bigImg1}
                        rating={4}
                        title={"MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop"}
                        price={400}
                        discountPrice={300}
                        reviews={23}
                        name={"SKU D5515AI"}
                    />
                    <FullProductCard
                        isInStock={false}
                        image={bigImg2}
                        rating={4}
                        title={"MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop"}
                        price={400}
                        discountPrice={300}
                        reviews={23}
                        name={"SKU D5515AI"}
                    />
                    <div className={styles.products}>
                        <ProductCard
                            image={img1}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img2}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img3}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img4}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img5}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img6}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img1}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img2}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img3}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img4}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img5}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img6}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img1}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img2}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img3}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img4}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img5}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                        <ProductCard
                            image={img6}
                            title='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={400}
                            discountPrice={300}
                            isInStock={true}
                            rating={5}
                            reviews={34}
                        />
                    </div>
                    <Pagination
                        page={page}
                        setPage={setPage}
                        pages={pages}
                    />
                    <div className={styles.description}>
                        <p>
                            MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

                            There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
                            Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the for which contrast is increased.

                            Home users or students can benefit from the  and the  options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the  to increase the screen brightness.
                        </p>
                        <button>More</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Catalog;
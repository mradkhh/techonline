import Image from "next/image";
import React, {useContext, useEffect, useState} from 'react';
import {NextPage} from "next";
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Sidebar from "components/UI/Sidebar/Sidebar";
import ProductCard from "components/UI/Cards/ProductCard";
import Pagination from "components/UI/Pagination/Pagination";
import Select from "components/UI/Select/Select";
import {useGetAllProductsQuery} from "services/ProductService";
import FullProductCard from "components/UI/Cards/FullProductCard";
import Tags from "components/UI/Tags/Tags";
import {GridIcon, LineIcon} from "static/icons/icon";
import bannerImg  from 'static/images/catalogs/banner.png'
import styles from 'styles/pages/catalog.module.scss'
import {number} from "prop-types";
import useInput from "hooks/useInput";
import Loading from "components/UI/Loading/Loading";

const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/laptops', text: 'Laptops' },
    { path: '/laptops/id', text: 'MSI Prestige Series' }
]



const sortOption = [
    { value: '', title: 'Position' },
    { value: '-created_at', title: 'New' },
    { value: '-rating', title: 'Popular' }
]

const showOption = [
    { value: 5, title: '5 Per page' },
    { value: 15, title: '15 Per page' },
    { value: 35, title: '35 Per page' },
]

const Catalog: NextPage = () => {

    // =------------- pagination state -----------------=
    const [ page, setPage ] = useState<number>(1)


    // =----------- states for filter ------------=
    const [ apply, setApply ] = useState<boolean>(false)
    const [ sortValue, setSortValue ] = useState<string | number>(sortOption[1].value)
    const [ showValue, setShowValue ] = useState<number | string>(showOption[0].value)
    const [ sortTitle, setSortTitle ] = useState<string>(sortOption[0].title)
    const [ showTitle, setShowTitle ] = useState<string>(showOption[0].title)
    const [ viewType, setViewType ] = useState<number>(1)
    const [ brandId, setBrandId ] = useState<number[]>([])
    const [ categoryId, setCategoryId ] = useState<number[]>([])
    const [ colorId, setColorId ] = useState<number[]>([])
    const min_price = useInput('')
    const max_price = useInput('')


    const { data: products, isLoading: product_loading } = useGetAllProductsQuery({
        page_size: Number(showValue),
        page: page,
        brands_ids: brandId.join(','),
        colors_ids: colorId.join(','),
        category_ids: categoryId.join(','),
        min_price: min_price.value,
        max_price: max_price.value,
        ordering: sortValue
    })
    const pages = products?.count ? (products?.count / Number(showValue)) : 1

    useEffect(() => {
        window.scroll(0, 150)
    }, [page])

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const count_filter = 0

    useEffect(() => {

    }, [brandId.length, categoryId.length, colorId.length])

    return (
        product_loading ?
            <Loading/>
            :
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
                    <div className={styles.sidebar}>
                        <Sidebar
                            countFilter={count_filter}
                            setApply={setApply}
                            min_price={min_price}
                            max_price={max_price}
                            setColorId={setColorId}
                            setCategoryId={setCategoryId}
                            setBrandId={setBrandId}
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <div className={styles.headViewTools}>
                                <p>Items {page}-{products?.results?.length} of {products?.count }</p>
                                <div className={styles.sort}>
                                    <Select
                                        title={sortTitle}
                                        value={sortValue}
                                        setValue={setSortValue}
                                        setTitle={setSortTitle}
                                        options={sortOption}>Sort by: </Select>
                                    <Select
                                        title={showTitle}
                                        value={showValue}
                                        setTitle={setShowTitle}
                                        setValue={setShowValue}
                                        options={showOption}
                                    >
                                        Show:
                                    </Select>
                                </div>
                                <div className={styles.viewType}>
                                    <button
                                        className={ viewType !== 1 ? styles.view : ''}
                                        onClick={() => setViewType(state => state = 1)}
                                    >
                                        <GridIcon/>
                                    </button>
                                    <button
                                        className={ viewType !== 2 ? styles.view : ''}
                                        onClick={() => setViewType(state => state= 2)}
                                    >
                                        <LineIcon/>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.headTags}>
                                {/*<Tags tags={tags}/>*/}
                            </div>
                        </div>
                        <div className={styles.products}>
                            {
                                (products && viewType === 1) && products?.results?.map(item =>
                                    <ProductCard
                                        id={item.id}
                                        key={item.id}
                                        image={item?.product_img?.image}
                                        title={item.short_desc}
                                        price={item.price}
                                        discountPrice={item.discount}
                                        isInStock={item.is_stock}
                                    />
                                )
                            }
                        </div>
                        {
                            !products?.results.length &&
                            <div className={styles.not_found}>
                                <h1 >Not found</h1>
                            </div>
                        }
                        <div>
                            {
                                (products && viewType === 2) && products?.results?.map(item =>
                                    <FullProductCard
                                        id={item.id}
                                        key={item.id}
                                        isInStock={item?.is_stock}
                                        image={item?.product_img?.image}
                                        title={item?.short_desc}
                                        price={item?.price}
                                        discountPrice={item?.discount}
                                        name={item?.name}
                                    />
                                )
                            }
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
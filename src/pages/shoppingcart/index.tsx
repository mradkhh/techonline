import {NextPage} from "next";
import React, {useContext, useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import {Context} from "pages/_app";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Accordion from "components/UI/Accordion/Accordion";
import A from "components/UI/A/A";
import { PartnerLogo,  PayPalButtonIcon } from "static/icons/icon";
import { useFetchCartQuery, useFetchClearCartMutation, } from "services/CartsService";
import ProductItem from "pages/shoppingcart/components/ProductItem";
import TextInput from "components/UI/Inputs/TextInput";
import {useFetching} from "hooks/useFetching";
import $api from "services/interseptors";
import {IDiscount, IRegion, IRegionResults, IRegionRetrieve} from "models/index";
import SelectInput from "components/UI/Inputs/SelectInput";
import Loading from "components/UI/Loading/Loading";
import styles from 'styles/pages/shoppingcart.module.scss'
import useInput from "hooks/useInput";
import {AxiosResponse} from "axios";


const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const Index: NextPage = () => {
    const [ region, setRegion ] = useState<IRegion[]>([])
    const [ regionRetrieve, setRegionRetrieve ] = useState<IRegionRetrieve>()
    const [ regionRetrieveChild, setRegionRetrieveChild ] = useState<IRegionRetrieve>()
    const discount = useInput('')
    const [ discountResponse, setDiscountResponse ] = useState<IDiscount>({} as IDiscount)
    const { authStore } = useContext(Context)
    const [regionInput, setRegionInput] = useState<string>('')
    const [regionInputChild, setRegionInputChild] = useState<string>('')
    const [regionRetrieveInput, setRegionRetrieveInput] = useState<string>('')
    const {data: cart_results, isLoading: cart_loading} = useFetchCartQuery('')
    const [ clearCart ] = useFetchClearCartMutation()

    const [ fetchRegion ] = useFetching(async () => {
        const res = await $api.get<IRegionResults>('regions/')
        setRegion(res.data.results)
    })
    const [ fetchRegionRetrieve ] = useFetching(async (id: number) => {
        const res = await $api.get<IRegionRetrieve>(`regions/${id}/`)
        if (!regionRetrieve) {
            setRegionRetrieve(res.data)
        }
        if (regionRetrieve) {
            setRegionRetrieveChild(res.data)
        }
    })

    const handleSelectOnChange = (e: any) => {
        fetchRegionRetrieve(Number(e.target.value))
        setRegionInput(e.target.value)
    }

    const handleSelectOnChange2 = (e: any) => {
        fetchRegionRetrieve(e.target.value)
        setRegionInputChild(e.target.value)
    }

    const [ fetchDiscount ] = useFetching( async (discount: string) => {
        const res = await $api.post<IDiscount>('orders/check_discount/', { discount })
        setDiscountResponse(res.data)
    })

    const handleDiscount = () => {
        fetchDiscount(discount.value)
    }

    console.log(discountResponse)
    const handleClearCart = () => {
        clearCart('')
    }

    const handleFocus = () => {
        fetchRegion()
    }

    let total_price = 0;
    cart_results?.results.map(item => {
        total_price += (Number(item.product.price) * item.quantity)
    })

    const discount_percentage = discountResponse.discount ? (( 100 - discountResponse.discount) / 100) : 1
    const subtotal = total_price * discount_percentage
    const tax_percentage = regionRetrieveChild?.tax_percentage ? regionRetrieveChild?.tax_percentage : regionRetrieve?.tax_percentage ? regionRetrieve?.tax_percentage : 0
    const tax_price = ((tax_percentage / 100) + 1) * subtotal - subtotal
    const shipping_price = regionRetrieveChild?.shipping_price ? regionRetrieveChild?.shipping_price : regionRetrieve?.shipping_price ? regionRetrieve?.shipping_price : 0
    const order_total = (((tax_percentage / 100) + 1) * subtotal ) + shipping_price

    return (
          <MainLayout title={"TechOnline - Cart"} description={"cart"} mainClass={'main_shoppingCart'}>
              <Breadcrumbs array={breadcrumbs} current="Login"/>
              <h1 className={styles.title}>Shopping Cart</h1>
              {
                  authStore.isAuth ?
                      cart_loading ?
                          <Loading/>
                          :
                          <section className={styles.content}>
                              <div className={styles.table}>
                                  <div className={styles.tableHead}>
                                      <h5>Item</h5>
                                      <h5>Price</h5>
                                      <h5>Qty</h5>
                                      <h5>Subtotal</h5>
                                  </div>
                                  {
                                      cart_results && cart_results?.results?.map(( {product, quantity, id})=>
                                          <ProductItem isLoading={cart_loading} key={id} product={product} quantity={quantity} id={id}/>
                                      )
                                  }
                                  <div className={styles.actionTable}>
                                      <A href="/catalog">Continue Shopping</A>
                                      <button onClick={handleClearCart}>Clear Shopping Cart</button>
                                      <button>Update Shopping Cart</button>
                                  </div>
                              </div>
                              <div className={styles.summary}>
                                  <h3>Summary</h3>
                                  <Accordion className={styles.accordion} header="Estimate Shipping and Tax" headerStyle={styles.accordion_header}>
                                      <div className={styles.estimate}>
                                          <p>Enter your destination to get a shipping estimate.</p>
                                      </div>
                                      <SelectInput
                                          state={regionInput}
                                          handleChange={handleSelectOnChange}
                                          onFocus={handleFocus}
                                          options={region}
                                          label={'Country'}
                                          placeholder={'Country'}
                                          type={'text'}
                                          require={false}/>
                                      {
                                          regionRetrieve?.childs.length ?
                                          <SelectInput
                                              state={regionInputChild}
                                              handleChange={handleSelectOnChange2}
                                              onFocus={handleFocus}
                                              options={regionRetrieve?.childs}
                                              label={''}
                                              placeholder={''}
                                              type={'text'}
                                              require={false}/>
                                              :
                                              null
                                      }
                                      {
                                          !regionInputChild.length && <TextInput label={'State/Province'} placeholder={''} type={'text'} require={false}/>
                                      }
                                      <TextInput label={'Zip/Postal Code'} placeholder={''} type={'text'} require={false}/>
                                      <div className={styles.radioWrapper}>
                                          <div className={styles.radio}>
                                              <label htmlFor="radio1">Standard Rate</label>
                                              <div>
                                                  <input type="radio" name={'price'} id={"radio1"} value={1} checked={true}/>
                                                  <div><h4>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</h4></div>
                                              </div>
                                          </div>
                                          <div className={styles.radio}>
                                              <label htmlFor="radio2">Pickup from store</label>
                                              <div>
                                                  <input type="radio" name={'price'} id={"radio2"} value={1}/>
                                                  <div><h4>1234 Street Address City Address, 1234</h4></div>
                                              </div>
                                          </div>
                                      </div>
                                  </Accordion>
                                  <Accordion header="Apply Discount Code" className={styles.accordion} headerStyle={styles.accordion_header}>
                                      <div className={styles.apply__discount}>
                                          <TextInput { ...discount } label={'Enter discount code'} placeholder={"Enter Discount code"} type={'text'} require={false}/>
                                          <button onClick={handleDiscount}>Apply Discount</button>
                                      </div>
                                  </Accordion>

                                  <div className={styles.applyInfo}>
                                      <h6>Subtotal { discountResponse.discount && <h5>-{discountResponse.discount}%</h5> }  <span>${subtotal.toFixed(2)}</span></h6>
                                      <h6>Shipping  <span>${shipping_price.toFixed(2)}</span></h6>
                                      <p>(Standard Rate - Price may vary depending on the item/destination. TECHS Staff will contact you.)</p>
                                      <h6>Tax <span>${tax_price.toFixed(2)}</span></h6>
                                      <h6>GST ({tax_percentage}%) <span>${tax_price.toFixed(2)}</span></h6>
                                      <h6>Order Total <span>${order_total.toFixed(2)}</span></h6>
                                  </div>
                                  <div className={styles.actionBtns}>
                                      <button>Proceed to Checkout</button>
                                      <button>Check out with <PayPalButtonIcon/></button>
                                      <button>Check Out with Multiple Addresses</button>
                                  </div>
                                  <div className={styles.ads}>
                                      <PartnerLogo/>
                                      <h3><span>own</span> it now, up to 6 months interest free  </h3>
                                      <A href='/'> learn more</A>
                                  </div>
                              </div>
                          </section>
                      :
                      <section className={styles.notAuth}>
                          <h1>Not Found</h1>
                          <A href={'/register'}>Registration</A>
                      </section>
              }
          </MainLayout>
    );
};

export default Index;

function _(_: any, arg1: () => void) {
    throw new Error("Function not implemented.");
}

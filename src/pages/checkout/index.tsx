import {NextPage} from "next";
import Image from "next/image";
import React, {FC, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import {CheckoutIcon} from "static/icons/icon";
import TextInput from "components/UI/Inputs/TextInput";
import useInput from "hooks/useInput";
import {useFetchCartQuery} from "services/CartsService";
import Accordion from "components/UI/Accordion/Accordion";
import img from "static/images/products/1.jpg"
import styles from 'styles/pages/checkout.module.scss'
import Loading from "components/UI/Loading/Loading";


const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/', text: 'Shopping Cart' }
]

const CheckOut: NextPage = () => {

    const { data: cart_products, isLoading: cart_loading } = useFetchCartQuery('')

    console.log(cart_products)

    // =--------------- error states ----------------------=
    const [ emailError, setEmailError ] = useState<boolean>(false)
    const [ firstnameError, setFirstnameError ] = useState<boolean>(false)
    const [ lastnameError, setLastnameError ] = useState<boolean>(false)
    const [ companyError, setCompanyError ] = useState<boolean>(false)
    const [ streetError, setStreetError ] = useState<boolean>(false)
    const [ cityError, setCityError ] = useState<boolean>(false)
    const [ provinceError, setProvinceError ] = useState<boolean>(false)
    const [ postalCodeError, setPostalCodeError ] = useState<boolean>(false)
    const [ countryError, setCountryError ] = useState<boolean>(false)
    const [ phoneNumberError, setPhoneNumber ] = useState<boolean>(false)

    // =-------------------- states ----------------------=
    const email = useInput('')
    const firstname = useInput('')
    const lastname = useInput('')
    const company = useInput('')
    const street = useInput('')
    const home = useInput('')
    const city = useInput('')
    const province = useInput('')
    const postalCode = useInput('')
    const country = useInput('')
    const phoneNumber = useInput('')


    // =----------------- submit ----------------------=
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (email.value && firstname.value && lastname.value && company.value && street.value && city.value && province.value && postalCode.value && country.value && phoneNumber.value) {
            // fetch logic
        }
        if (!email.value) {
            setEmailError(true)
        }
        if (!firstname.value) {
            setFirstnameError(true)
        }
        if (!lastname.value) {
            setLastnameError(true)
        }
        if (!company.value) {
            setCompanyError(true)
        }
        if (!street.value) {
            setStreetError(true)
        }
        if (!city.value) {
            setCityError(true)
        }
        if (!province.value) {
            setProvinceError(true)
        }
        if(!postalCode.value) {
            setPostalCodeError(true)
        }
        if(!country.value) {
            setCountryError(true)
        }
        if (!phoneNumber.value) {}
        setPhoneNumber(true)
    }

    return (
        cart_loading ?
            <Loading/>
            :
            <MainLayout title={"TechOnline - Checkout"} description={"checkout"} mainClass={"main_checkout"}>
                <Breadcrumbs array={breadcrumbs} current="Checkout progress"/>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h1>Checkout</h1>
                        <button>Sign In</button>
                    </div>
                    <div className={styles.checkoutSteps}>
                        <div>
                        <span>
                            <CheckoutIcon/>
                        </span>
                            <h5>Shipping</h5>
                        </div>
                        <div>
                            <span>2</span>
                            <h5>Review & Payments</h5>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <form onSubmit={handleSubmit} className={styles.formField}>
                        <div className={styles.contentTitle}>
                            <h2>Shipping Address</h2>
                        </div>
                        <div className={styles.form}>
                            <TextInput
                                {...email}
                                error={emailError}
                                setError={setEmailError}
                                label={"Email Address"} placeholder={"Email Address"} type={"email"} require={true}/>
                            <p>You can create an account after checkout.</p>
                            <div className={styles.mainForm}>
                                <TextInput
                                    {...firstname}
                                    error={firstnameError}
                                    setError={setFirstnameError}
                                    label={"First Name"} placeholder={"First Name"} type={"text"} require={true}/>
                                <TextInput
                                    {...lastname}
                                    error={lastnameError}
                                    setError={setLastnameError}
                                    label={"Last Name"} placeholder={"Last Name"} type={"text"} require={true}/>
                                <TextInput
                                    {...company}
                                    error={companyError}
                                    setError={setCompanyError}
                                    label={"Company"} placeholder={"Company"} type={"text"}/>
                                <TextInput
                                    {...street}
                                    error={streetError}
                                    setError={setStreetError}
                                    label={"Street Address"} placeholder={"Street Address"} type={"text"} require={true}/>
                                <div className={styles.marginNot}>
                                    <TextInput
                                        {...home}
                                        label={""} placeholder={""} type={"text"} require={false}/>
                                </div>
                                <TextInput
                                    {...city}
                                    error={cityError}
                                    setError={setCityError}
                                    label={"City"} placeholder={"City"} type={"text"}/>
                                <TextInput
                                    {...province}
                                    error={provinceError}
                                    setError={setProvinceError}
                                    label={"State/Province"} placeholder={"State/Province"} type={"text"}/>
                                <TextInput
                                    {...postalCode}
                                    error={postalCodeError}
                                    setError={setPostalCodeError}
                                    label={"Zip/Postal Code"} placeholder={"Zip/Postal Code"} type={"text"}/>
                                <TextInput
                                    {...country}
                                    error={countryError}
                                    setError={setCountryError}
                                    label={"Country"} placeholder={"Country *"} type={"text"}/>
                                <TextInput
                                    {...phoneNumber}
                                    error={phoneNumberError}
                                    setError={setPhoneNumber}
                                    label={"Phone Number"} placeholder={"Phone Number"} type={"text"}/>
                            </div>
                        </div>
                        <div className={styles.radioWrapper}>
                            <div className={styles.radio}>
                                <label htmlFor="radio1">Standard Rate</label>
                                <div>
                                    <input type="radio" name={'price'} id={"radio1"} value={1} checked={true}/>
                                    <div><h4>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</h4> <span>	$21.00</span></div>
                                </div>
                            </div>
                            <div className={styles.radio}>
                                <label htmlFor="radio2">Pickup from store</label>
                                <div>
                                    <input type="radio" name={'price'} id={"radio2"} value={1}/>
                                    <div><h4>1234 Street Address City Address, 1234</h4> <span>	$21.00</span></div>
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Next</button>
                    </form>
                    <div className={styles.summary}>
                        <h2>Order Summary</h2>
                        <Accordion header={`${cart_products?.results.length} Items in Cart`} className={styles.accordion} headerStyle={styles.accordion_header}>
                            <div className={styles.accordion__summary}>
                                {
                                    cart_products && cart_products.results?.map(item =>
                                        <div key={item?.id} className={styles.card}>
                                            <div className={styles.card_img}>
                                                <Image
                                                    width={62}
                                                    height={62}
                                                    alt="cart"
                                                    src={item?.product?.product_img?.image ? item?.product?.product_img?.image : img}
                                                />
                                            </div>
                                            <div className={styles.card_body}>
                                                <h6>{item?.product?.name}</h6>
                                                <div>
                                                    <span>Qty: {item?.product?.quantity}</span>
                                                    <h6>${item?.product?.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </Accordion>
                    </div>
                </div>
            </MainLayout>
    );
};

export default CheckOut;
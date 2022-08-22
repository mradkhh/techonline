import {NextPage} from "next";
import Image from "next/image";
import React, {FC, useContext, useState} from 'react';
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
import {Context} from "pages/_app";
import {useFetching} from "hooks/useFetching";
import $api from "services/interseptors";
import {AxiosResponse} from "axios";


const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/', text: 'Shopping Cart' }
]

const CheckOut: NextPage = () => {

    const { authStore } = useContext(Context)
    const [ checkoutResp, setCheckoutResp ] = useState<any>()
    const { data: cart_products, isLoading: cart_loading } = useFetchCartQuery('')

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

    const [fetchCheckout] = useFetching( async (email: any, firstname: any, lastname: any, company: any, street: any,
    home: any, city: any, province: any, postal_code: any, country: any, phone_number: any
    ) => {
        const res = $api.post<AxiosResponse>('orders/', {
            email,
            firstname,
            lastname,
            company,
            street,
            home,
            city,
            province,
            postal_code,
            country,
            phone_number
        })
        setCheckoutResp(res)
    })


    // =----------------- submit and validations ----------------------=
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (email.value.length >= 4 &&
            firstname.value.length >= 4 &&
            lastname.value.length >= 4 &&
            company.value.length >= 4 &&
            street.value.length >= 4 &&
            city.value.length >= 4 &&
            province.value.length >= 4 &&
            postalCode.value.length === 6 &&
            country.value.length >= 3 &&
            phoneNumber.value.length >= 4) {
            // fetch logic
            fetchCheckout(email.value, firstname.value, lastname.value, company.value, street.value, home.value, city.value, province.value, postalCode.value, country.value, phoneNumber.value)
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
        if(!postalCode.value || postalCode.value.length !== 6) {
            setPostalCodeError(true)
        }
        if(!country.value) {
            setCountryError(true)
        }
        if (!phoneNumber.value) {
        setPhoneNumber(true)
        }
    }


    console.log(phoneNumber.value)


    // =------------------- calc total price ------------------=
    let total_price = 0;
    cart_products?.results.map(item => {
        total_price += (Number(item.product.price) * item.quantity)
    })

    return (
        cart_loading ?
            <Loading/>
            :
            <MainLayout title={"TechOnline - Checkout"} description={"checkout"} mainClass={"main_checkout"}>
                <Breadcrumbs array={breadcrumbs} current="Checkout progress"/>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h1>Checkout</h1>
                        {
                            !authStore.isAuth && <button>Sign In</button>
                        }
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
                                errorText={"elektron pochta noto\'g\'ri"}
                                label={"Email Address"} placeholder={"Email Address"} type={"email"} require={true}/>
                            <p>You can create an account after checkout.</p>
                            <div className={styles.mainForm}>
                                <TextInput
                                    {...firstname}
                                    error={firstnameError}
                                    setError={setFirstnameError}
                                    errorText={"firstname noto\'g\'ri"}
                                    label={"First Name"} placeholder={"First Name"} type={"text"} require={true}/>
                                <TextInput
                                    {...lastname}
                                    error={lastnameError}
                                    setError={setLastnameError}
                                    errorText={"lastname noto\'g\'ri"}
                                    label={"Last Name"} placeholder={"Last Name"} type={"text"} require={true}/>
                                <TextInput
                                    {...company}
                                    error={companyError}
                                    setError={setCompanyError}
                                    errorText={"company noto\'g\'ri"}
                                    label={"Company"} placeholder={"Company"} type={"text"}/>
                                <TextInput
                                    {...street}
                                    error={streetError}
                                    setError={setStreetError}
                                    errorText={"address noto\'g\'ri"}
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
                                    errorText={"city noto\'g\'ri"}
                                    label={"City"} placeholder={"City"} type={"text"}/>
                                <TextInput
                                    {...province}
                                    error={provinceError}
                                    setError={setProvinceError}
                                    errorText={"state noto\'g\'ri"}
                                    label={"State/Province"} placeholder={"State/Province"} type={"text"}/>
                                <TextInput
                                    {...postalCode}
                                    error={postalCodeError}
                                    setError={setPostalCodeError}
                                    errorText={"postal code noto\'g\'ri"}
                                    label={"Zip/Postal Code"} placeholder={"Zip/Postal Code"} type={"text"}/>
                                <TextInput
                                    {...country}
                                    error={countryError}
                                    setError={setCountryError}
                                    errorText={"country noto\'g\'ri"}
                                    label={"Country"} placeholder={"Country *"} type={"text"}/>
                                <TextInput
                                    {...phoneNumber}
                                    error={phoneNumberError}
                                    setError={setPhoneNumber}
                                    errorText={"phone number noto\'g\'ri"}
                                    label={"Phone Number"} placeholder={"93-933-99-37"} type={"tel"}/>
                            </div>
                        </div>
                        <div className={styles.radioWrapper}>
                            <div className={styles.radio}>
                                <label htmlFor="radio1">Standard Rate</label>
                                <div>
                                    <input type="radio" name={'price'} id={"radio1"} value={1} defaultChecked={true}/>
                                    <div><h4>Price may vary depending on the item/destination. Shop Staff will contact you.</h4> <span>	${total_price + 21}</span></div>
                                </div>
                            </div>
                            <div className={styles.radio}>
                                <label htmlFor="radio2">Pickup from store</label>
                                <div>
                                    <input type="radio" name={'price'} id={"radio2"} value={1}/>
                                    <div><h4>1234 Street Address City Address, 1234</h4> <span>	${total_price}</span></div>
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
                                                <h6>{item?.product?.short_desc}</h6>
                                                <div>
                                                    <div>Qty: <span>{item?.quantity}</span></div>
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
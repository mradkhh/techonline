import dynamic from "next/dynamic";
import React, {FC, memo, ReactNode, useContext, useEffect, useState} from 'react';
import Head from "next/head";
import {Context} from "pages/_app";
import {ArrowDown, ContactIcon, HearphoneIcon, SaleIcon} from "static/icons/icon";
import {useFetchAllCategoriesQuery} from "services/CategoriesService";
import useInput from "hooks/useInput";
import styles from "./styles/main.module.scss";

const Header = dynamic(() => import("components/Header/Header"))
const Footer = dynamic(() => import("components/Footer/Footer"))
const TextInput = dynamic(() => import("components/UI/Inputs/TextInput"))
const Modal = dynamic(() => import("components/UI/Modal/Modal"))

interface MainLayoutProps {
    children: ReactNode,
    title: string,
    description: string,
    mainClass: string,
}

const MainLayout: FC<MainLayoutProps> = memo(({ children, title, description, mainClass}) => {
    const [ scrollToUp, setScrollToUp ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(true)

    const { data: categories, isLoading: categoriesLoading } = useFetchAllCategoriesQuery('')
    const { authStore } = useContext(Context)

    const [ usernameRegisterError, setUsernameRegisterError ] = useState<boolean>(false)
    const [ passwordRegisterError, setPasswordRegisterError ] = useState<boolean>(false)
    const [ confirmPasswordError, setConfirmPasswordRegisterError ] = useState<boolean>(false)

    const registerUsername = useInput('')
    const registerPassword = useInput('')
    const registerConfirmPassword = useInput('')

    const handleRegisterSubmit = (e: any) => {
        e.preventDefault()
        if(registerUsername.value.length >= 3 && (registerPassword.value.length >= 3) && (registerConfirmPassword.value.length >= 3) && (registerPassword.value.length === registerConfirmPassword.value.length))  {
            authStore.register(registerUsername.value, registerPassword.value, registerConfirmPassword.value)
        }
        if (registerUsername.value.length < 3) {
            setUsernameRegisterError(true)
        }
        if (registerPassword.value.length < 3) {
            setPasswordRegisterError(true)
        }
        if (registerConfirmPassword.value.length < 3) {
            setConfirmPasswordRegisterError(true)
        }
        if (registerPassword.value.length !== registerConfirmPassword.value.length) {
            setConfirmPasswordRegisterError(true)
        }
    }

    useEffect(() => {
        setLoading(false)
        window.addEventListener('scroll', () => {
            window.pageYOffset > 100 ? setScrollToUp(true) : setScrollToUp(false)
        })
    }, [])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="reload" href="/favicon.ico" as="icon"/>
            </Head>
            <Header categories={categories?.results} categoriesLoading={categoriesLoading}/>
            <Modal>
                <form onSubmit={handleRegisterSubmit} className={styles.form}>
                    <h1>Registration</h1>
                    <TextInput
                        {...registerUsername}
                        label={"Username"}
                        placeholder={"Your Username"}
                        type={"text"}
                        require={true}
                        error={usernameRegisterError}
                        setError={setUsernameRegisterError}
                        errorText={" lotin harflarda va 3 ta belgidan kam bo'lmasligi kerak"}
                    />
                    <TextInput
                        {...registerPassword}
                        label={"Password"}
                        placeholder={"Your Password"}
                        type={"password"}
                        require={true}
                        error={passwordRegisterError}
                        setError={setPasswordRegisterError}
                        errorText={"Parol 3ta belgidan kam bo\'lmasligi kerak"}
                    />
                    <TextInput
                        {...registerConfirmPassword}
                        label={"Confirm Password"}
                        placeholder={"Your Password"}
                        type={"password"}
                        require={true}
                        error={confirmPasswordError}
                        setError={setConfirmPasswordRegisterError}
                        errorText={"Parol mos emass"}
                    />
                    <div>
                        <button
                            type="submit">Create</button>
                    </div>
                </form>
            </Modal>
            <main className={mainClass}>
                {children}
                <div className={styles.aboutUs} style={{background: mainClass !== 'main_home' ? 'var(--light-blue)' : ''}}>
                    <div className={styles.content}>
                        <div className={styles.aboutItem}>
                            <HearphoneIcon/>
                            <h4>Product Support</h4>
                            <p>Up to 3 years on-site warranty available for your peace of mind.</p>
                        </div>
                        <div className={styles.aboutItem}>
                            <ContactIcon/>
                            <h4> Personal Account</h4>
                            <p>With big discounts, free delivery and a dedicated support specialist. </p>
                        </div>
                        <div className={styles.aboutItem}>
                            <SaleIcon/>
                            <h4>Amazing Savings </h4>
                            <p>Up to 70% off new Products, you can be sure of the best price. </p>
                        </div>
                    </div>
                </div>
            </main>
            {
                scrollToUp &&
                <div
                    onClick={() => window.scrollTo(0, 0)}
                    className={styles.arrowUp}>
                    <ArrowDown/>
                </div>
            }
            <Footer/>
        </>
    );
});

MainLayout.displayName = 'MainLayout'

export default MainLayout;
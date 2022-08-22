import React, {FC, memo, ReactNode, useContext, useEffect, useState} from 'react';
import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {ArrowDown, ContactIcon, HearphoneIcon, SaleIcon} from "static/icons/icon";
import {useFetchAllCategoriesQuery} from "services/CategoriesService";
import {useFetchAllBrandsQuery} from "services/BrandsService";
import TextInput from "components/UI/Inputs/TextInput";
import Modal from "components/UI/Modal/Modal";
import useInput from "hooks/useInput";
import {Context} from "pages/_app";
import styles from "./styles/main.module.scss";

interface MainLayoutProps {
    children: ReactNode,
    title: string,
    description: string,
    mainClass: string,
}

const MainLayout: FC<MainLayoutProps> = memo(({ children, title, description, mainClass}) => {
    const [ scrollToUp, setScrollToUp ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(true)

    const { data: categories } = useFetchAllCategoriesQuery('')
    const { authStore } = useContext(Context)

    const [ usernameRegisterError, setUsernameRegisterError ] = useState<boolean>(false)
    const [ passwordRegisterError, setPasswordRegisterError ] = useState<boolean>(false)
    const [ confirmPasswordError, setConfirmPasswordRegisterError ] = useState<boolean>(false)

    const registerUsername = useInput('')
    const registerPassword = useInput('')
    const registerConfirmPassword = useInput('')

    const handleRegisterSubmit = (e: any) => {
        e.preventDefault()
        if(registerUsername.value && registerPassword.value && registerConfirmPassword.value) {
            authStore.register(registerUsername.value, registerPassword.value, registerConfirmPassword.value)
        }
        if (!registerUsername.value) {
            setUsernameRegisterError(true)
        }
        if (!registerPassword.value) {
            setPasswordRegisterError(true)
        }
        if (!registerConfirmPassword.value) {
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
            <Header categories={categories?.results}/>
            <Modal>
                <form onSubmit={handleRegisterSubmit} className={styles.form}>
                    <TextInput
                        {...registerUsername}
                        label={"Username"}
                        placeholder={"Your Username"}
                        type={"text"}
                        require={true}
                        error={usernameRegisterError}
                        setError={setUsernameRegisterError}
                        errorText={"Username noto\'g\'ri"}
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
                    {
                        authStore.errorText && authStore.errorText
                    }
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
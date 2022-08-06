import {NextPage} from "next";
import React, {useContext, useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import TextInput from "components/UI/Inputs/TextInput";
import A from "components/UI/A/A";
import {Context} from "pages/_app";
import useInput from "hooks/useInput";
import styles from 'styles/pages/register.module.scss'

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const Register: NextPage = () => {
    const [ errorUsername, setErrorUsername ] = useState<boolean>(false)
    const [ errorPassword, setErrorPassword ] = useState<boolean>(false)
    const { storeMobx } = useContext(Context)
    const { isAuth } = storeMobx
    const username = useInput('')
    const password = useInput('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(username.value && password.value) {
            storeMobx.login(username.value, password.value)
        }
        if (!username.value) {
            setErrorUsername(true)
        }
        if (!password.value) {
            setErrorPassword(true)
        }
    }

    useEffect(() => {
    }, [])

    return (
        <MainLayout title="TechOnline - Registration" description="contact" mainClass="main_register">
            <Breadcrumbs array={breadcrumbs} current="Login"/>
            <div className={styles.title}>Customer Login</div>
            <div className={styles.field}>
                <div className={styles.sign}>
                    <h3>Registered Customers</h3>
                    <p>If you have an account, sign in with your email address.</p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <TextInput
                            {...username}
                            label={"Username"}
                            placeholder={"Your Username"}
                            type={"text"}
                            require={true}
                            error={errorUsername}
                            setError={setErrorUsername}
                        />
                        <TextInput
                            {...password}
                            label={"Password"}
                            placeholder={"Your Password"}
                            type={"password"}
                            require={true}
                            error={errorPassword}
                            setError={setErrorPassword}
                        />
                        <div>
                            <button type="submit">Sign In</button>
                            <A href="/">Forgot Your Password?</A>
                        </div>
                    </form>
                </div>
                <div className={styles.create}>
                    <h3>New Customer?</h3>
                    <p>Creating an account has many benefits: </p>
                    <ul>
                        <li> Check out faster</li>
                        <li>Keep more than one address</li>
                        <li>Track orders and more</li>
                    </ul>
                    <button>Create An Account</button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Register;
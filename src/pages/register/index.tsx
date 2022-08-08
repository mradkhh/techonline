import {NextPage} from "next";
import React, {useContext, useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import TextInput from "components/UI/Inputs/TextInput";
import A from "components/UI/A/A";
import {Context} from "pages/_app";
import useInput from "hooks/useInput";
import Modal from "components/UI/Modal/Modal";
import { formError } from "models/index";
import styles from 'styles/pages/register.module.scss'

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const Register: NextPage = () => {
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [ usernameLoginError, setUsernameLoginError ] = useState<boolean>(false)
    const [ passwordLoginError, setPasswordLoginError ] = useState<boolean>(false)
    const [ usernameRegisterError, setUsernameRegisterError ] = useState<boolean>(false)
    const [ passwordRegisterError, setPasswordRegisterError ] = useState<boolean>(false)
    const [ confirmPasswordError, setConfirmPasswordRegisterError ] = useState<boolean>(false)
    const { authStore } = useContext(Context)

    const loginUsername = useInput('')
    const loginPassword = useInput('')
    const registerUsername = useInput('')
    const registerPassword = useInput('')
    const registerConfirmPassword = useInput('')

    const handleLoginSubmit = (e: any) => {
        e.preventDefault()
        if(loginUsername.value && loginPassword.value) {
            authStore.login(loginUsername.value, loginPassword.value)
        }
        if (!loginUsername.value) {
            setUsernameLoginError(true)
        }
        if (!loginPassword.value) {
            setPasswordLoginError(true)
        }
    }

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
    }

    const handleRegister = () => {
        setShowModal(true)
    }

    return (
        <>
            <MainLayout title="TechOnline - Registration" description="contact" mainClass="main_register">
                <Breadcrumbs array={breadcrumbs} current="Login"/>
                <div className={styles.title}>Customer Login</div>
                <div className={styles.field}>
                    <div className={styles.sign}>
                        <h3>Registered Customers</h3>
                        <p>If you have an account, sign in with your email address.</p>
                        <form onSubmit={handleLoginSubmit} className={styles.form}>
                            <TextInput
                                {...loginUsername}
                                label={"Username"}
                                placeholder={"Your Username"}
                                type={"text"}
                                require={true}
                                error={usernameLoginError}
                                setError={setUsernameLoginError}
                            />
                            <TextInput
                                {...loginPassword}
                                label={"Password"}
                                placeholder={"Your Password"}
                                type={"password"}
                                require={true}
                                error={passwordLoginError}
                                setError={setPasswordLoginError}
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
                        <button
                            onClick={handleRegister}
                        >Create An Account</button>

                    </div>
                </div>

            </MainLayout>
            <Modal show={showModal} setShow={setShowModal}>
                <form onSubmit={handleRegisterSubmit} className={styles.form}>
                    <TextInput
                        {...registerUsername}
                        label={"Username"}
                        placeholder={"Your Username"}
                        type={"text"}
                        require={true}
                        error={usernameRegisterError}
                        setError={setUsernameRegisterError}
                    />
                    <TextInput
                        {...registerPassword}
                        label={"Password"}
                        placeholder={"Your Password"}
                        type={"password"}
                        require={true}
                        error={passwordRegisterError}
                        setError={setPasswordRegisterError}
                    />
                    <TextInput
                        {...registerConfirmPassword}
                        label={"Confirm Password"}
                        placeholder={"Your Password"}
                        type={"password"}
                        require={true}
                        error={confirmPasswordError}
                        setError={setConfirmPasswordRegisterError}
                    />
                    <div>
                        <button
                            type="submit">Create</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Register;
import React from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import TextInput from "components/UI/Inputs/TextInput";
import A from "components/UI/A/A";
import styles from 'styles/pages/register.module.scss'



const breadcrumbs = [
    { path: '/', text: 'Home' }
]


const Register = () => {
    return (
        <MainLayout title="TechOnline - Contact Us" description="contact" mainClass="main_register">
            <Breadcrumbs array={breadcrumbs} current="Login"/>
            <div className={styles.title}>Customer Login</div>
            <div className={styles.field}>
                <div className={styles.sign}>
                    <h3>Registered Customers</h3>
                    <p>If you have an account, sign in with your email address.</p>
                    <form className={styles.form}>
                        <TextInput label={"Email"} placeholder={"Your Name"} type={"email"} require={true}/>
                        <TextInput label={"Password"} placeholder={"Your Password"} type={"password"} require={true}/>
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
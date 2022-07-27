import React from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import styles from 'styles/pages/contact.module.scss'
import TextInput from "components/UI/Inputs/TextInput";
import {ClockIcon, GeoLocationIcon, MailIcon, PhoneIcon} from "static/icons/icon";
import A from "components/UI/A/A";

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const Contact = () => {
    return (
        <MainLayout title={"TechOnline - Contact"} description={"contact"} mainClass={"main_contact"}>
            <Breadcrumbs array={breadcrumbs} current="Login"/>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.content}>
                <div>
                    <p>We love hearing from you, our Shop customers.</p>
                    <p> Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                    <form className={styles.form}>
                        <div>
                            <TextInput label={"Your Name"} placeholder={"Your Name"} type={"text"} require={true}/>
                            <TextInput label={"Email"} placeholder={"Your Email"} type={"email"} require={true}/>
                        </div>
                        <TextInput label={"Your Phone Number"} placeholder={"Your Phone Number"} type={"text"} require={false}/>
                        <TextInput label={"What’s on your mind?"} placeholder={"Jot us a note and we’ll get back to you as quickly as possible"} type={'textarea'} require={true}/>
                        <button>Submit</button>
                    </form>
                </div>
                <div className={styles.right}>
                    <div>
                        <GeoLocationIcon/>
                        <div>
                            <h4>Address:</h4>
                            <p>1234 Street Address City Address, 1234</p>
                        </div>
                    </div>
                    <div>
                        <PhoneIcon/>
                        <div>
                            <h4>Phone:</h4>
                            <p>(00)1234 5678</p>
                        </div>
                    </div>
                    <div>
                        <ClockIcon/>
                        <div>
                            <h4>We are open:</h4>
                            <p>Monday - Thursday: 9:00 AM - 5:30 PM <br/>
                                Friday 9:00 AM - 6:00 PM <br/>
                                Saturday: 11:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <MailIcon/>
                        <div>
                            <h4>E-mail:</h4>
                            <A href={'/'}>shop@email.com</A>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
import dynamic from "next/dynamic";
import {NextPage} from "next";
import React, {useEffect, useState} from 'react';
import $api from "services/interseptors";
import MainLayout from "layouts/MainLayout";
import styles from 'styles/pages/contact.module.scss'
import {ClockIcon, GeoLocationIcon, MailIcon, PhoneIcon} from "static/icons/icon";
import A from "components/UI/A/A";
import useInput from "hooks/useInput";
import Loading from "components/UI/Loading/Loading";

const Breadcrumbs = dynamic(() => import("components/UI/Breadcrumbs/Breadcrumbs"))
const TextInput = dynamic(() => import("components/UI/Inputs/TextInput"))

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const Contact: NextPage = () => {

    const [ nameError, setNameError ] = useState<boolean>(false)
    const [ emailError, setEmailError ] = useState<boolean>(false)
    const [ textareaError, setTextareaError ] = useState<boolean>(false)


    const name = useInput('')
    const email = useInput('')
    const phone = useInput('')
    const textarea = useInput('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (name.value && email.value && textarea.value) {
            if(phone.value.length !== 9) {
                phone.setValue('')
            }
            const res = $api.post('/contacts/', {
                name: name.value,
                email: email.value,
                phone: phone.value,
                textarea: textarea.value
            })

        }
        if (!name.value) {
            setNameError(true)
        }
        if (!email.value) {
            setEmailError(true)
        }
        if(!textarea.value) {
            setTextareaError(true)
        }
    }

    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
    }, [])



    return (
       loading ?
            <Loading/>
           :
           <MainLayout title={"TechOnline - Contact"} description={"contact"} mainClass={"main_contact"}>
               <Breadcrumbs array={breadcrumbs} current="Login"/>
               <div className={styles.title}>Contact Us</div>
               <div className={styles.content}>
                   <div>
                       <p>We love hearing from you, our Shop customers.</p>
                       <p> Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                       <form onSubmit={handleSubmit} className={styles.form}>
                           <div>
                               <TextInput
                                   {...name}
                                   error={nameError}
                                   setError={setNameError}
                                   label={"Your Name"} placeholder={"Your Name"} type={"text"} require={true}/>
                               <TextInput
                                   {...email}
                                   error={emailError}
                                   setError={setEmailError}
                                   label={"Email"} placeholder={"Your Email"} type={"email"} require={true}/>
                           </div>
                           <TextInput
                               {...phone}
                               label={"Your Phone Number"} placeholder={"Your Phone Number"} type={"text"} require={false}/>
                           <TextInput
                               {...textarea}
                               error={textareaError}
                               setError={setTextareaError}
                               label={"What’s on your mind?"} placeholder={"Jot us a note and we’ll get back to you as quickly as possible"} type={'textarea'} require={true}/>
                           <button type={"submit"}>Submit</button>
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
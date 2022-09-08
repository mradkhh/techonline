import React, { FC, memo } from 'react';
import Accordion from "components/UI/Accordion/Accordion";
import A from "components/UI/A/A";
import {
    AmericanExpressIcon,
    DiscoverIcon,
    FacebookIcon,
    InstagramIcon,
    MasterCardIcon,
    PaypalIcon,
    VisaCardIcon
} from "static/icons/icon";
import styles from './Footer.module.scss'
// import { useRouter } from 'next/router';

// const footer_content = {
//     "uz":{
//         title: "Malumotlar",
//         content: [
//             {
//                 title: "Biz haqimizda",
//                 link: "/biz-haqimizda"
//             },
//             {
//                 title: "Oferta qoidalari",
//                 link: "/about"
//             },
//             {
//                 title: "Qidiruv",
//                 link: "/about"
//             },
//             {
//                 title: "Biz haqimizda",
//                 link: "/about"
//             },
//             {
//                 title: "Oferta qoidalari",
//                 link: "/about"
//             },
//             {
//                 title: "Qidiruv",
//                 link: "/about"
//             },
//         ]
//     },
//     "en":{
//         title: "Information",
//         content: [
//             {
//                 title: "About Us",
//                 link: "/about"
//             },
//             {
//                 title: "Oferta qoidalari",
//                 link: "/about"
//             },
//             {
//                 title: "Qidiruv",
//                 link: "/about"
//             },
//             {
//                 title: "Biz haqimizda",
//                 link: "/about"
//             },
//             {
//                 title: "Oferta qoidalari",
//                 link: "/about"
//             },
//             {
//                 title: "Qidiruv",
//                 link: "/about"
//             },
//         ]
//     },
//     "ru":{
//         title: "Informatsiya",
//         content: [
//             {
//                 title: "O Nas",
//                 link: "/o-nas"
//             },
//             {
//                 title: "Oferta qoidalari",
//                 link: "/about"
//             },
//             {
//                 title: "Qidiruv",
//                 link: "/about"
//             },
//             {
//                 title: "Biz haqimizda",
//                 link: "/about"
//             },
//             {
//                 title: "Oferta qoidalari",
//                 link: "/about"
//             },
//             {
//                 title: "Qidiruv",
//                 link: "/about"
//             },
//         ]
//     }
// }

const Footer: FC = memo(() => {

    // const { locale } = useRouter()
    // const { title, content } = footer_content[locale]

    return (
            <div className={styles.footer}>
                <div className={styles.top}>
                    <div>
                        <h2>Sign Up To Our Newsletter.</h2>
                        <p>Be the first to hear about the latest offers.</p>
                    </div>
                    <div>
                        <input type="email"  placeholder='Your Email'/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className={styles.center}>
                    <Accordion header={title}>
                        {
                            content.map((item: any) => {
                                return <A key={item.title} href={item.link}>{item.title}</A>
                            })
                        }
                    </Accordion>
                    <Accordion header="PC Parts">
                        <A href="/">CPUS</A>
                        <A href="/">Add On Cards</A>
                        <A href="/">Hard Drives (Internal)</A>
                        <A href="/">Graphic Cards</A>
                        <A href="/">Keyboards / Mice</A>
                        <A href="/">Cases / Power Supplies / Cooling</A>
                        <A href="/">RAM (Memory)</A>
                        <A href="/">Software</A>
                        <A href="/">Speakers / Headsets</A>
                        <A href="/">Motherboards</A>
                    </Accordion>
                    <Accordion header="Desktop PCs">
                        <A href="/">Custom PCs</A>
                        <A href="/">Servers</A>
                        <A href="/">MSI All-In-One PCs</A>
                        <A href="/">HP/Compaq PCs</A>
                        <A href="/">ASUS PCs</A>
                        <A href="/">Techs PCs</A>
                    </Accordion>
                    <Accordion header="Laptops">
                        <A href="/">Everyday Use Notebooks</A>
                        <A href="/">MSI Workstation Series</A>
                        <A href="/">MSI Prestige Series</A>
                        <A href="/">Tablets and Pads</A>
                        <A href="/">Netbooks</A>
                        <A href="/">Infinity Gaming Notebooks</A>
                    </Accordion>
                    <Accordion header="Address">
                        <A href="/">Address: 1234 Street Address City Address, 1234</A>
                        <A href="/">Phones: <span>(00) 1234 5678</span></A>
                        <A href="/">We are open: <br/> Monday-Thursday: 9:00 AM - 5:30 PM</A>
                        <A href="/">Friday: 9:00 AM - 6:00 PM</A>
                        <A href="/">Saturday: 11:00 AM - 5:00 PM</A>
                        <A href="/">E-mail: shop@email.com</A>
                    </Accordion>
                </div>
                <div className={styles.bottom}>
                    <div>
                        <A href='/'>
                            <FacebookIcon/>
                        </A>
                        <A href='/'>
                            <InstagramIcon/>
                        </A>
                    </div>
                    <div>
                        <A href='/'>
                            <PaypalIcon/>
                        </A>
                        <A href='/'>
                            <VisaCardIcon/>
                        </A>
                        <A href='/'>
                            <MasterCardIcon/>
                        </A>
                        <A href='/'>
                            <DiscoverIcon/>
                        </A>
                        <A href='/'>
                            <AmericanExpressIcon/>
                        </A>
                    </div>
                    <div>
                        <p>Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                </div>
            </div>
    );
});

Footer.displayName = 'Footer'

export default Footer;
import {NextPage} from "next";
import React, {useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Accordion from "components/UI/Accordion/Accordion";
import Loading from "components/UI/Loading/Loading";
import styles from 'styles/pages/faq.module.scss'

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const Faq: NextPage = () => {

    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
    }, [])


    return (
       loading ?
            <Loading/>
           :
           <MainLayout title={"TechOnline - FAQ"} description={"faq"} mainClass={"main_faq"}>
               <Breadcrumbs array={breadcrumbs} current="FAQ"/>
               <h1 className={styles.title}>Shop Terms & Conditions</h1>
               <div className={styles.content}>
                   <div className={styles.left}>
                       <h2>GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h2>
                       <div className={styles.faqItems}>
                           <h4>Definitions & Interpretation</h4>
                           <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
                           <p>
                               (a) &quot;Shop&quot; means Shop Pty Ltd ABN 11 222 333 444; <br/>
                               (b) &quot;Customer&quot; means the person or corporation placing an order for the purchase of goods or services from Shop; <br/>
                               (c) &quot;Products&quot; means any goods, materials, equipment or services provided to the Customer by Shop; <br/>
                               (d) if the Customer comprises more than one person, each of those person’s liability is joint and several; <br/>
                               (e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; <br/>
                               (f) for all periods and times specified in clauses 5 and 11, time is of the essence; and <br/>
                               (g) all references to currency are references to Australian dollars. <br/>
                           </p>
                           <h4 id="1">General</h4>
                           <p>By ordering the Products and/or accepting delivery of the Products from Shop, the Customer agrees that it is bound by these Terms and Conditions of sale. Customer orders, including orders placed via the internet, are subject to acceptance by Shop. The acceptance of the Customer&apos;s order by Shop is expressly made conditional upon the Customer&apos;s assent to these Terms and Conditions which will prevail notwithstanding anything that may be stated to the contrary on the Customer&apos;s order. Shop reserves the right to vary any of these terms at any time and any subsequent orders placed by the Customer will constitute an acceptance of the terms as varied. Once a Customer order has been placed and accepted by Shop, the Customer agrees that the Customer has no right to cancel or vary the order at any time, unless agreed upon in writing by both parties.</p>
                           <h4 id="2">Quotations</h4>
                           <p>Any quotation by Shop to the Customer will be open for acceptance by the Customer within the period stated in the quotation or, where no period is stated, within seven (7) days from the date of the quotation. Thereafter, prices stated in the quotation may be varied by Shop without notice to the Customer.</p>
                           <h4 id="3">Prices / Taxes</h4>
                           <p>The prices charged by and payable to Shop will be the ruling prices applicable at the time of order placement, provided that the Products are accepted for delivery within a reasonable time. Prices are subject to change without notice. Recommended retail prices are provided for indicative purposes only and there is no obligation for Shop to comply with that recommendation. It as agreed that should the Customer fail for any reason to acquire the quantity of Products sold then without limiting Shop&apos; other rights and remedies the unit price charged for the goods sold may be amended to take into account any variation in the total quantity purchased by the Customer. Prices include GST, but do not include any other tax or duty, which is in addition to the price and is to be paid by the Customer at the time of payment for the Products.</p>
                           <h4 id="4">Terms of Payment</h4>
                           <p>Credit Card Payments may attract a surcharge, and Shop will inform the Customer if this is to be the case before processing the transaction.</p>
                           <p>Unless otherwise agreed in writing by Shop, where Shop has not agreed in writing to provide commercial credit to the Customer, the total purchase price for Products supplied will be due for payment in cash prior to delivery.</p>
                           <p>Where Shop has agreed in writing to provide commercial credit to the Customer, the Customer must make payments in accordance with the payment terms provided by Shop.</p>
                           <p>Where Shop has approved the provision of a commercial credit arrangement with the Customer but has not provided notice of the payment terms to the Customer, the Customer must pay the total purchase price for Products supplied within seven days of the statement date.</p>
                           <p>Credit Card Payment at an Invoice or transaction level may also be offered to the Customer as a stand-alone payment method, or in conjunction with Credit Card Direct Debit Authorisation.</p>
                           <h4 id="5">Credit Accounts</h4>
                           <p>Any commercial credit arrangements that are provided to the Customer by Shop will continue until terminated by Shop at it sole discretion. In the event that Shop terminates the Customer&apos;s commercial credit arrangement, the Customer will be notified in writing and termination will take effect upon receipt of that notification by the Customer.</p>
                           <h4 id="6">Change of Ownership</h4>
                           <p>Trading accounts are approved by Shop based on the information supplied and the representations made by the Customer. In the event that there is a change in ownership of the Customer, whether total or partial, the Customer must immediately provide written notice to Shop informing Shop of these changes. Until Shop receives written notice from the Customer of a change in ownership, the Customer (including where it is a company or trustee, each of the Directors thereof) holds Shop indemnified against any and all losses, unpaid accounts, interest, damages, costs, charges, fees and expenses incurred or suffered by Shop in trading with any person, company (including the same company but with a different shareholder or shareholders) or other entity (including a trust) which may have purchased the Customer&apos;s business or any interest in the Customer&apos;s business or any of the shares in the Customer and used the Customer&apos;s previously approved account for trading.</p>
                           <p>Where a Customer has been authorised by Shop to make payments through Credit Card Direct Debit, the Customer must provide notice in writing at least five (5) days prior to any change in ownership of the business to allow Shop sufficient time to contact the new owner to obtain and confirm new Credit Card information if applicable</p>
                           <h4 id="7">Information on the Products supplied</h4>
                           <p>All descriptive specifications, illustrations, drawings, data, dimensions and weights furnished by Shop or otherwise contained in catalogues or other advertising material are approximate only and are intended to be merely a general description of the goods, are not incorporated within this agreement and no not form part of the description of the goods sold under this or any other agreement unless otherwise agreed to in writing by Shop in which case such information will be subject to recognised trade tolerances</p>
                           <h4 id="8">Delivery</h4>
                           <p>The means of delivering the Products to the Customer will be at Sho&apos; discretion. Shop reserves the right to deliver Products in part deliveries. In the event that Shop incurs additional costs for meeting special (i.e. Tasmania / Northern Territory Deliveries) or urgent delivery arrangements, these additional costs may be charged to the Customer and may include the cost of airfreight where it is not the normal method of delivery. The Customer agrees to accept delivery of the Products sold at any time during normal business hours.</p>
                           <p>Shop will not be liable for any loss or damage resulting from any late delivery of the Products and late delivery will not entitle the Customer to rescind or repudiate the Customer&apos;s order for the Products.</p>
                       </div>
                   </div>
                   <div className={styles.right}>
                       <Accordion
                           // className={styles.accordion}
                           // headerStyle={styles.accordionHeader}
                           itemsStyle={styles.accordionItems}
                           className={styles.accordion}
                           headerStyle={styles.accordion_header}
                           header="Definitions & Interpretation"
                       >
                           <a href="#1">General</a>
                           <a href="#2">Quotations</a>
                           <a href="#3">Prices / Taxes</a>
                           <a href="#4">Terms of Payment</a>
                           <a href="#5">Credit Accounts</a>
                           <a href="#6">Change of Ownership</a>
                           <a href="#7">Information on the Products supplied</a>
                           <a href="#8">Delivery</a>
                       </Accordion>
                   </div>
               </div>
           </MainLayout>
    );
};

export default Faq;
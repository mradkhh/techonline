import React, {FC, memo} from 'react';
import {QuoteIcon} from "static/icons/icon";
import styles from './styles/QuoteBanner.module.scss'

interface QuoteBannerProps {
    quote: string,
    author: string,
    href: string
}


const QuoteBanner: FC<QuoteBannerProps> = ({ quote, author, href }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div>
                        <QuoteIcon/>
                        <p>{quote}</p>
                    </div>
                    <span>{author}</span>
                </div>
                <div className={styles.bottom}>
                    <button>Leave Us A Review</button>
                    <span>...</span>
                </div>
            </div>
        </div>
    );
};

export default memo(QuoteBanner);
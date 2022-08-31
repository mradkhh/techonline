import React, {memo} from 'react';
import styles from './styles/BannerSk.module.scss'

const BannerSkeleton = () => {
    return (
        <div className={styles.root}>
        </div>
    );
};

export default memo(BannerSkeleton);
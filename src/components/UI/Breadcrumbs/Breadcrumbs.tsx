import React, {FC} from 'react';
import A from "components/UI/A/A";
import styles from './Breadcrumbs.module.scss'

type Crumb = {
    path: string,
    text: string
}

interface BreadcrumbsProps {
    array: Crumb[],
    current: string
}


const Breadcrumbs: FC<BreadcrumbsProps> = ({ array, current }) => {
    return (
        <div className={styles.breadcrumbs}>
            {
                array.map(guide =>
                    <>
                        <A key={guide.path} href={guide.path}>{guide.text}</A>
                        <span>{'>'}</span>
                    </>
                )
            }
            <div>{current}</div>
        </div>
    );
};

export default Breadcrumbs;
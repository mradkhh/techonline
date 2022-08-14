import React, {FC, useState} from 'react';
import styles from "components/UI/Sidebar/Sidebar.module.scss";
import Image from "next/image";

interface BrandItemProps {
    id: number,
    icon: string,
    name: string,
    setBrandId: (arg: any) => void,
}

const BrandItem: FC<BrandItemProps> = ({id, icon, name, setBrandId}) => {

    const [ select, setSelect ] = useState<boolean>(false)

    const handleChoiceBrand = () => {
        setBrandId((state: number[]) => {
            if (state?.find(i => i === id)) {
                return state.filter(item => item !== id)
            } else {
                return [...state, id]
            }
        })
        setSelect(!select)
    }


    return (
        <div
            onClick={handleChoiceBrand}
            key={id}
            style={{background: select ? 'var(--light-blue)' : 'var(--white)', border: select ? '1px solid var(--gray)' : '1px solid var(--white)'}}
            >
            <Image
                objectFit='contain'
                objectPosition='center'
                width={153}
                height={80}
                src={icon}
                alt={name}
            />
        </div>
    );
};

export default BrandItem;
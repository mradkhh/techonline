import React, {FC, memo, ReactNode} from 'react';
import Link from "next/link";

interface AProps {
    href: string,
    children: ReactNode
}

const A: FC<AProps> = ({ href, children, ...props }) => {
    return (
        <Link href={href}>
            <a {...props}>{children}</a>
        </Link>
    );
};

export default memo(A);
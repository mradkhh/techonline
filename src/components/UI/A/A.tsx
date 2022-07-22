import React, {FC, memo, ReactNode} from 'react';
import Link from "next/link";

interface AProps {
    href: string,
    children: ReactNode
}

const A: FC<AProps> = ({ href, children }) => {
    return (
        <Link href={href}>
            <A href="/">{children}</A>
        </Link>
    );
};

export default memo(A);
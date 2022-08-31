import React, {FC, memo, ReactNode} from 'react';
import {Tabs as ReactTabs} from "react-tabs"

interface TabsProps {
    children: ReactNode
}

const Tabs: FC<TabsProps> = ({ children }) => {
    return (
        <ReactTabs>
            {children}
        </ReactTabs>
    );
};

export default memo(Tabs);
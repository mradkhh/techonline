import React, {FC, memo, ReactNode} from 'react';
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs"
import cl from './Tabs.module.scss'

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
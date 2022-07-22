import React, {FC, memo} from 'react';
import cl from './styles/SearchField.module.scss'
import {SearchIcon} from "static/icons/icon";

const SearchField: FC = memo(() => {
    return (
        <div className={cl.Root}>
            <input type="text" placeholder='Search entire store here...'/>
            <span className={cl.Icon}>
               <SearchIcon/>
            </span>
        </div>
    );
});

SearchField.displayName = 'SearchField'

export default SearchField;
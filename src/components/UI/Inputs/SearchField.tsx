import React, {createRef, FC, memo, useEffect} from 'react';
import cl from './styles/SearchField.module.scss'
import {SearchIcon, XIcon} from "static/icons/icon";
import useInput from "hooks/useInput";


interface SearchProps {
    search: boolean
}

const SearchField: FC<SearchProps> =({search}) => {
    const searchState = useInput('')
    const ref = createRef<HTMLInputElement>()

    const handleClear = () => {
        searchState.setValue('')
        ref.current?.focus()
    }

    useEffect(() => {
        !search && searchState.setValue('')
        search && ref.current?.focus()
    }, [search])

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={cl.search}>
            <input ref={ref} { ...searchState } type="text" placeholder='Search entire store here...'/>
            <span className={cl.Icon}>
               <SearchIcon/>
            </span>
            {
                searchState.value &&
                <span onClick={handleClear} className={cl.XIcon}>
                   <XIcon/>
                </span>
            }
        </div>

    );
};

SearchField.displayName = 'SearchField'

export default memo(SearchField);
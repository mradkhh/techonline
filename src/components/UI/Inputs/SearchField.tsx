import React, {createRef, FC, memo, useEffect, useState} from 'react';
import Image from "next/image";
import {SearchIcon, XIcon} from "static/icons/icon";
import useInput from "hooks/useInput";
import useDebounce from "hooks/useDebounce";
import {useFetching} from "hooks/useFetching";
import $api from "services/interseptors";
import {IProduct, IProductData} from "models/index";
import img from "static/images/products/1.jpg";
import cl from './styles/SearchField.module.scss'

interface SearchProps {
    search: boolean
}

const SearchField: FC<SearchProps> =({search}) => {
    const searchState = useInput('')
    const debounceValue = useDebounce<string>(searchState.value, 1000)
    const [ searchResults, setSearchResults ] = useState<IProduct[]>([])
    const ref = createRef<HTMLInputElement>()

    const handleClear = () => {
        searchState.setValue('')
        ref.current?.focus()
    }

    const [ searchFetching ] = useFetching(async (search_value: string) => {
        const res = await $api.get<IProductData>(`products/?search=${search_value}`)
        const results = await res.data.results
        setSearchResults(results)
    })

    useEffect(() => {
        !search && searchState.setValue('')
        search && ref.current?.focus()
    }, [search, searchState, ref])

    useEffect(() => {
        debounceValue && searchFetching(debounceValue)
    }, [debounceValue, searchFetching])

    useEffect(() => {
        if (search) {
            window.document.body.style.overflow = 'hidden'
        } else {
            window.document.body.style.overflow = 'unset'
        }
    }, [search])

    return (
        <div  >
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
            {
                searchState.value && searchResults.length && <div
                    onClick={(e) => e.stopPropagation()}
                    className={cl.searchResults}>
                    {
                        searchResults && searchResults.map(item => {
                            return <div key={item.id} className={cl.card}>
                                <div className={cl.card_img}>
                                    <Image
                                        objectFit='cover'
                                        objectPosition='center'
                                        width={80}
                                        height={80}
                                        src={item.product_img?.image ? item.product_img?.image : img }
                                        alt={"product"}
                                    />
                                </div>
                                <div className={cl.card_body}>
                                    <h4>{item?.short_desc}</h4>
                                    <div><span>{item?.price}</span> <h6>{item?.discount}</h6></div>
                                </div>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    );
};

SearchField.displayName = 'SearchField'

export default memo(SearchField);
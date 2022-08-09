import {RefObject, useEffect, useState} from "react";
import {useFetching} from "hooks/useFetching";
import $api from "services/interseptors";
import {ICategories} from "models/index";

 export const  useMousedownClickInvisible = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export const  useMouseoverClickInvisible = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}

export const useMouseHoverFetchById = (ref: RefObject<HTMLElement>, id: number ) => {
     const [ data, setData ] = useState<ICategories>({} as ICategories)

     const [ fetch ] = useFetching(async (id: number) => {
         const res = await $api.get<ICategories>(`categories/${id}`)
         setData(res.data)
     })

     useEffect(() => {
         const ids = document.querySelectorAll('.headerList')
         function handleClickOutside(event: any) {
             if (ref.current && ref.current.contains(event.target)) {
                 ids.forEach(item => {
                     if (Number(item.id) === id) {
                         return fetch(id)
                     }
                    }
                 )
             }
         }
         document.addEventListener("mouseenter", handleClickOutside);
         return () => {
             document.removeEventListener("mouseenter", handleClickOutside);
         };
     }, [ref])
}
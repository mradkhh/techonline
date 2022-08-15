import {ChangeEvent, useCallback, useState} from "react";

const  useInput = (initialValue: string ) => {
    const [ value, setValue ] = useState<string>(initialValue)


    const onChange = (e: ChangeEvent<HTMLInputElement>, callback?: () => void) => {
        setValue(e.target.value)
        callback && callback()
    };

    return {
        value, onChange, setValue
    }
}

export default useInput
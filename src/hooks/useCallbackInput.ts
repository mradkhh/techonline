import {ChangeEvent, useCallback, useState} from "react";

const  useInput = (initialValue: string ) => {
    const [ value, setValue ] = useState<string>(initialValue)


    const onChange = (e: ChangeEvent<HTMLInputElement>, callback?: (event: ChangeEvent<HTMLInputElement>) => void) => {
        setValue(e.target.value)
        callback && callback(e)
    };

    return {
        value, onChange, setValue
    }
}

export default useInput
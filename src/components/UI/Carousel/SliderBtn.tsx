import React, {FC, forwardRef, memo, PropsWithChildren, ReactNode} from 'react';
import {ArrowLeftIcon, ArrowRightIcon} from "static/icons/icon";

interface SliderBtnProps {
    dir: 'left' | 'right'
}

 const SliderBtn = forwardRef<HTMLButtonElement, SliderBtnProps>((props, ref) => {
    return (
        <button
            ref={ref}
        >
            {props.dir === 'left' ?
                <ArrowLeftIcon/>
                :
                <ArrowRightIcon/>
            }
        </button>
    )
})

SliderBtn.displayName = 'SliderBtn'

export default memo(SliderBtn)


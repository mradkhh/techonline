import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "store/reducers";


export const useAppDispatch = () => useDispatch()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
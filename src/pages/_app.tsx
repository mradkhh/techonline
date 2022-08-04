import 'styles/normalize.css'
import 'styles/index.scss'
import 'static/fonts/stylesheet.css'
import type { AppProps } from 'next/app'
import {setupStore} from "store/index";
import Store from "store/mobx";
import {createContext} from "react";
import {Provider} from "react-redux";

interface State {
  storeMobx: Store
}

const storeRedux = setupStore()
const storeMobx = new Store()

export const Context = createContext<State>({
  storeMobx
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={storeRedux}>
    <Context.Provider value={{ storeMobx }}>
        <Component {...pageProps} />
    </Context.Provider>
  </Provider>
}

export default MyApp

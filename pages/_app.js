import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from "./layouts/header";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return (
        <>
            <HeaderComponent />
            <Component {...pageProps} />
        </>
    );
}

import "@/styles/globals.css";
import "@/styles/global.scss";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import type {AppProps} from "next/app";
import {ToastContainer} from "react-toastify";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>OlaLingo</title>
				<meta name="description" content="OlaLingo"/>
			</Head>
			<Component {...pageProps} />
			<ToastContainer/>
		</>
	);
}

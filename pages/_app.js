import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/es.json";
import ClientRouter from "../components/ClientRouter";

class MyApp extends App {
    render() {
        const { Component, pageProps, shopOrigin, host } = this.props;

        const config = {
            apiKey: API_KEY,
            shopOrigin,
            host,
            forceRedirect: true,
        };

        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8" />
                </Head>
                <Provider config={config}>
                    <ClientRouter />
                    <AppProvider i18n={translations}>
                        <Component {...pageProps} />
                    </AppProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

MyApp.getInitialProps = async ({ ctx }) => {
    return {
        shopOrigin: ctx.query.shop,
        host: ctx.query.host,
    };
};

export default MyApp;

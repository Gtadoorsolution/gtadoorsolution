// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-YNPJRWMB46"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YNPJRWMB46');
            `,
                    }}
                />
                <title>GTADOORSOLUTION</title>
                <meta name="description" content="MAKING SURE THE KEYS ARE IN YOUR HANDS" />
                <meta property="og:image" content="/LogoBaner.svg" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

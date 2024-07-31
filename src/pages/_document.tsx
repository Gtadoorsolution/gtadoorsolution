// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
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

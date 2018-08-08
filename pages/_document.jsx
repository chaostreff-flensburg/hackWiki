import Document, { Head, Main, NextScript } from "next/document";

import MainStyles from "../assets/styles/main";
import ResetStyles from "../assets/styles/reset";
import TypographyStyles from "../assets/styles/typography";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <MainStyles />
          <ResetStyles />
          <TypographyStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

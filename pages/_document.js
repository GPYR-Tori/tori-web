import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a9ce25f6893d494cfb45e3e7fad9f42e"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

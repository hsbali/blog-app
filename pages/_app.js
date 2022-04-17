import '../styles/globals.scss'

import DefaultLayout from '../components/layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp

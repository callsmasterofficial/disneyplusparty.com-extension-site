import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Footer from '../components/Footer'
import Script from 'next/script'
import Howtouse from '../components/Howtouse'
import Fask_question from '../components/Fask_ques'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:"Paramount Plus Watch Party - Host a Virtual Watch Party on Paramount+",
        description:"Paramount Plus Watch Party - Stream your paramount+ favorites with your close one by hosting a personal virtual watch party.",
        keywords:"Paramount Plus Watch Party, Paramount+ Watch Party, Paramount Plus Watch Party Chrome Extension, Paramount Plus Watch Party Extension, Paramount Party, Paramount Plus Watch Party Edge Addon, Paramount Plus Party, Paramount Plus Watch Party Firefox Addon",
        pageUrl:"https://www.paramountpluswatchparty.com/",
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Howtouse/>
      <Fask_question/>
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home

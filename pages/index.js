import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Disney Plus Party - Watch Disney Plus with Friends Online from Anywhere!',
        description:
          'Disney Plus Party allows you to stream Disney Plus with your friends & family online from different locations. Install the Extension Now!',
        keywords:
          'Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party',
        pageUrl: 'https://www.disneyplusparty.com/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Fask_ques />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home

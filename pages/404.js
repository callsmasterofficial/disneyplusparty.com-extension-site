import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"Disney Plus Party - Watch Disney Plus with Friends Online from Anywhere!",
        description:"Disney Plus Party allows you to stream Disney Plus with your friends &amp; family online from different locations. Install the Extension Now!",
        keywords:"Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party",
        pageUrl:"https://www.disneyplusparty.com/",
        featuredImage:"/logo.png"
      }
    }
  }
}
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error
import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"Paramount Plus Watch Party - Host a Virtual Watch Party on Paramount+",
        description:"Paramount Plus Watch Party - Stream your paramount+ favorites with your close one by hosting a personal virtual watch party.",
        keywords:"Paramount Plus Watch Party, Paramount+ Watch Party, Paramount Plus Watch Party Chrome Extension, Paramount Plus Watch Party Extension, Paramount Party, Paramount Plus Watch Party Edge Addon, Paramount Plus Party, Paramount Plus Watch Party Firefox Addon",
        pageUrl:"https://www.paramountpluswatchparty.com/",
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
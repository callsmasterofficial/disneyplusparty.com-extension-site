import React from 'react'
import siteConfig from '../siteConfig'

function Banner() {
  return (
    <div className='banner w-[80%] py-2  mb-10 m-auto p-0  md:w-screen md:flex md:bg-[#000] justify-center items-center md:p-3.5'>
        <h1 className='ml-4 primary_text_color md:font-semibold text-lg  md:text-white'>{siteConfig.siteName}
        </h1>
        
        <h5 className='ml-4 primary_text_color md:font-semibold text-lg md:ml-1.5 md:text-white'>is now available on Google Chrome, Microsoft Edge and Mozilla Firefox</h5>
        
        
        
    </div>

  )
}

export default Banner
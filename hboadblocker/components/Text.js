import React from 'react'
import ChromeIcon from './icons/Chrome'
import Link from 'next/link'
import Textques from './Textques'
import siteConfig from '../siteConfig'
import InstallButton from './InstallButton'

function Text() {
  // linksUri

  // function for question

  return (
    <div className="main-container w-screen m-auto ">
      {/* first text container  */}
      <div className='w-[80%] m-auto p-2 rounded-md'>
      <div className="text-container -mt-5  mb-10  m-auto  md:m-5 md:w-[100%]  flex h-16  items-center justify-center">
        <h2 className="primary_text_color  text-2xl ml-2 md:text-[32px] font-semibold">
          {` ${siteConfig.section.first.heading}`}
        </h2>
      </div>

      {/* Second text contaner start here */}
      <div className="second-container mb-10  flex">
        <div className="innner-text-container m-auto -mt-[20px]  md:flex w-[100%] md:mt-0">
          <div className="paragraph-box w-[100%] md:w-[50%]">
            <div className="p-tag primary_text_color mb-[28px] p-[4px] text-justify font-normal" dangerouslySetInnerHTML={{__html:siteConfig.section.first.html}} />
            {/* button tag start here */}
            <div className='mt-6 md:mt-12 flex items-center justify-center mb-6 md:mb-0'>
            <InstallButton />
            </div>
          </div>
   
          {/* video */}
          <div className="img-box w-[100%] md:w-[50%]">
            <img src={siteConfig.section.first.video} alt=""  className='object-contain md:ml-8 ml-0 rounded-md'/>
          </div>
        </div>
      </div>
      </div>

      {/* middle buttons */}

      {/* after video text section  */}
      <div className="after-video-container w-screen -mt-14  md:mt-14" >
        

        <div className="text-box  m-auto mb-5  w-[80%]">
          <div className="text flex justify-center ">
            <h3 className="primary_text_color text-2xl md:text-[24px]  font-bold  mt-10 md:mt-0">
              {siteConfig.section.second.heading}
            </h3>
          </div>

          {/* afterborder_text */}
          <div className="after-border-text  flex items-center justify-center">
            <p className="primary_text_color mb-10">
            {siteConfig.section.second.subHeading}
            </p>
          </div>

          {/* afterborder_video & text*/}
          <div className="m-auto mb-24 w-[100%]">
            <div className="main-video-text-container mt-5 md:flex ">
              {/* textcontainer start here */}
              <div className="text-border-container mt-8 w-[100%] h-fit md:w-[50%] md:mt-20 mr-8  cursor-pointer">
                <Textques />
              </div>
              
              <div className="img-box w-[100%] md:w-[50%]">
            <img src={siteConfig.section.second.video} alt=""  className='object-contain w-[100vw] h-[80vh]  ml-0 rounded-md'/>
          </div>
              
            </div>
          </div>
          {/* text & video ends here */}
          <div className='w-[100%] -mt-10  flex justify-center items-center md:w-[100%]  md:mt-0'> 
          <InstallButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Text

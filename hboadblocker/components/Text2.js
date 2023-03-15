import React from 'react'
import Text2ques from './Text2ques'
import siteConfig from '../siteConfig'
import InstallButton from './InstallButton'


function Text2() {
  
  return (
    <div className="text2-container pb-[20px] m-auto  mt-10 w-[80%] "  >
      <div className="text2-inner_container  md:mt-0 ">
        <div className="text-box flex items-center justify-center ">
          <h3 className="primary_text_color text-2xl -mt-8 mb-5 p-2 md:text-2xl md:mt-0 font-semibold ">
           {siteConfig.section.three.heading}
          </h3>
        </div>
        <p className='text-black m-auto w-[100%] text-center'>
            {siteConfig.section.three.subHeading}
          </p>
      </div>

      {/* video text container start here */}
      <div className="main-container  m-auto mt-10 md:flex w-[100%] ">
        <div className=" md:ml-4 h-fit   md:w-[100%] cursor-pointer">
          {/* first question */}
          <Text2ques />
        </div>
        {/* text ends here */}
        {/* video start here */}
      
      </div>
      <div className='flex items-center justify-center   md:w-[100%]  mt-12'>
      <InstallButton />
      </div>
    </div>
  )
}

export default Text2

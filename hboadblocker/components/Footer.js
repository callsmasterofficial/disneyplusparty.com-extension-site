import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InstallButton from './InstallButton'
import siteConfig from '../siteConfig'

function Footer() {
  const router = useRouter()

  return (
    <div className="footer-container mt-[20%] w-screen md:mt-[10%]">
      <div className="footer-box -mt-14 border-t-2 border-white"></div>

      <div className=" mt-8 flex items-center  justify-center">
        <p className="primary_text_color pb-5 text-xl font-semibold">
          {siteConfig.footer.subheading}
        </p>
      </div>
      <div className="heading flex items-center justify-center">
        <h3 className="primary_text_color text-xl font-bold md:text-3xl">
          {siteConfig.footer.title}
        </h3>
      </div>

      <div className="btn-box m-10 flex w-auto items-center justify-center border-b-2 border-white">
        <div className="install_btn -mt-6 mr-10 mb-5 items-center justify-center md:mt-0">
          <InstallButton />
        </div>

        <button className="mb-5 -mt-6 flex w-auto items-center justify-center rounded-[4px] bg-[#000] p-2 text-xl md:mt-0  hover:bg-[#d31515] transition-all duration-200 ">
        <Link href={`${siteConfig.blogUrl}`}>
          <span
            className="px-2 text-base font-bold text-white hover:text-white  transition-all duration-100"
      
          >
            Blog
          </span>
          </Link>
        </button>
      </div>
      <div className="popu_search_container mb-4">
        <div className="popu_search_box  -mt-6 flex items-center justify-center p-2 ">
          <span className="span  flex items-center">
            <img
              className="h-8 w-8 object-contain pr-2 hidden"
              src="https://img.icons8.com/ios-glyphs/344/ffffff/right3.png"
              alt="side_icon"
            />
            <h4 className="mr-1 font-bold text-white text-sm md:text-lg hidden">Popular Searches</h4>
            <span className="mr-1 text-white hidden">:</span>
            <p className="text-xs md:text-base text-white">
              {siteConfig.footer.tags.map((item, index) => {
                if (index == 0 || index == 1) {
                  return (
                    <a href={siteConfig.url} className="pr-2" key={`tags-${index}`}>
                      {item},
                    </a>
                  )
                } else {
                  return <span key={`tags-${index}`}>{item},</span>
                }
              })}
            </p>
          </span>
        </div>

        <div className="popu_search_box  flex items-center justify-center p-2">
          <span className="span  flex items-center">
            <h4 className="mr-1 text-base text-black">Disclaimer</h4>
            <span className="mr-1 text-black">:</span>
            <p className="text-base text-black">
              {siteConfig.footer.disclaimer}
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer

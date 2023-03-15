import React from 'react'

function Howtouse() {
  return (
    <div className="w-[80%] m-auto">
      <h4 className="text-center text-2xl mb-10 mt-10 text-black">HOW TO USE HBO AD BLOCKER? </h4>

      <div className="question&ImgBox mt-5 mb-4 md:flex md:mb-0">
        {/* textcontainer start here */}
        <div className="text-border-container mt-8 h-fit w-[100%] cursor-pointer md:mt-20   md:w-[50%]">
        {
      data.map((item)=>{
        return(
                  
           <div className='flex text-black mr-6 mt-4' key={item.id}>
           <img src={item.icon} alt="Volume Booster" className='w-5 h-5 object-cover mt-[2px] '/>
           <p className='pl-2 pb-2'>{item.text}</p>
           
           </div>
           
        )
      })
      
    }
        </div>

        <div className="img-box w-[100%] md:w-[50%]">
          <img
            src="./third.png"
            alt=""
            className="ml-0 h-[80vh] w-[100vw]  rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Howtouse


const icon = "https://img.icons8.com/ios-glyphs/344/arrow.png"
const data = [
  {
    id:"h1",
    icon: icon,
    text: "Please remember to install this Ad Blocker for HBO on your device. However, it is compatible with Chromebooks, macOS, Windows, and Computers."
  },

  {
    id:"h2",
    icon: icon,
    text: "After installing this Ad Blocker, pin it to the toolbar. However, if you don’t see the extension icon of the Ad Blocker on your toolbar, click on the puzzle icon in the top right corner of the browser and click on the extension icon then to pin it."
  },

  {
    id:"h3",
    icon: icon,
    text: "Hence, you have installed the Ad Blocker on your device and are ready to stream HBO Ad-free."
  },


  {
    id:"h4",
    icon: icon,
    text: "NOTE: Please make sure to enable the Ad Blocker every time you open HBO. This step will let you stream and enjoy with zero interruptions on HBO."
  },

]


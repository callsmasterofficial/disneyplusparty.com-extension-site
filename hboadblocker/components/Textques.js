import React from 'react'



function Textques() {
  return (
     
   
    <div className='m-auto w-[100%] mb-5 text-justify'>
    {
      data.map((item)=>{
        return(
           
           <div className='flex text-black mt-0 md:mt-2' key={item.id}>
           <img src={item.icon} alt="" className='w-5 h-5 object-cover mt-[2px] '/>
           <p className='pl-2 pb-2'>{item.text}</p>
           </div>
           
        )
      })
      
    }
  
    </div>
  
  )
}





export default Textques

const icon = "https://img.icons8.com/ios-glyphs/344/arrow.png"
const data = [
  {
    id:"t1",
    icon: icon,
    text: "This tool removes and blocks all the pre-roll video Ads and the Ads in between the video from HBO automatically."
  },

  {
    id:"t2",
    icon: icon,
    text: "This Ad Blocker comes at no cost at all. Hence, you won’t need to invest in anything at all. Once installed, this Ad Blocker will work independently and block all the Ads from HBO automatically."
  },

  {
    id:"t3",
    icon: icon,
    text: "The Ad Blocker supports Chromebooks, Windows, macOS, and Computers"
  },

  {
    id:"t4",
    icon: icon,
    text: "The Ad Blocker for HBO is a user-friendly extension. Therefore, all you have to do is install it, and it will automatically remove all the commercials from HBO."
  },

  {
    id:"t5",
    icon: icon,
    text: "It is an effective extension that automatically & efficiently blocks all the advertisements from HBO and lets you stream HBO shows and movies without any interruptions."
  },



]
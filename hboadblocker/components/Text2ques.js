import React from 'react'

function Textques() {
  return (
     
   
    <div className='m-auto w-[100%] mb-5 text-justify'>
    {
      data.map((item)=>{
        return(
           
           <div className='flex text-black' key={item.id}>
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
    id:"tq1",
    icon: icon,
    text: "Firstly, click here to reach the official web store page to find this Ad Blocker for HBO."
  },

  {
    id:"tq2",
    icon: icon,
    text: "Next, click on the blue “ADD TO CHROME” button to proceed with installing it. Now, select the “ADD EXTENSION” option in the pop-up."
  },

  {
    id:"tq3",
    icon: icon,
    text: "Hence, this Ad Blocker extension has been successfully installed on your system. Now, you can enjoy HBO without any interruptions."
  },

 



]
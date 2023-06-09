import siteConfig from "../siteConfig"

function Fask_question() {
  return (
    <>


      <div className="f-ask-container m-auto mt-14 w-[80%]">
        {/* text section */}
        <div className="f-ask-box  mb-10 flex flex-col items-center justify-center border-b-2  border-white">
          <h4 className="mb-5 p-2 text-2xl md:text-3xl font-semibold primary_text_color">
          Frequently asked questions
          </h4>
          
        </div>
         <div className="accordion " id="accordionExample" >
    {siteConfig.section.faq.accordian.map(item=>(
    
    <div className="accordion-item" key={item.id}>
    <h2 className="accordion-header" id={`heading-${item.id}`}>
      <button
        className="
          accordion-button
          relative
          flex
          w-full
          items-center
          rounded-none
          border-b-2
          border-white
          secondary py-4 px-5
          text-left
          text-base
          text-white
          transition
          focus:outline-none
          mt-2
          collapsed
        "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${item.id}`}
        aria-expanded="true"
        aria-controls={`collapse${item.id}`}
        style={{backgroundColor: "black", color: "white"}}
        >
        {item.question}
      </button>
    </h2>
    <div
      id={`collapse${item.id}`}
      className="collapse accordion-collapse "
      aria-labelledby={`heading-${item.id}`}
      data-bs-parent="#accordionExample"
      style={{backgroundColor: " #fff"}}
    >
      <div className="accordion-body py-4 px-5 primary_text_color">
        {item.answer}
        <p>{item.p1}</p>
        <p>{item.p2}</p>
        <p>{item.p3}</p>
        <p>{item.p4}</p>
        <p>{item.p5}</p>
      </div>
    </div>
  </div>
    ))}
    
    
  </div>

        
      </div>
    </>
  )
}


export default Fask_question

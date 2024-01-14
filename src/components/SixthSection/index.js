import React, { useState } from 'react';
import success from '../../assets/animation_lneiudfu.mp4'
import loading from '../../assets/Animation - 1705230698558.mp4'
import failure from '../../assets/Animation - 1705233936236.mp4'
import emailjs from 'emailjs-com';



const Index = ({info}) => {

  const [overlay, setOverlay] = useState('hidden')
  const [sDate, setSDate] = useState('No appointment')
  const [popState, setPopState] = useState("loading")
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

console.log(formattedDate);



  const HandlePopUp = (value) => {
    setOverlay(value)
  }

  const HandleFinish = async() => {
    setPopState("loading")
    console.log(sDate);
    HandlePopUp('block');
    let checkbox = "NO"
    if (info.feedback.checkbox) {
      checkbox = "YES"
    }
    const templateParams = {
        ...info.feedback,
        date : sDate,
        checkbox
    }
   
    await emailjs
    .send(
        "service_phnkfe5",
        "template_1j8o59e",
        templateParams,
        'oItqjuo0LIQ70NLUz'
    )
    .then(
        function (response) {
        setPopState('success')
        console.log(popState);
        console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
        console.log("FAILED...", error);
        console.log(popState);
        setPopState('failed')
        }
    );



  }


  return (
    <>
      <div className='pt-[10%] w-full  flex justify-center flex-col'>
        <h1 className='text-[30px] text-center lg:text-[25px] font-semibold mb-[40px]'>
        Thank you for signing up to receive your $ 2,000 dollars off your next Project. 
        </h1>
        <div className='h-full grid grid-flow-row lg:grid-flow-row justify-items-center justify-center  gap-2 w-full'>
            <h1 className='text-[18px] text-center '>
            Would you like to schedule an appointment and have a date/ time thing build (optional) :
            </h1>
            <input
            className='text-black border-2 border-black h-full p-2 '
            type="date"
            onChange={(event) => {setSDate(event.target.value)}}
            min={formattedDate}
            />
            <button
            onClick={HandleFinish}
            className='bg-[#3aba84] outline-none my-4  w-fit border-[#3aba84] hover:bg-transparent hover:text-[#3aba84] border-2 p-2 px-5 rounded-md text-white'
            >
            FINISH
            </button>
        </div>
        
      </div>

      <div className={`${overlay === "block" && popState === "loading" ? "block" : "hidden"}  fixed w-full top-0 left-0 h-full bg-[#000000B3]`}>
          <div className='fixed min-w-[200px] top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-[60%]  shadow-[0px 0px 10px rgba(0, 0, 0, 0.3)] p-[10px] py-[30px] rounded-md '>
                <div>
                    <video width="300" height="300"  muted loop autoPlay>
                        <source src={loading} type="video/mp4" />
                    </video>
                </div>
                <div className='w-full hidden bg-red-500 gap-2 grid-flow-col items-center justify-center text-[10px] md:text-[16px]'>
                    <button onClick={() => HandlePopUp('hidden')} className=' text-[#3aba84]'>&times; Close</button>
                </div>

          </div>
     </div>
     <div className={`${overlay === "block" && popState === "success" ? "block" : "hidden"}  fixed w-full top-0 left-0 h-full bg-[#000000B3]`}>
          <div className='fixed min-w-[200px] top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-[60%]  shadow-[0px 0px 10px rgba(0, 0, 0, 0.3)] p-[10px] py-[30px] rounded-md '>
                <div>
                    <video width="300" height="300" muted loop autoPlay>
                        <source src={success} type="video/mp4" />
                    </video>
                </div>

                <div className='w-full grid gap-2 grid-flow-col items-center justify-center text-[10px] md:text-[16px]'>
                    <button onClick={() => HandlePopUp('hidden')} className=' text-[#3aba84]'>&times; Close</button>
                </div>
          </div>
     </div>
     <div className={`${overlay === "block" && popState === "failed" ? "block" : "hidden"}  fixed w-full top-0 left-0 h-full bg-[#000000B3]`}>
          <div className='fixed min-w-[200px] top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-[60%]  shadow-[0px 0px 10px rgba(0, 0, 0, 0.3)] p-[10px] py-[30px] rounded-md '>
                <div>
                    <video width="300" height="300" muted loop autoPlay>
                        <source src={failure} type="video/mp4" />
                    </video>
                </div>

                <div className='w-full grid gap-2 grid-flow-col items-center justify-center text-[10px] md:text-[16px]'>
                    <button onClick={() => HandlePopUp('hidden')} className=' text-[#3aba84]'>&times; Close</button>
                </div>
          </div>
     </div>
    </>
  )
}

export default Index







import React, { useState } from 'react'
import './index.css'
import sample from '../../assets/animation_lneiudfu.mp4'


const bathroom = [
    [
        {
            selection_caption: "The size of my bathroom",
            options: ["Small ( <100 st. ft )","Medium is ( 101-251 sq. ft )","Large ( 251 + sq.ft )"],
            type: "radio"
        },
        {
            selection_caption: "Cabinet Type",
            options: ["General","Semi -Custom","Custom"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Sinks Faucet",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "Black Splash",
            options: ["Tile","Glass","Procelain","Not Sure", "Not at this time"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Lighting",
            options: ["Basic", "Mid Range","High-End", "Not sure", "Not at this time"],
            type: "radio"
        },
        {
            selection_caption: "Will you need",
            options: ["New windows","Solar","Roofing","Interior painting", "Exterior painting","Siding", "Plumbing"],
            type: "checkbox"
        }
    ],    
    [
        {
            selection_caption: "Need a New Tub",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "Walk in Shower",
            options: ["Yes", "No"],
            type: "radio"
        }
    ],
]

const flooring = [
    [
        {
            selection_caption: "Material",
            options: ["Vinyl","Tile","Wood","Carpet","Not sure"],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Square foot of the area needed",
            options: ["Small ( <100 st. ft )","Medium is ( 101-251 sq. ft )","Large ( 251 + sq.ft )"],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Will you need",
            options: ["New windows","Solar","Roofing","Interior painting", "Exterior painting","Siding", "Plumbing"],
            type: "checkbox"
        }
    ]
]

const kitchen = [
    [
        {
            selection_caption: "I have an island",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "The shape of my kitchen",
            options: ["Single wall","I-shape","U-shape","G-shape", "Gallery"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "The size of my kitchen",
            options: ["Small ( <100 st. ft )","Medium is ( 101-251 sq. ft )","Large ( 251 + sq.ft )"],
            type: "radio"
        },
        {
            selection_caption: "Cabinet Type",
            options: ["General","Semi -Custom","Custom"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Appliances",
            options: ["Keep existing", "All new"],
            type: "radio"
        },
        {
            selection_caption: "Cabinet Type",
            options: ["Quartz","Procelain","Granite"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Sinks Faucet",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "Black Splash",
            options: ["Tile","Glass","Procelain","Not Sure", "Not at this time"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Lighting",
            options: ["Basic", "Mid Range","High-End", "Not sure", "Not at this time"],
            type: "radio"
        },
        {
            selection_caption: "Will you need",
            options: ["New windows","Solar","Roofing","Interior painting", "Exterior painting","Siding", "Plumbing"],
            type: "checkbox"
        }
    ],    
    [
        {
            selection_caption: "I would like my project completed",
            options: ["Immediately", "1-4weeks", "4+ weeks"],
            type: "radio"
        },
    ],
]

const selection_type =[bathroom,flooring,kitchen]

const Index = ({handleChange, modelValue}) => {
    const [overlay, setOverlay] = useState('hidden')

    const HandlePopUp = (value) => {
        console.log(value);
        setOverlay(value)
    }

    return (
    <>
     <div className='flex flex-col w-full h-full justify-center items-center'>
        <div className='w-full border-2 border-[#eaeaea] rounded-md p-4'>
            {
                selection_type[modelValue].map((selection) =>{
                    return(
                        <>
                            <div className='form-row '>
                                {
                                    selection.map((selection_info) => {
                                        return(
                                            <>
                                                <div className='form-row-input-container'>
                                                    <h1>{selection_info.selection_caption}:</h1>
                                                    <div className='form-row-input'>
                                                        {
                                                            selection_info.options.map((option)=>{
                                                                return(
                                                                    <>
                                                                        <input type={selection_info.type} name={selection_info.selection_caption} id={option} />
                                                                        <label htmlFor={option} >{option}</label> <br/>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
        <div className='grid justify-center gap-2 grid-flow-col p-4'>
            <button className='bg-[#212528] border-[#212528] hover:bg-transparent hover:text-[#212528] border-2  p-2 px-5 rounded-md text-white'>Cancel</button>
            <button onClick={() => HandlePopUp('block')} className='bg-[#3aba84] border-[#3aba84] hover:bg-transparent hover:text-[#3aba84] border-2 p-2 px-5 rounded-md text-white'>OK</button>
        </div>
     </div>
     <div className={`${overlay}  fixed w-full top-0 left-0 h-full bg-[#000000B3]`}>
          <div className='fixed min-w-[200px]  top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-[60%]  shadow-[0px 0px 10px rgba(0, 0, 0, 0.3)] p-[10px] py-[30px] rounded-md '>
        
            <div>
                <video width="300" height="300" muted loop autoPlay>
                    <source src={sample} type="video/mp4" />
                </video>
            </div>

            <div className='w-full grid gap-2 grid-flow-col items-center justify-center text-[10px] md:text-[16px]'>
                <button onClick={() => HandlePopUp('hidden')} className=' text-[#3aba84]'>&times; Close</button>
                <button className='bg-[#3aba84] border-[#3aba84] hover:bg-transparent hover:text-[#3aba84] border-2 p-2 px-5 rounded-md text-white'>Completed</button>

            </div>

          </div>
     </div>
    </>
  )
}

export default Index



import React, { useState } from 'react'
import './index.css'
import sample from '../../assets/animation_lneiudfu.mp4'


const bathroom = [
    [
        {
            selection_caption: "The size of my bathroom",
            options: ["Small ( <100 sq. ft )","Medium is ( 101-251 sq. ft )","Large ( 251 + sq.ft )"],
            type: "radio"
        },
        {
            selection_caption: "Price",
            options: ["Small ( $8,000 - $10,000 )","Medium ( $9,000 - $11,000 )","Large ( $12000 - $15,000  )"],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Cabinet Type",
            options: ["General","Semi -Custom","Custom"],
            type: "radio"
        },
        {
            selection_caption: "Plumbing",
            options: ["Yes", "No"],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Counter Tops",
            options: ["Tile","Glass","Procelain","Not Sure", "Not at this time"],
            type: "radio"
        },
        {
            selection_caption: "Lighting",
            options: ["Basic", "Mid Range","High-End", "Not sure", "Not at this time","No"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Tub to Shower",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "Need a New Tub",
            options: ["Yes", "No"],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Walk in Shower",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "Will you need",
            options: ["New windows","Solar","Roofing","Interior painting", "Exterior painting","Siding"],
            type: "checkbox"
        }

    ],
    [
        {
            selection_caption: "Need a Demo",
            options: ["Yes", "No"],
            type: "radio"
        },
    ]
]

const flooring = [
    [
    
       {
           selection_caption: "Square foot of the area needed",
           options: ["Small ( <100 sq. ft )","Medium  ( 101-251 sq. ft )","Large ( 251 + sq.ft )"],
           type: "radio"
       },
    ],
    [
        {
            selection_caption: "Price",
            options: ["Small ( $2,500 )","Medium  ( $1,919 - $4,769  )","Large ( $3,765 - $15,000 )"],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Material",
            options: ['Luxury', 'Vinyl', 'Blank', 'Tile', 'Laminate', 'Hard Wood', 'Carpet'],
            type: "radio"
        },
    ],
    [
        {
            selection_caption: "Will you need",
            options: ["New windows","Solar","Roofing","Interior painting", "Exterior painting","Siding", "Plumbing"],
            type: "checkbox"
        },
    ],
    [
        {
            selection_caption: "Need a Demo",
            options: ["Yes", "No"],
            type: "radio"
        },
    ]
]

const kitchen = [
    [
        {
            selection_caption: "The size of my kitchen",
            options: ["Small ( <100 sq. ft )","Medium is ( 101-251 sq. ft )","Large ( 251 + sq.ft )"],
            type: "radio"
        },
        {
            selection_caption: "Price",
            options: ["Small ( $13,700 )","Medium ( $16,700 - $42,000 )","Large ( $18,700 - $49,000 )"],
            type: "radio"
        },
    ],
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
        },
    ],
    [
        {
            selection_caption: "Cabinet Type",
            options: ["General","Semi -Custom","Custom"],
            type: "radio"
        },
        {
            selection_caption: "Appliances",
            options: ["Keep existing", "All new"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Counter Tops",
            options: ["Quartz","Procelain","Granite"],
            type: "radio"
        },
        {
            selection_caption: "Plumbing",
            options: ["Yes", "No"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Black Splash",
            options: ["4 inch", "Full Height"],
            type: "radio"
        },
        {
            selection_caption: "Lighting",
            options: ["Basic", "Mid Range","High-End", "Not sure", "Not at this time","No"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Will you need",
            options: ["New windows","Solar","Roofing","Interior painting", "Exterior painting","Siding", "Plumbing"],
            type: "checkbox"
        },
        {
            selection_caption: "Tub to Shower",
            options: ["Yes", "No"],
            type: "radio"
        }
    ],
    [
        {
            selection_caption: "Need a Demo",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            selection_caption: "I would like my project completed",
            options: ["Immediately", "1-4weeks", "4+ weeks"],
            type: "radio"
        },
    ],

]

const selection_type =[bathroom,flooring,kitchen]

const Index = ({handleChange, modelValue, Reset,type}) => {
    const [overlay, setOverlay] = useState('hidden')
    const [formInfo, setFormInfo] = useState({
        Flooring:{},
        Bathroom:{},
        Kitchen:{}
    })

    const [priceSelect, setPriceSelect] = useState({
        small: false,
        medium: false,
        large: false,
    })

    const HandlePopUp = (value) => {
        console.log(value);
        setOverlay(value)
    }

    const HandleSelect = (event,sel) => {
        setPriceSelect({         
            small: false,
            medium: false,
            large: false,
            [sel]: true 
        });
        // event.target.check = true
        // console.log(event.target.check);
    }
    
    const HandleForm = () => {
        let selected = Object.keys(formInfo[type]).length
        if (selected) {
            setFormInfo({
                Flooring:{},
                Bathroom:{},
                Kitchen:{}
            })
            handleChange('formState',formInfo[type])

        } else {
            HandlePopUp('block')
        }
    }

    const HandleStore = (event,type,key,value) => {
            if (event.target.type === 'checkbox') {
                console.log('enetered');
                if (formInfo[type][key]) {
                    setFormInfo({...formInfo,[type]:{ ...formInfo[type],
                        [key]:[...formInfo[type][key],value]
                    }})
                } else {
                    setFormInfo({...formInfo,[type]:{ ...formInfo[type],
                        [key]:[value]
                    }})
                }

            } else {

                setFormInfo({...formInfo,[type]:{ ...formInfo[type],
                    [key]:value
                }})
            }

            console.log(formInfo);
            console.log(event.target.type);
            // event.target.check = true
                        

            

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
                                                                var sel
                                                                if (option.includes("Small")) {
                                                                    sel = 'small'
                                                                }

                                                                if (option.includes("Medium")) {
                                                                    sel = 'medium'
                                                                }

                                                                if (option.includes("Large")) {
                                                                    sel = 'large'
                                                                }

                                                                return(
                                                                    <>
                                                                        <input
                                                                            type={selection_info.type}
                                                                            checked={selection_info.selection_caption === 'Price' ? priceSelect[sel] : null}
                                                                            name={selection_info.selection_caption}
                                                                            onChange={(event) => {
                                                                                if (option.includes("sq.")) {
                                                                                    HandleSelect(event, sel);
                                                                                    HandleStore(event, type, selection_info.selection_caption, option);
                                                                                } else {
                                                                                    HandleStore(event, type, selection_info.selection_caption, option);
                                                                                }
                                                                            }}
                                                                            id={`${option} + ${selection_info.selection_caption}`}
                                                                        />
                                                                        <label htmlFor={`${option} + ${selection_info.selection_caption}`}>{option}</label>
                                                                        <br />
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
            <button onClick={() => Reset()} className='bg-[#212528] border-[#212528] hover:bg-transparent hover:text-[#212528] border-2  p-2 px-5 rounded-md text-white'>Cancel</button>
            <button onClick={HandleForm} className='bg-[#3aba84] border-[#3aba84] hover:bg-transparent hover:text-[#3aba84] border-2 p-2 px-5 rounded-md text-white'>OK</button>
        </div>
     </div>
     <div className={`${overlay}  fixed w-full top-0 left-0 h-full bg-[#000000B3]`}>
          <div className='fixed min-w-[200px]  top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-[60%]  shadow-[0px 0px 10px rgba(0, 0, 0, 0.3)] p-[10px] py-[30px] rounded-md '>
        
            <h1 className='error'>
                Fill form before you procced
            </h1>

            <div className='w-full grid gap-2 grid-flow-col items-center justify-center text-[10px] md:text-[16px]'>
                <button onClick={() => HandlePopUp('hidden')} className=' text-[#3aba84]'>&times; Close</button>
            </div>

          </div>
     </div>
    </>
  )
}

export default Index



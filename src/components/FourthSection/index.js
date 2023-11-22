import React, { useState } from 'react'
import './index.css'
import sample from '../../assets/animation_lneiudfu.mp4'



const bathroom = {
    'The size of my bathroom': {
      selection_caption: 'The size of my bathroom',
      options: [
        'Small ( <100 sq. ft )',
        'Medium is ( 101-251 sq. ft )',
        'Large ( 251 + sq.ft )'
      ],
      type: 'radio'
    },
    'Cabinet Type': {
      selection_caption: 'Cabinet Type',
      options: [ 'General', 'Semi -Custom', 'Custom' ],
      type: 'radio'
    },
    Plumbing: {
      selection_caption: 'Plumbing',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'Counter Tops': {
      selection_caption: 'Counter Tops',
      options: [ 'Tile', 'Glass', 'Procelain', 'Not Sure', 'Not at this time' ],
      type: 'radio'
    },
    Lighting: {
      selection_caption: 'Lighting',
      options: [
        'Basic',
        'Mid Range',
        'High-End',
        'Not sure',
        'Not at this time',
        'No'
      ],
      type: 'radio'
    },
    'Tub to Shower': {
      selection_caption: 'Tub to Shower',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'Need a New Tub': {
      selection_caption: 'Need a New Tub',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'Walk in Shower': {
      selection_caption: 'Walk in Shower',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'Will you need': {
      selection_caption: 'Will you need',
      options: [
        'New windows',
        'Solar',
        'Roofing',
        'Interior painting',
        'Exterior painting',
        'Siding'
      ],
      type: 'checkbox'
    },
    'Need a Demo': {
      selection_caption: 'Need a Demo',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    }}
const bathroomPrice = ["Small ( $8,000 - $10,000 )","Medium ( $9,000 - $11,000 )","Large ( $12000 - $15,000  )"]

const flooring = {
    'Square foot of the area needed': {
      selection_caption: 'Square foot of the area needed',
      options: [
        'Small ( <100 sq. ft )',
        'Medium  ( 101-251 sq. ft )',
        'Large ( 251 + sq.ft )'
      ],
      type: 'radio'
    },
    Material: {
      selection_caption: 'Material',
      options: [
        'Luxury',
        'Vinyl',
        'Blank',
        'Tile',
        'Laminate',
        'Hard Wood',
        'Carpet'
      ],
      type: 'radio'
    },
    'Will you need': {
      selection_caption: 'Will you need',
      options: [
        'New windows',
        'Solar',
        'Roofing',
        'Interior painting',
        'Exterior painting',
        'Siding',
        'Plumbing'
      ],
      type: 'checkbox'
    },
    'Need a Demo': {
      selection_caption: 'Need a Demo',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    }
  }
        
const flooringPrice = ["Small ( $2,500 )","Medium  ( $1,919 - $4,769  )","Large ( $3,765 - $15,000 )"]

const kitchen = {
    'The size of my kitchen': {
      selection_caption: 'The size of my kitchen',
      options: [
        'Small ( <100 sq. ft )',
        'Medium is ( 101-251 sq. ft )',
        'Large ( 251 + sq.ft )'
      ],
      type: 'radio'
    },
    'I have an island': {
      selection_caption: 'I have an island',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'The shape of my kitchen': {
      selection_caption: 'The shape of my kitchen',
      options: [ 'Single wall', 'I-shape', 'U-shape', 'G-shape', 'Gallery' ],
      type: 'radio'
    },
    'Cabinet Type': {
      selection_caption: 'Cabinet Type',
      options: [ 'General', 'Semi -Custom', 'Custom' ],
      type: 'radio'
    },
    Appliances: {
      selection_caption: 'Appliances',
      options: [ 'Keep existing', 'All new' ],
      type: 'radio'
    },
    'Counter Tops': {
      selection_caption: 'Counter Tops',
      options: [ 'Quartz', 'Procelain', 'Granite' ],
      type: 'radio'
    },
    Plumbing: {
      selection_caption: 'Plumbing',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'Black Splash': {
      selection_caption: 'Black Splash',
      options: [ '4 inch', 'Full Height' ],
      type: 'radio'
    },
    Lighting: {
      selection_caption: 'Lighting',
      options: [
        'Basic',
        'Mid Range',
        'High-End',
        'Not sure',
        'Not at this time',
        'No'
      ],
      type: 'radio'
    },
    'Will you need': {
      selection_caption: 'Will you need',
      options: [
        'New windows',
        'Solar',
        'Roofing',
        'Interior painting',
        'Exterior painting',
        'Siding',
        'Plumbing'
      ],
      type: 'checkbox'
    },
    'Tub to Shower': {
      selection_caption: 'Tub to Shower',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'Need a Demo': {
      selection_caption: 'Need a Demo',
      options: [ 'Yes', 'No' ],
      type: 'radio'
    },
    'I would like my project completed': {
      selection_caption: 'I would like my project completed',
      options: [ 'Immediately', '1-4weeks', '4+ weeks' ],
      type: 'radio'
    }
  }
        
const kitchenPrice = ["Small ( $13,700 )","Medium ( $16,700 - $42,000 )","Large ( $18,700 - $49,000 )"]

const selection_type =[bathroom,flooring,kitchen]

const selection_price = [bathroomPrice,flooringPrice,kitchenPrice]

const Index = ({handleChange, modelValue, Reset,type}) => {
    const [overlay, setOverlay] = useState('hidden')
    const [error, setError] = useState("")
    const [formInfo, setFormInfo] = useState({
        Flooring:{},
        Bathroom:{},
        Kitchen:{}
    })

    const [priceSelect, setPriceSelect] = useState()
    let firstkey = Object.keys(selection_type[modelValue])[0]
    const [selected, setSelected] = useState(firstkey)

    console.log(selected, 'this is selected');

    const HandlePopUp = (value) => {
        console.log(value);
        setOverlay(value)
    }

    const HandleSelect = (sel,type,modelValue,caption,option) => {
        
        setPriceSelect(sel);
        setFormInfo({
            ...formInfo,
            [type]: {
              ...formInfo[type],
              Price: selection_price[modelValue][sel],
              [caption]: [option]
         }
        })
        console.log(formInfo,caption);

    }
    
    const HandleForm = () => {
        let selected = Object.keys(formInfo[type]).length
        let modelQlength = Object.keys(selection_type[modelValue]).length + 1
        console.log(selected,modelQlength,'matches');

        if (!selected || selected !== modelQlength) {
            setError("Fill form before proceeding")
            HandlePopUp('block')

        } else if(!formInfo[type]['Price']){
            setError("Select size")
            HandlePopUp('block')
        }else {
            handleChange('formState',formInfo[type])
            setFormInfo({
                Flooring:{},
                Bathroom:{},
                Kitchen:{}
            })
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

            console.log(formInfo,priceSelect);
            // console.log(event.target.type);
            // event.target.check = true
                                                
            
            

            

    }

    return (
    <>
     <div className='flex flex-col w-full h-full justify-center items-center'>
        <div className='w-full border-2 border-[#eaeaea] rounded-md p-4'>
            <div className={`bg-[#3aba8] bg-white text-white grid grid-container mb-2  w-full gap-y-2 `}>
                {
                    Object.keys(selection_type[modelValue]).map((selection,index) => {
                        return (
                            index === 0 ? (
                              <div className={`flex xl:h-[60px] p-2 crumb ${selected === selection ? 'text-red-400 bg-white' : formInfo[type][selection] ? ' bg-[#3aba84]' : 'bg-red-400'}`}>
                                <button onClick={() => { setSelected(selection) }} className={` w-full  outline-none`}>{selection}</button>
                              </div>
                            ) : (
                              Object.keys(selection_type[modelValue]).length - 1 === index ? (
                                <div className={`flex xl:h-[60px] p-2 crumb3 ${selected === selection ? 'text-red-400 bg-white' : formInfo[type][selection] ? ' bg-[#3aba84]' : 'bg-red-400'}`}>
                                    <button onClick={() => { setSelected(selection) }} className={`  text- w-full outline-none`}>{selection}</button>
                                </div>
                              ) : (
                                <div className={`flex w-250px] xl:h-[60px] p-2 crumb2 ${selected === selection ? 'text-red-400 bg-white' : formInfo[type][selection] ? ' bg-[#3aba84]' : 'bg-red-400'}`}>
                                    <button onClick={() => { setSelected(selection) }} className={` text- w-full outline-none`}>{selection}</button>
                                </div>
                              )
                            )
                          );
                          
                    })
                }
            </div>

            {
                Object.values(selection_type[modelValue]).map((selection_info) =>{
                    // console.log(selection_info.selection_caption,'this is caption');
                    return(
                        <>
                            {
                                selected === selection_info.selection_caption
                                // formInfo[type][selection_info.selection_caption]
                                ?
                                    <div className={selection_info.selection_caption === "Price" ? 'grid grid-cols-': 'form-row-input-container'}>
                                        <h1>{selection_info.selection_caption}:</h1>
                                        <div className='form-row-input'>
                                            {
                                                selection_info.options.map((option)=>{
                                                    var sel
                                                    if (option.includes("Small")) {
                                                        sel = 0
                                                    }

                                                     if (option.includes("Medium")) {
                                                        sel = 1
                                                    }

                                                     if (option.includes("Large")) {
                                                        sel = 2
                                                    }

                                                     return(
                                                        <>
                                                            <input
                                                                type={selection_info.type}
                                                                
                                                                name={selection_info.selection_caption}
                                                                onChange={(event) => {
                                                                    if (option.includes("sq.")) {
                                                                        HandleSelect(sel,type,modelValue, selection_info.selection_caption, option);
                                                                        // HandleSelect(sel,type,modelValue) ;
                                                                    } else {
                                                                        HandleStore(event, type, selection_info.selection_caption, option);
                                                                    }
                                                                }}
                                                                id={`${option} + ${selection_info.selection_caption}`}
                                                            />
                                                            <label className='pl-2' htmlFor={`${option} + ${selection_info.selection_caption}`}>{option}</label>
                                                            <br />
                                                        </>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                :
                                <div>
                                    
                                </div>
                            }

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
                {error}
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











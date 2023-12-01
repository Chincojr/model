import React, { useState } from 'react'
import './index.css'
import sample from '../../assets/animation_lneiudfu.mp4'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";



const bathroom = {
    'The size of my bathroom': {
      selection_caption: 'The size of my bathroom',
      options: [
        {
          name : 'Small ( <100 sq. ft )',
        },
        {
          name : 'Medium is ( 101-251 sq. ft )',
        },
        {
          name : 'Large ( 251 + sq.ft )'
        },
      ],
      type: 'radio'
    },
    'Cabinet Type': {
      selection_caption: 'Cabinet Type',
      options: [ 
        {
          name :'General'
        },
        {
          name :'Semi - Custom'
        }, 
        {
          name :'Custom'
        }, 
      ],
      type: 'radio'
    },
    Plumbing: {
      selection_caption: 'Plumbing',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],      
      type: 'radio'
    },
    'Counter Tops': {
      selection_caption: 'Counter Tops',
      options: [ 
        {
          name: "Tile",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy26aMAMqazVYvNo_MFO-V_Q_bUWcENFeXwA&usqp=CAU"
        },
        {
          name: "Procelain",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyH_DerW_Jw-QI3s3rOdr9XTLps4isj4KRQ&usqp=CAU"
        },
        {
          name: "Glass",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS945fiGinU8hG30_kKWqU6JVvEU5Jl1S2RjA&usqp=CAU"
        },
        {
          name: 'Not Sure',
        },
        {
          name: 'Not at this time',
        },
      ],
      type: 'radio'
    },
    Lighting: {
      selection_caption: 'Lighting',
      options: [
        {
          name: "Basic"
        },
        {
          name: "Mid Range"
        },
        {
          name: "High-End"
        },
        {
          name: "Not sure"
        },
        {
          name: "Not at this time"
        },
        {
          name: "No"
        },
      ],
      type: 'radio'
    },
    'Tub to Shower': {
      selection_caption: 'Tub to Shower',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],      
      type: 'radio'
    },
    'Need a New Tub': {
      selection_caption: 'Need a New Tub',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],      
      type: 'radio'
    },
    'Walk in Shower': {
      selection_caption: 'Walk in Shower',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],      
      type: 'radio'
    },
    'Will you need': {
      selection_caption: 'Will you need',
      options: [
        {
          name:"New windows",
          image: 'https://images.unsplash.com/photo-1559219432-1962fcaa2752'
        },
        {
          name:"Solar",
          image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a'
        },
        {
          name:"Roofing",
          image: 'https://images.unsplash.com/photo-1643509867448-57001e0c333d'
        },
        {
          name:"Interior painting",
          image: 'https://images.pexels.com/photos/5691610/pexels-photo-5691610.jpeg?auto=compress&cs=tinysrgb'
        },
        {
          name:"Exterior painting",
          image: 'https://images.pexels.com/photos/1036863/pexels-photo-1036863.jpeg?auto=compress&cs=tinysrgb'
        },
        {
          name:"Siding",
          image: 'https://images.unsplash.com/photo-1612451850869-87c3c039c72e'
        },
        {
          name:"Plumbing",
          image: 'https://images.unsplash.com/photo-1612451850869-87c3c039c72e'
        },
      ],
      type: 'checkbox'
    },
    'Need a Demo': {
      selection_caption: 'Need a Demo',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],
      type: 'radio'
    }}
const bathroomPrice = ["Small ( $8,000 - $10,000 )","Medium ( $9,000 - $11,000 )","Large ( $12000 - $15,000  )"]

const flooring = {
    'Square foot of the area needed': {
      selection_caption: 'Square foot of the area needed',
      options: [
        {
          name : 'Small ( <100 sq. ft )',
        },
        {
          name : 'Medium is ( 101-251 sq. ft )',
        },
        {
          name : 'Large ( 251 + sq.ft )'
        },
      ],
      type: 'radio'
    },
    Material: {
      selection_caption: 'Material',
      options: [
        {
          name:"Luxury",
          image: 'https://i.pinimg.com/736x/a4/9d/72/a49d721718f0d9873975f86c2a1ff189.jpg'
        },
        {
          name:"Vinyl",
          image: 'https://images.unsplash.com/photo-1590938272761-c11f74452660'
        },
        {
          name:"Tile",
          image: 'https://images.unsplash.com/photo-1644519797636-e32b88d730bd'
        },
        {
          name:"Laminate",
          image:"https://images.unsplash.com/photo-1575204015311-0fe377370780"
        },
        {
          name:"Hard Wood",
          image:"https://images.unsplash.com/photo-1522198734915-76c764a8454d"
        },
        {
          name:"Carpet",
          image:"https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc"
        },
        {
          name:"Blank",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaaU5KFrDLGgFZxbYgqk8R1a3O_iUvwq-TA"
        },
      ],
      type: 'radio'
    },
    'Will you need': {
      selection_caption: 'Will you need',
      options: [
        {
          name:"New windows",
          image: 'https://images.unsplash.com/photo-1559219432-1962fcaa2752'
        },
        {
          name:"Solar",
          image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a'
        },
        {
          name:"Roofing",
          image: 'https://images.unsplash.com/photo-1643509867448-57001e0c333d'
        },
        {
          name:"Interior painting",
          image: 'https://images.pexels.com/photos/5691610/pexels-photo-5691610.jpeg?auto=compress&cs=tinysrgb'
        },
        {
          name:"Exterior painting",
          image: 'https://images.pexels.com/photos/1036863/pexels-photo-1036863.jpeg?auto=compress&cs=tinysrgb'
        },
        {
          name:"Siding",
          image: 'https://images.unsplash.com/photo-1612451850869-87c3c039c72e'
        },
        {
          name:"Plumbing",
          image: 'https://images.unsplash.com/photo-1612451850869-87c3c039c72e'
        },
      ],
      type: 'checkbox'
    },
    'Need a Demo': {
      selection_caption: 'Need a Demo',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],
      type: 'radio'
    }
  }
        
const flooringPrice = ["Small ( $2,500 )","Medium  ( $1,919 - $4,769  )","Large ( $3,765 - $15,000 )"]

const kitchen = {
    'The size of my kitchen': {
      selection_caption: 'The size of my kitchen',
      options: [
        {
          name : 'Small ( <100 sq. ft )',
        },
        {
          name : 'Medium is ( 101-251 sq. ft )',
        },
        {
          name : 'Large ( 251 + sq.ft )'
        },
      ],
      type: 'radio'
    },
    'I have an island': {
      selection_caption: 'I have an island',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],
      type: 'radio'
    },
    'The shape of my kitchen': {
      selection_caption: 'The shape of my kitchen',
      options: [ 
        {
          name:"U-shape",
          image: "https://media.designcafe.com/wp-content/uploads/2019/12/17055357/u-shaped-modular-kitchen-design.jpg",
        },
        {
          name:"Galley",
          image: "https://dailycivil.com/wp-content/uploads/2021/06/Galley-Kitchen.webp",
        },
        {
          name:"Single wall",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkUGs6VN-NrDZPKZRvDy-QMkN3npPBW4oSg&usqp=CAU",
        },
        {
          name:"I-shape",
          image: "https://www.myidealhome.us/wp-content/uploads/2018/03/i-style-kitchen-with-island-flat-panel-cabinets.jpg",
        },
        {
          name:"G-shape",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxG_fyBF8QqKFnged3d6Al4VrrREkTpBIhtaOrTIvxiKUqJtQa4p8lPRO1ANylG9uvTVs&usqp=CAU",
        },
      ],
      type: 'radio'
    },
    'Cabinet Type': {
      selection_caption: 'Cabinet Type',
      options: [ 
        {
          name :'General'
        },
        {
          name :'Semi - Custom'
        }, 
        {
          name :'Custom'
        }, 
      ],
      type: 'radio'
    },
    Appliances: {
      selection_caption: 'Appliances',
      options: [         
        {
          name :'Keep Exisiting'
        },
        {
          name :'All new'
        }, 
      ],
      type: 'radio'
    },
    'Counter Tops': {
      selection_caption: 'Counter Tops',
      options: [ 
        {
          name: "Quartz",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIsCkeCEXEzj7RnlmIvrqKFbCeAM3e6K_oZFVQwQVLwnHgFwk1CsKICKENW8Lo9Hq77s&usqp=CAU"
        },
        {
          name: "Procelain",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyH_DerW_Jw-QI3s3rOdr9XTLps4isj4KRQ&usqp=CAU"
        },
        {
          name: "Granite",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-Y3rRcM77QN8xhSDLJ5hQxnctm3G3U90_A&usqp=CAU"
        },
      ],
      type: 'radio'
    },
    Plumbing: {
      selection_caption: 'Plumbing',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],      
      type: 'radio'
    },
    'Black Splash': {
      selection_caption: 'Black Splash',
      options: [ 
        {
          name: "4 inch"
        },
        {
          name: "Full Height"
        },
      ],
      type: 'radio'
    },
    Lighting: {
      selection_caption: 'Lighting',
      options: [
        {
          name: "Basic"
        },
        {
          name: "Mid Range"
        },
        {
          name: "High-End"
        },
        {
          name: "Not sure"
        },
        {
          name: "Not at this time"
        },
        {
          name: "No"
        },
      ],
      type: 'radio'
    },
    'Will you need': {
      selection_caption: 'Will you need',
      options: [
        {
          name:"New windows",
          image: 'https://images.unsplash.com/photo-1559219432-1962fcaa2752'
        },
        {
          name:"Solar",
          image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a'
        },
        {
          name:"Roofing",
          image: 'https://images.unsplash.com/photo-1643509867448-57001e0c333d'
        },
        {
          name:"Interior painting",
          image: 'https://images.pexels.com/photos/5691610/pexels-photo-5691610.jpeg?auto=compress&cs=tinysrgb'
        },
        {
          name:"Exterior painting",
          image: 'https://images.pexels.com/photos/1036863/pexels-photo-1036863.jpeg?auto=compress&cs=tinysrgb'
        },
        {
          name:"Siding",
          image: 'https://images.unsplash.com/photo-1612451850869-87c3c039c72e'
        },
        {
          name:"Plumbing",
          image: 'https://images.unsplash.com/photo-1612451850869-87c3c039c72e'
        },
      ],
      type: 'checkbox'
    },
    'Tub to Shower': {
      selection_caption: 'Tub to Shower',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],
      type: 'radio'
    },
    'Need a Demo': {
      selection_caption: 'Need a Demo',
      options: [ 
        {
          name :'Yes'
        },
        {
          name :'No'
        },
      ],      
      type: 'radio'
    },
    'I would like my project completed': {
      selection_caption: 'I would like my project completed',
      options: [ 
        {
          name: "Immediately"
        },
        {
          name: "1-4weeks"
        },
        {
          name: "4+ weeks"
        },
      ],
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

    console.log('this is type',type);

    const [priceSelect, setPriceSelect] = useState()
    const [selectIndex, setSelectIndex] = useState(0)
    const [answered, setAnswered] = useState(0)
    let firstObj = Object.values(selection_type[modelValue])[0]
    const [selection_info, setSelection_info] = useState(firstObj )

    const HandlePopUp = (value) => {
        console.log(value);
        setOverlay(value)
    }

    const HandleNext = () => {
      
      let next = selectIndex + 1

      setSelectIndex(next)
      setSelection_info(Object.values(selection_type[modelValue])[next])

      console.log(Object.values(selection_type[modelValue]).length,'this is next',next,selection_info);

    }

    const HandlePrev = () => {
      let next = selectIndex - 1
      setSelectIndex(next)
      setSelection_info(Object.values(selection_type[modelValue])[next])

      console.log(Object.values(selection_type[modelValue]).length,'this is next',next,selection_info,'prev');
    }

    const HandleSelect = (sel,type,modelValue,caption,option) => {
        
        setPriceSelect(sel);
        setFormInfo({
            ...formInfo,
            [type]: {
              ...formInfo[type],
              Price: selection_price[modelValue][sel],
              [caption]: option
         }
        })
        // HandleAnswered()
        if (!formInfo[type][caption]) {
          setAnswered(answered +1)
        }

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
                    let tes = [value]
                    setFormInfo({...formInfo,[type]:{ ...formInfo[type],
                        [key]:[...formInfo[type][key],...new Set(tes)]
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

            if (!formInfo[type][key]) {
              setAnswered(answered +1)
            }

            console.log(formInfo,priceSelect);

    }

  
    return (
    <>
     <div className='flex flex-col w-full h-full justify-center items-center'>
        <div className='w-full border-2 border-[#eaeaea] rounded-md p-4'>
            <div className={`bg-[#3aba8] text-[24px] bg-white text-black text-end mb-2  w-full `}>
            {
              ` 
                ${answered}
                out
                ${Object.keys(selection_type[modelValue]).length}
              `
            }
            </div>
            <div className='w-full flex justify-between py-3'> 
              <button disabled={selectIndex === 0 ? true :false} className='outline-none' onClick={HandlePrev} ><HiArrowSmallLeft className='h-[30px] w-[30px]' /></button>
              <button disabled={selectIndex === Object.values(selection_type[modelValue]).length - 1 ? true :false} className='outline-none' onClick={HandleNext} ><HiArrowSmallRight className='h-[30px] w-[30px]'  /></button>
            </div>
            <div className={selection_info.selection_caption === "Price" ? 'grid grid-cols-': 'form-row-input-container'}>
                <h1 className='mb-2'>{selection_info.selection_caption}:</h1>
                <div className='form-row-input grid lg:grid-flow-col grid-flow-row gap-5'>
                    {
                        selection_info.options.map((obj)=>{
                            var sel
                            var option =obj.name
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
                                  {
                                    obj.image ?
                                    <div className='grid gap-1'>
                                      <img src={obj.image} className='lg:h-[200px] rounded-md bg-center bg-contain lg:w-[200px] h-[100px] w-[100px]' />
                                      <div>

                                        <input
                                          type={selection_info.type}
                                          checked={formInfo[type][selection_info.selection_caption] && ( formInfo[type][selection_info.selection_caption] === option || formInfo[type][selection_info.selection_caption].includes(option) ) ? true : false}
                                          name={selection_info.selection_caption}
                                          onChange={(event) => {
                                              if (option.includes("sq.")) {
                                                  HandleSelect(sel,type,modelValue, selection_info.selection_caption, option);
                                              } else {
                                                  HandleStore(event, type, selection_info.selection_caption, option);
                                              }
                                          }}
                                          id={`${option} + ${selection_info.selection_caption}`}
                                        />
                                        <label className='pl-2' htmlFor={`${option} + ${selection_info.selection_caption}`}>{option}</label>
                                        <br />
                                      </div>

                                    </div>
                                    :
                                    <>
                                      <div>
                                        <input
                                          type={selection_info.type}
                                          checked={formInfo[type][selection_info.selection_caption] && formInfo[type][selection_info.selection_caption] === option ? true : false}
                                          // checked='true'
                                          name={selection_info.selection_caption}
                                          onChange={(event) => {
                                              if (option.includes("sq.")) {
                                                  HandleSelect(sel,type,modelValue, selection_info.selection_caption, option);
                                              } else {
                                                  HandleStore(event, type, selection_info.selection_caption, option);
                                              }
                                          }}
                                          id={`${option} + ${selection_info.selection_caption}`}
                                        />
                                        <label className='pl-2' htmlFor={`${option} + ${selection_info.selection_caption}`}>{option}</label>
                                        <br />
                                      </div>

                                    </>
                                  }

                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
            

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











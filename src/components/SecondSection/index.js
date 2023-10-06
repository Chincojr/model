import React from 'react'
import './index.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Index = ({handleChange}) => {
  return (
    <>
    
    <div className='flex flex-col w-full h-full justify-center items-center '>
        <h1 className='text-[30px] text-center lg:text-[65px] font-semibold mb-[40px]'>
            Where do you live in:
        </h1>
        <div className='grid w-full grid-rows-3 lg:grid-cols-3 gap-5 h-full'>
            <div className='second-section-selection'> 
                <div className='selection-top'>
                    <img alt="house" className="second-selection-img" src='https://cbvalueaddrealty.in/wp-content/uploads/2022/07/condominium.jpg' />
                    <h4 className='image-info'>Amelie Townsend <br /><span>( I live in a townhome.)</span></h4>
                </div>
                <div className='selection-bottom'>
                    <div className='selection-caption-container '>
                       <button onClick={() => handleChange('building','Condo/Townhome')} className='selection-caption'>Condo/Townhome</button>
                       <div className='h-[70%] mt-[2px] flex justify-center items-center'>
                            <MdOutlineKeyboardArrowRight className=''  />
                       </div>
                    </div>
                </div>
            </div>            
            <div className='second-section-selection'> 
                <div className='selection-top'>
                    <img alt="house" className="second-selection-img" src='https://www.southernliving.com/thmb/5EvDoCH-TH-oqKicpHE4wWaNKtQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/27196_AdaptiveCottage00006-2000-7702094217044ce4830a8adb0a69b6da.jpg'/>
                    <h4 className='image-info'>Amelie Townsend <br /><span>( I live in a townhome.)</span></h4>
                </div>
                <div className='selection-bottom'>
                <div className='selection-caption-container hover:bg[#1a1d21]'>
                       <button onClick={() => handleChange('building','Single Story Home')} className='selection-caption'>Single Story Home</button>
                       <div className='h-[70%] mt-[2px] flex justify-center items-center'>
                            <MdOutlineKeyboardArrowRight className=''  />
                       </div>
                    </div>
                </div>
            </div>
            <div className='second-section-selection'> 
                <div className='selection-top'>
                    <img alt="house" className="second-selection-img" src='https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-two-story-house-plans-1.webp' />
                    <h4 className='image-info'>Amelie Townsend <br /><span>( I live in a townhome.)</span></h4>
                </div>
                <div className='selection-bottom'>
                <div className='selection-caption-container hover:bg[#1a1d21]'>
                        <button onClick={() => handleChange('building','Multi Story Home')} className='selection-caption'>Multi Story Home</button>
                       <div className='h-[70%] mt-[2px] flex justify-center items-center'>
                            <MdOutlineKeyboardArrowRight className=''  />
                       </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default Index
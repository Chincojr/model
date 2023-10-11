import React from 'react'
import './index.css'


const Index = ({handleChange, model}) => {
  return (
    <>
     <div className='flex flex-col w-full h-full justify-center items-center '>
        <h1 className='text-[30px] text-center lg:text-[65px] font-semibold mb-[40px]'>
            The purpose of this project is:
        </h1>
        <div className='grid w-full  lg:grid-cols-2 gap-10 lg:gap-1'>
            <div className='third-section-left' >
                <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sRNjb7ls6ZzJf6LpZZh2qYnExNYvUF8zF_kMqHIa70d96DyojuUkJtfN_V1DNQULdOE&usqp=CAU' className='third-section-img'/>
                <div className='third-selection-caption-container'>
                    <button onClick={() => handleChange('type','complete')} className='selection-caption-third'>Complete {model} Remodel</button>
                </div>

            </div>
            <div className='third-section-right' >
                <div className='third-section-right-img-container'>
                    <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDPz7_AWVqJPNh8GOUbHq3HkrJ4S1jz8a5cTWJ_e8KxCgD0MnWXP3rEYhZVBgijeiHEU&usqp=CAU' className='third-section-img'/>
                    <img alt='' src='https://metrointeriors.com/wp-content/uploads/sites/7/2019/08/IMG_3510-270x180.jpeg' className='third-section-img'/>
                </div>
                <div className='third-selection-caption-container'>
                    <button onClick={() => handleChange('type','partial')}   className='selection-caption-third'>Partial {model} Remodel</button>
                </div>            
            </div>
        </div>
     </div>
    </>
  )
}

export default Index
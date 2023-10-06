import React, { useState } from 'react'
import './index.css'
import {BiBath} from 'react-icons/bi'
import {RiKnifeBloodLine} from 'react-icons/ri'
import {PiHouseSimpleBold} from 'react-icons/pi'

const images ={
    bathroom: [
        {
            id: 1,
            img:'https://www.thespruce.com/thmb/_VPskZY02V-oej8R-P_FEqSFBls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/master-bathroom-design-ideas-4129362-hero-d896a889451341dfaa59c5b2beacf02d.jpg'

        },
        {
            id: 2,
            img:'https://hips.hearstapps.com/hmg-prod/images/martha-mulholland-standard-architecture-malibu-house-094-edit-1647617137.jpg'
        },
        {
            id: 3,
            img:'https://www.thespruce.com/thmb/ji87XabKvQ5KVoidSrj0_Gzu1oQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fancy-bathroom-ideas-4325947-hero-4777bf14fe2b447b86a21e8a64194c29.jpg'
        },
        
        ],
    kitchen: [
        {
            id: 1,
            img:'https://hips.hearstapps.com/hmg-prod/images/2-1673453547.jpg'
        },
        {
            id: 2,
            img:'https://www.thespruce.com/thmb/LAjio5DP9_JTYUAPc-JdMFM96v4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg'
        },
        {
            id: 3,
            img:'https://hips.hearstapps.com/hmg-prod/images/kitchen-remodel-ideas-hbx120121kristinfine-008-1651168839.jpg'
        },
        
        ],
    flooring: [
        {
            id: 1,
            img:'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-laminate-flooring-step-5.jpg'
        },
        {
            id: 2,
            img:'https://architizer-prod.imgix.net/media/mediadata/uploads/1502401808479parquet_natural_genius_medoc1_01.jpg'
        },
        {
            id: 3,
            img:'https://architizer-prod.imgix.net/media/mediadata/uploads/15027371959461456712028674VermontMedleyFloor_1.jpg'
        },
        
        ],
}





const Index = ({handleChange}) => {

    const [kitchenState, setKitchenState] = useState(true);
    const [bathState, setBathState] = useState(true)
    const [floorState, setFloorState] = useState(true)

    const [selectChanger, setSelectChanger] = useState({
        kitchen:1,
        bath:1,
        floor:1,
    })

    const HandleSelect = (select, val) => {
        setSelectChanger({ ...selectChanger, [select]: val });
    };



  return (
    

    <>
     <div className='flex flex-col w-full h-full justify-center items-center '>
        <h1 className='text-[30px] text-center lg:text-[65px] font-semibold mb-[40px]'>
            I am looking for:
        </h1>
        <div className='grid w-full lg:grid-cols-3 gap-5'>
            <div className='first-section-selection'>
                <div 
                    onMouseEnter={() => setBathState(false)}
                    onMouseLeave={() => setBathState(true)}
                    onClick={() => handleChange('model','Bathroom')}
                    className='selection-head hover:bg-[#8f9192]'>
                        <BiBath color={bathState ? 'inherit': 'white'} size={50}/>
                        <h3 className={bathState ? 'inherit': 'text-white'}>Bathroom</h3>
                </div>
                <div className='selection-img-container'>
                    {
                        images.bathroom.map((obj) =>{
                            return (
                                <>
                                    <img 
                                        style={{
                                            transform: `translate(-${selectChanger.bath * 100}%)`,
                                            transition: 'transform 1s ease-in-out',
                                        }}
                                        className='first-selection-img' 
                                        alt='image' 
                                        src={obj.img}
                                    />
                                </>
                            )
                        })
                    }
                    <div className='img-selector'>
                        <div onClick={() => HandleSelect('bath',0)} className={selectChanger.bath === 0? 'selector selected':'selector'}></div>
                        <div onClick={() => HandleSelect('bath',1)} className={selectChanger.bath === 1? 'selector selected':'selector'}></div>
                        <div onClick={() => HandleSelect('bath',2)} className={selectChanger.bath === 2? 'selector selected':'selector'}></div>
                    </div>
                </div>
            </div>
            <div className='first-section-selection'>
                <div
                    onMouseEnter={() => setKitchenState(false)}
                    onMouseLeave={() => setKitchenState(true)}
                    onClick={() => handleChange('model','Kitchen')}                    
                    className='selection-head hover:bg-[#8f9192]'
                >
                        <RiKnifeBloodLine color={kitchenState ? 'inherit': 'white'}  size={50} />
                        <h3 className={kitchenState ? 'inherit': 'text-white'}>Kitchen</h3>
                </div>
                <div className='selection-img-container'>
                    {
                        images.kitchen.map((obj) =>{
                            return (
                                <>
                                    <img 
                                        style={{
                                            transform: `translate(-${selectChanger.kitchen * 100}%)`,
                                            transition: 'transform 1s ease-in-out',
                                        }}
                                        className='selection-img' 
                                        alt='image' 
                                        src={obj.img}
                                    />
                                </>
                            )
                        })
                    }
                    <div className='img-selector'>
                        <div onClick={() => HandleSelect('kitchen',0)} className={selectChanger.kitchen === 0? 'selector selected':'selector'}></div>
                        <div onClick={() => HandleSelect('kitchen',1)} className={selectChanger.kitchen === 1? 'selector selected':'selector'}></div>
                        <div onClick={() => HandleSelect('kitchen',2)} className={selectChanger.kitchen === 2? 'selector selected':'selector'}></div>
                    </div>
                </div>
            </div>
            <div className='first-section-selection'>
                <div 
                    onMouseEnter={() => setFloorState(false)}
                    onMouseLeave={() => setFloorState(true)}
                    onClick={() => handleChange('model','Flooring')}                    
                    className='selection-head hover:bg-[#8f9192]'>
                    <PiHouseSimpleBold color={floorState ? 'inherit': 'white'}  size={50} />
                    <h3 className={floorState ? 'inherit': 'text-white'}>Flooring</h3>
                </div>
                <div className='selection-img-container'>
                    {
                        images.flooring.map((obj) =>{
                            return (
                                <>
                                    <img 
                                        style={{
                                            transform: `translate(-${selectChanger.floor * 100}%)`,
                                            transition: 'transform 1s ease-in-out',
                                        }}
                                        className='selection-img' 
                                        alt='image' 
                                        src={obj.img}
                                    />
                                </>
                            )
                        })
                    }
                    <div className='img-selector'>
                        <div onClick={() => HandleSelect('floor',0)} className={selectChanger.floor === 0? 'selector selected':'selector'}></div>
                        <div onClick={() => HandleSelect('floor',1)} className={selectChanger.floor === 1? 'selector selected':'selector'}></div>
                        <div onClick={() => HandleSelect('floor',2)} className={selectChanger.floor === 2? 'selector selected':'selector'}></div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Index

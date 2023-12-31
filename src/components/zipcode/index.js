import React, { useState } from 'react';

const Index = ({ handleChange }) => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('')

  const handleZip = (event) => {
    const value = event.target.value;
    setZipCode(value);
  };

  const handleNext = () => {
    if (zipCode.length == 5 && /^\d+$/.test(zipCode)) {
        setError('')
        handleChange('zip', zipCode)
    } else {
      setError('Invalid Zip Code')
    }
  }

  return (
    <>
      <div className='pt-[10%] w-full  flex justify-center flex-col'>
        <h1 className='text-[30px] text-center lg:text-[65px] font-semibold mb-[40px]'>
            Enter area zipcode:
        </h1>
        <div className='h-full grid grid-flow-row lg:grid-flow-col justify-items-center justify-center  gap-2 w-full'>
            <input
            className='text-black border-2 border-black h-full p-2 w-full'
            type="text"
            value={zipCode}
            onChange={handleZip}
            id="zipCode"
            name="zipCode"
            placeholder="Please enter  ZIP code"
            maxLength="5" // Limit the input to 5 characters
            />
            <button
            onClick={handleNext}
            className='bg-[#3aba84] outline-none  w-fit border-[#3aba84] hover:bg-transparent hover:text-[#3aba84] border-2 p-2 px-5 rounded-md text-white'
            >
            NEXT
            </button>
        </div>
        <h1 className='text-center text-xl p-3 text-red-700' >{error}</h1>
      </div>

    </>
  );
};

export default Index;


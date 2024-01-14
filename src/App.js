import React, { useState } from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import ZipSection from './components/zipcode';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';


function App() {
  const [selected, setSelected] = useState({
    zip: false,
    model: false,
    building: false,
    type: false,
    formState: false,
    feedback: false,
  });

  
  const [progress, setProgress] = useState('30');

  const handleChange = (sec, val) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [sec]: val,
    }));
    setProgress(`${Number(progress) + 10}`);
  };

  const reset = () => {
    setSelected({
      zip: false,
      model: false,
      building: false,
      type: false,
      formState: false,
      feedback: false,
    });
    setProgress(30);
  };

  console.log(progress);
  return (
    <div className="px-[5%] md:px-[10%] h-full py-[20vh] lg:py-[10vh]  flex justify-center items-center">
      {!selected.zip ? (
        <>
          <ZipSection handleChange={handleChange} />
          <div
            className={`fixed top-0 left-0 w-[15%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
        </>
      ) : !selected.model ? (
        <>
          <FirstSection handleChange={handleChange} />
          <div
            className={`fixed top-0 left-0 w-[30%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
        </>
      ) : !selected.building ? (
        <>
          <SecondSection handleChange={handleChange} />
          <div
            className={`fixed top-0 left-0 w-[45%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
        </>
      ) : !selected.type ? (
        <>
          <ThirdSection handleChange={handleChange} model={selected.model} />
          <div
            className={`fixed top-0 left-0 w-[60%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
        </>
      ) : !selected.formState ? (
        <>
          <div
            className={`fixed top-0 left-0 w-[75%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
          <FourthSection
            handleChange={handleChange}
            modelValue={
              selected.model === 'Bathroom' ? 0 : selected.model === 'Flooring' ? 1 : 2
            }
            Reset={reset}
            type={selected.model}
          />
        </>
      ) : !selected.feedback ? (
        <>
          <div
            className={`fixed top-0 left-0 w-[90%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
          <FifthSection handleChange={handleChange} info={selected} />
        </>
        
      ) : (
        <>
          <div
            className={`fixed top-0 left-0 w-[100%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
          ></div>
          <SixthSection handleChange={handleChange} info={selected} />
        </>
        
      )
      
      }
  
      {/* Add the progress bar */}
    </div>
  );
  
}

export default App;


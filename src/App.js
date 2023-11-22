import React, { useState } from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import ZipSection from './components/zipcode';
import FifthSection from './components/FifthSection';

function App() {
  const [selected, setSelected] = useState({
    zip: false,
    model: false,
    building: false,
    type: false,
    formState: false,
  });

  const [progress, setProgress] = useState('25');

  const handleChange = (sec, val) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [sec]: val,
    }));
    setProgress(`${Number(progress) + 15}`);
  };

  const reset = () => {
    setSelected({
      zip: false,
      model: false,
      building: false,
      type: false,
      formState: false,
    });
    setProgress(25);
  };

  console.log(progress);

  return (
    <div className="px-[5%] md:px-[10%] h-full py-[20vh] lg:py-[10vh]  flex justify-center items-center">
      {!selected.zip ? (
        <ZipSection handleChange={handleChange} />
      ) : !selected.model ? (
        <FirstSection handleChange={handleChange} />
      ) : !selected.building ? (
        <SecondSection handleChange={handleChange} />
      ) : !selected.type ? (
        <ThirdSection handleChange={handleChange} model={selected.model} />
      ) : !selected.formState ? (
        <FourthSection
          handleChange={handleChange}
          modelValue={
            selected.model === 'Bathroom' ? 0 : selected.model === 'Flooring' ? 1 : 2
          }
          Reset={reset}
          type={selected.model}
        />
      ) : (
        <FifthSection info={selected} />
      )}

      {/* Add the progress bar */}
      <div
        className={`absolute top-0 left-0 ${progress === 20} w-[${progress}%] border-[#3aba84] border-[20px] transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
}

export default App;

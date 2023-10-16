import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import ZipSection from './components/zipcode'
import FifthSection from './components/FifthSection'
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState({
    zip:false,
    model:false,
    building:false,
    type:false,
    formState: false
  })
  const HandleChange = (sec, val) => {
    setSelected({
      ...selected,
      [sec]: val
    });
  };

  const Reset = () => {
    setSelected({
      zip:false,
      model:false,
      building:false,
      type:false,
      formState: false
    })
  }

  
  
  return (
      <div className="px-[5%] md:px-[10%] h-full py-[20vh] lg:py-[10vh]  flex justify-center items-center">
      {
        !selected.zip ? (
          <ZipSection handleChange={HandleChange} />
        ) : !selected.model ? (
          <FirstSection handleChange={HandleChange} />
        ) : !selected.building ? (
          <SecondSection handleChange={HandleChange} />
        ) : !selected.type ? (
          <ThirdSection handleChange={HandleChange} model={selected.model} />
        ) : !selected.formState ? (
          <FourthSection
            handleChange={HandleChange}
            modelValue={
              selected.model === 'Bathroom'
                ? 0
                : selected.model === 'Flooring'
                ? 1
                : 2
            }
            Reset={Reset}
            type={selected.model}
          />
        ) : (
          <FifthSection info={selected} />
        )
      }

      </div>

  );
}

export default App;


import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import ZipSection from './components/zipcode'
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState({
    zip:false,
    model:false,
    building:false,
    type:false,
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
    })
  }
  
  return (
      <div className="px-[5%] md:px-[10%] h-full py-[5%]  flex justify-center items-center">
        {
          !selected.zip?
          (
            <ZipSection handleChange={HandleChange} />
          )
          :!selected.model ? (
            <FirstSection handleChange={HandleChange} />
          ) : !selected.building ? (
            <SecondSection handleChange={HandleChange} />
          ) : !selected.type ? (
            <ThirdSection handleChange={HandleChange} model={selected.model} />
          ) : (
            <FourthSection handleChange={HandleChange} modelValue={selected.model === 'Bathroom'? 0 : selected.model === 'Flooring' ? 1 :2} Reset={Reset} />
          )
        }

      </div>

  );
}

export default App;


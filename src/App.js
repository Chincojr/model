import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState({
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
  
  return (
      <div className="px-[5%] md:px-[10%] h-full py-[5%] lg:py-[10%] flex justify-center items-center">
        {
          !selected.model ? (
            <FirstSection handleChange={HandleChange} />
          ) : !selected.building ? (
            <SecondSection handleChange={HandleChange} />
          ) : !selected.type ? (
            <ThirdSection handleChange={HandleChange} model={selected.model} />
          ) : (
            <FourthSection handleChange={HandleChange} modelValue={selected.model === 'Bathroom'? 0 : selected.model === 'Flooring' ? 1 :2} />
          )
        }

      </div>

  );
}

export default App;


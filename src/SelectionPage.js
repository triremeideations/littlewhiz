import './styles2.css';
import { useState } from 'react';
import { quibblePos, categoryList } from './populateData';
import { flight_mechanics, presentStart } from './utils';
import SelectionIntro from './SelectionIntro';
import SelectionOutro from './SelectionOutro';

function SelectionPage() {

  const [qPos, setQPos] = useState(1);
  const [choices, setChoices] = useState(categoryList);
  
  const handleQuibble=(qbr)=>{
    let theQuib = document.getElementsByClassName('quibbleMove')[0];
    theQuib.style.left = qbr.left;
    flight_mechanics(qPos, qbr, theQuib);
  }

  const handleSingleSelect=(s)=>{
    let pick = quibblePos.filter((f)=> f.topic === s);
    pick = pick[0];
    setQPos(pick.quibbleAt);
    handleQuibble(pick);
  }

  const handleMultiSelect=(x)=>{
    console.log(`choices: ${x}`);
    const chooseCategs = choices.map(
      (y)=> y.id === x
      ? {...y, active: !y.active}
      : y
    );
    setChoices(chooseCategs);
  }

  return (
    <div className='frame'>

      <SelectionOutro
        choices={choices}
        handleMultiSelect={handleMultiSelect}
      />

      <SelectionIntro
        categoryList={categoryList}
        handleSingleSelect={handleSingleSelect}
        presentStart={presentStart}
      />

    </div>
  );
}

export default SelectionPage;

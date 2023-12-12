import './styles/selectionPage.css';
import { useState } from 'react';
import { quibblePos, categoryList } from './populateData';
import { flight_mechanics, presentStart, proceed} from './utils';
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

  const handleSingleSelect=(s, e)=>{
    let pick = quibblePos.filter((f)=> f.topic === s);
    pick = pick[0];
    setQPos(pick.quibbleAt);
    handleQuibble(pick);
    e.target.parentNode.classList.toggle('knob_shrink');
  }

  const handleMultiSelect=(x, e)=>{
    console.log(`choices: ${x}`);
    const chooseCategs = choices.map(
      (y)=> y.id === x
      ? {...y, active: !y.active}
      : y
    );
    setChoices(chooseCategs);
    e.target.parentNode.classList.add('frills');
    setTimeout(() => {
      e.target.parentNode.classList.add('show_tick');
    }, 1500);
  }

  return (
    <div className='frame'>

      <SelectionOutro
        choices={choices}
        handleMultiSelect={handleMultiSelect}
        proceed={proceed}
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

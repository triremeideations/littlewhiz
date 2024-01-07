import '../styles/selectionPage.css';
import { useEffect, useState } from 'react';

import { quibblePos, categoryList } from '../data/populateData';
import { flight_mechanics, presentStart, proceed} from '../utils/utils';
import SelectionIntro from '../subcomponent/SelectionIntro';
import SelectionOutro from '../subcomponent/SelectionOutro';
import PrepDialogBox from '../subcomponent/PrepDialog';
import ResolutionPrompt from '../subcomponent/Resolution';
import shouldRender from '../utils/dashings';


function SelectionPage() {
  useEffect(()=>{
    shouldRender('#categMain','#logPrompt');
  })

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
    <div>
      <div className='login_wall' id='logPrompt'>
          <div>
              <h1>You must be logged in to access this page!</h1>
          </div>
      </div>

      <div className='frame' id='categMain'>
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

        <PrepDialogBox/>
        <ResolutionPrompt/>
      </div>
    </div>
  );
}

export default SelectionPage;

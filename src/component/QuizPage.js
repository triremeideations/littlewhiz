import { useEffect, useState } from 'react';
import { learnerLoginStatus } from '../engine/learner-worker';
import shouldRender from '../utils/dashings';
import GameVisual from '../subcomponent/games/GameVisual';
import GameInteraction from '../subcomponent/games/GameInteraction';

const BeginQuizzes = () => {
  learnerLoginStatus();
    
  // useEffect(()=>{
  //     shouldRender('#dash','#dish');
  // },[]);

  const [activeQuest, setActiveQuest] = useState(null);
  
  const questSelect =(questId)=> {
    setActiveQuest(questId);
  }


  return (
    <div>
        <div id='dash'>
          <GameVisual/>
          <GameInteraction
            activeQuest = {activeQuest}
            questSelect = {questSelect}
          />
        </div>
        
        <div id='dish'>
          <div>
            <h1>You must be logged in to access this page!</h1>
          </div>
        </div>
    </div>
  )
}

export default BeginQuizzes;
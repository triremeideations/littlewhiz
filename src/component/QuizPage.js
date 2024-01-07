import { useEffect } from 'react';
import { learnerLoginStatus } from '../engine/learner-worker';
import shouldRender from '../utils/dashings';

const BeginQuizzes = () => {
  learnerLoginStatus();
    
    useEffect(()=>{
        shouldRender('#dash','#dish');
    },[]);
    
return (
  <div>
      <div id='dash'>
        This is a main page.
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
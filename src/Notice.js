/* eslint-disable react-hooks/exhaustive-deps */
import './styles/notice.css';
import { useEffect } from 'react';
import awareness,
      { checkAwareness, keepSquinting,
        checkCreate, endProcess } from './utils/acceptNotice.js';
import { tempUser } from './engine/learner-worker.js';

const PHA =()=> {

  const tempLearner = localStorage.getItem('tempName');
  const tempMail = localStorage.getItem('tempMail');

  useEffect(()=>{
    checkAwareness();
    checkCreate();
    tempUser(tempMail, tempLearner);
  },[])


  return (
    <div>
      <div className='notice_resol'>
        <h2>
          User Experience
        </h2>
        <br/>
        <p>
            Hey, Champ! <br/><br/>
            Our website is super cool on a computer with a bigger screen,
            like a laptop or a tablet!
            <br/><br/>
            If you're on a phone, don't worry;
            you can still play around, but you might miss out on some of the
            cooler stuff.
        </p>
        <br></br>
        <button onClick={ keepSquinting }>
          Continue Anyway
        </button>
      </div>

      <div className='notice_login'>
        <h2>
          New Learner Account
        </h2>
        <br/>
        <p>
            Hi <span id='newbie'></span>!
            <br/><br/>
            Welcome to theLearner.
        </p>
        <br/><br/>
            <button onClick={ endProcess }>
              Go to Dashboard
            </button>
      </div>

      <div className='notice'>
          <h2>
              CAUTION
          </h2>
          <br/>
          <p>
              Our platform contains animated content and vibrant visuals
              that include flashing images and patterns.
              Be advised that this could affect children prone to photosensitive seizures.<br/><br/>
              If your child has a history of such seizures, consult a healthcare 
              professional before proceeding. Please stop use immediately if any
              adverse effects are observed.     
          </p>
          <br/>
          <button onClick={ awareness }>
              I understand. Continue.
          </button>
      </div>
    </div>
  )
}

export default PHA;
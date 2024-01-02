import './styles/notice.css';
import awareness, { checkAwareness } from './utils/acceptNotice.js';
import { useEffect } from 'react';

const PHA =()=> {
  useEffect(()=>{
    checkAwareness();
  })

  return (
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
  )
}

export default PHA;
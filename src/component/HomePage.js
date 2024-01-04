import { useEffect } from 'react';

import '../styles/hometemp.css'
import '../styles/footer.css'
import '../styles/quibbleModes.css'
import homework from '../utils/home';
import FooterSub from '../subcomponent/FooterSub';

function HomePage(){

    useEffect(()=>{
        homework();
    },[]);

    return(
        <div className='gradic'>
            <button  onClick={
                ()=>{
                localStorage.clear();
                window.location.reload();
            }
                }>
                RESET... TEST!
            </button>
            <div className="master_frame">
                <div className="cs_item cs_0"></div>
                <div className="cs_item cs_1"></div>
                <div className="cs_item cs_2">
                    <p className='smarty pants'>
                        LittleWhiz Learner
                    </p>
                </div>
                <div className='cs_item cs_x'>
                    <p className='sub_smarty pants'>
                        An e-learning platform designed for children, ages 5-7
                    </p>
                </div>
                <div className="cs_item cs_3"></div>
                <div
                    className= 
                    "container scroll_1 scr_active"
                ></div>
            </div>

            <div className="content">
                <div className='sideImg_0'></div>
                <div className='sideImg_1'></div>

                <div className="ctn_box ctn_0">
                    <p>
                        Welcome to LittleWhiz Learner, where every flutter of curiosity takes flight<i>!</i>
                        <br></br>
                        <br></br>
                        Meet Quibble, the Mechanical Owl... Your wise companion on this journey of discovery.</p>
                </div>
                <div className="ctn_box ctn_1">
                    <p>
                        Kids, immerse yourselves in interactive lessons that make learning a magical experience.
                        <br></br>
                        <br></br>
                        Watch your skills soar with each engaging activity.
                        From numbers to words and pictures, LittleWhiz Learner offers a world of wonder.
                    </p>
                </div>
                <div className="ctn_box ctn_2">
                    <p>
                        Unlock the joy of learning. Here at theLearner, we believe that every tiny step is a leap toward a greater future.
                        <br></br>
                        
                    </p>
                </div>
            </div>
            
            <div className="extra">
                <div id='extra1'>
                    And you know the best part?
                    <br/> 
                    Signing Up is FREE!!!
                    <br/>
                    So what are you waiting for?!
                    <br/>
                    Join us Now!
                </div>
                <div id='extra2'>
                    <a href='/new-learner'>
                        <button> Sign UP! </button>
                    </a>
                    <a href='/login'>
                        <button> Sign IN! </button>
                    </a>
                    <a href='/new-learner'>
                        <button> Sign in with Google... </button>
                    </a>
                </div>
            </div>
            <footer>
                <FooterSub />
            </footer>
        </div>
    )
}

export default HomePage;
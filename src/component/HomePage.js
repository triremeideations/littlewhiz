import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/hometemp.css'
import '../styles/quibbleModes.css'
import homework from '../utils/home';

function HomePage(){

    useEffect(()=>{
        homework();
    },[]);

    const navigate = useNavigate();
    const goToCategory =()=>{
        sessionStorage.setItem('lock','away');
        navigate('/category');        
    };

    return(
        <div className='gradic'>
            <div className='sideImg'>What is going on?</div>
            <div className="master_frame">
                <div className="cs_item cs_0"></div>
                <div className="cs_item cs_1"></div>
                <div className="cs_item cs_2">
                    <p className='smarty pants'>
                        LittleWhiz Learners
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
                <div className="ctn_box ctn_0">
                    <p>
                        Welcome to LittleWhiz Learners, where every flutter of curiosity takes flight<i>!</i>
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
                        From numbers to words and pictures, LittleWhiz learners offers a world of wonder.
                    </p>
                </div>
                <div className="ctn_box ctn_2">
                    <p>
                        Unlock the joy of learning. Here at theLearner, we believe that every tiny step is a leap toward a greater future.
                        <br></br>
                        
                    </p>
                </div>
            </div>
            
            <div
                className="extra"
                onClick={goToCategory}
            >
                <p>
                    And you know the best part?
                    <br></br> 
                    It's totally FREE!!!
                    <br></br>
                    So what are you waiting for?!
                    <br></br>
                    Click Here To Join IN Now!
                </p>
            </div>
        </div>
    )
}

export default HomePage;
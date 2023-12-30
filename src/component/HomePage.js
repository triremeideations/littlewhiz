import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
            <div
                style={
                    {
                        backgroundColor:'black',
                        color: 'white',
                    }}>
                <br></br>
                <br></br>
                <Link to='/privacy-policy'>privacy policy</Link>
                <br></br>
                <br></br>
                <p onClick={goToCategory}>Categories</p>
            </div>
        </div>
    )
}

export default HomePage;
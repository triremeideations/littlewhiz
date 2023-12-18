import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles/hometemp.css'
import './styles/quibbleModes.css'
import homework from './utils/home';

function HomePage(){

    useEffect(()=>{
        homework();
    }, []);

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
                    <p className='smarty'>LittleWhiz Learners</p>
                </div>
                <div className='cs_item cs_x'>
                    <p className='sub_smarty'>
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
                <div className="ctn_box ctn_0"></div>
                <div className="ctn_box ctn_1"></div>
                <div className="ctn_box ctn_2"></div>
            </div>
            
            <div
                className="extra"
                onClick={goToCategory}
            >
                <p>Click to see more</p>
            </div>
        </div>
    )
}

export default HomePage;
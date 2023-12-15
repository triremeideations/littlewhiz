import React, { useEffect } from 'react';
import './styles/homepage.css'
import homework from './utils/home';

function HomePage(){
    useEffect(()=>{
        homework();
    }, []);

    return(
        <div className='wait'>
            <div className="master_frame">
                <div className="cs_item cs_0"></div>
                <div className="cs_item cs_1"></div>
                <div className="cs_item cs_2">
                    <p>LittleWhiz Learners</p>
                </div>
                <div className="cs_item cs_3"></div>
                <div className="container scroll_1"></div>
            </div>
            <div className="content">
                <div className="ctn_box ctn_0"></div>
                <div className="ctn_box ctn_1"></div>
                <div className="ctn_box ctn_2"></div>
            </div>
            <div className="extra" onClick={
                ()=>{
                    document.getElementsByClassName('wait')[0].style.display='none';
                }
            }></div>
        </div>
    )
}

export default HomePage;
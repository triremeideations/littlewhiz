import React, { useEffect } from 'react';
import { learnerLoginStatus, refreshDashboard } from '../engine/learner-worker';
import shouldRender from '../utils/dashings';
import '../styles/dashings.css';
import { content } from '../utils/dashings';

const DashBoard = () => {
    learnerLoginStatus();
    
    useEffect(()=>{
        refreshDashboard();
        shouldRender('#dash','#dish');
        content();
    },[]);

    return (
        <div id='chip'>
            <div className='panel' id='dash'>
                <div>
                    <h1>
                        <span id='nametag'/>'s <br/>
                        Dashboard.
                    </h1>
                </div>
                <div>
                    <a href='/category'>
                    <button>
                        Go to Category Select...
                    </button>
                    </a>
                </div>
                <div>
                    
                </div>
            </div>

            <div className='panel' id='dish'>
                <div>
                    <h1>You must be logged in to access this page!</h1>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    learnerLoginStatus,
    logoutLearner
    } from '../engine/learner-worker';

import shouldRender from '../utils/dashings';
import '../styles/dashings.css';
import { content } from '../utils/dashings';

const DashBoard = () => {
    learnerLoginStatus();
    
    useEffect(()=>{
        shouldRender('#dash','#dish');
        content();
    },[]);

    return (
        <div id='chip'>
            <div className='panel' id='dash'>
                <div className='subPanel'>
                    <div>
                        <h1>
                            <span id='nametag'/>'s <br/>
                            Dashboard.
                        </h1>
                    </div>
                    <div>
                        <button onClick={ logoutLearner }>
                            Sign Out
                        </button>
                        &nbsp;
                        <Link to={"/delete"}>
                            <button>
                                Delete Account
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='subPanel' id='to_category'>
                    <Link to={'/category'}>
                    <button>
                        Go to Category Select...
                    </button>
                    </Link>
                </div>

                <div className='subPanel' id="stats">
                    <br/>
                    <h2>Your Stats</h2>
                    <h5>Stats ---A</h5>
                    <h5>Stats ---B</h5>
                    <h5>Stats ---C</h5>
                    <br/>
                    <h5>Some more stats -----</h5>
                </div>
            </div>

            <div className='panel' id='dish'>
                <div className='login_warn'>
                    <h1>You must be logged in to access this page!</h1>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
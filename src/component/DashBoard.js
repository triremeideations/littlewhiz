import React from 'react';
import { learnerLoginStatus, infoLearner } from '../engine/learner-worker';

const DashBoard = () => {
    learnerLoginStatus();
    infoLearner();

    return (
        <div>DashBoard</div>
    )
}

export default DashBoard
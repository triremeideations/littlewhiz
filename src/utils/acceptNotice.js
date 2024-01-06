import '../styles/notice.css';
import {
    // learnerLoginStatus,
    updateDisplayName } from '../engine/learner-worker';

export function checkAwareness(){
    try {
        const notice = document.getElementsByClassName('notice')[0];
        const gradic = document.getElementsByClassName('gradic')[0];
    
        if (localStorage.getItem('noticeAware')==='set'){
            notice.classList.add('nullify');
            gradic.classList.add('maximise');
        }
    } catch{
        // console.log('navigated off mainpage. targeting a subpage');
    }
}

export function checkCreate(){
    const n_login = document.getElementsByClassName('notice_login')[0];
    const gradic = document.getElementsByClassName('gradic')[0];

    if (localStorage.getItem('createNew')){
        console.log('pending process to be completed');
        gradic.classList.remove('maximise'); //courtesy of awareness check

        const currentLearner = localStorage.getItem('regName');
        const newbie = document.querySelector('#newbie');
        newbie.innerText = currentLearner;
    }
    else {
        n_login.classList.add('nullify');
    }
}

export function keepSquinting(){
    const n_resol = document.getElementsByClassName('notice_resol')[0];
    n_resol.classList.add('accepted');
}

//end process if the new user exits their current
//window in any way, and/or reload before completing signup...
//c.f. new learner function in learner-worker script

export function endProcess(){
    const notice_login = document.getElementsByClassName('notice_login')[0];
    const gradic = document.getElementsByClassName('gradic')[0];

    const currentLearner = localStorage.getItem('regName');
    const createProcess = localStorage.getItem('createNew');

    if (createProcess === 'pending') {
        try{
            gradic.classList.remove('maximise');
        } catch {}
        //this takes {awareness} function into account

        if (typeof(currentLearner)==='string'){
            updateDisplayName(currentLearner);
            // learnerLoginStatus();
            // localStorage.setItem('createNew','completed');
            localStorage.removeItem('createNew');
            try{
                gradic.classList.add('maximise');
            } catch {}
            notice_login.classList.add('accepted');
            window.location.assign('/dashboard');
        }
    }
}

/* note to future self... */
/**************************/
// bear with me... all of the hijinks above is necessary because
// firebase for some certain reason does not allow update
// of user display name within the same instance of
// creating a new user account.
// Also, to be taken into consideration is the distict possibilty
// that the user can and probably will navigate away from
// the learner creation page and go straight to their email,
// once the verification link drops in before going to
// dashboard, said button which was set to fire the name-update 
// function once clicked.
// c.f. userCreationDialog(success) in the learner-worker script.
// 
// And of course reconciling the user public health notice,
// and the user experience notice interactions with all of their
// own logicks intertwined.
/******** end note ********/

export default function awareness(){
    try{
        localStorage.setItem('noticeAware','set');
        
        const notice = document.getElementsByClassName('notice')[0];
        const gradic = document.getElementsByClassName('gradic')[0];
        notice.classList.add('accepted');
        gradic.classList.add('maximise');
    } catch{
        // console.log('navigated off mainpage. targeting a subpage');
    }
}


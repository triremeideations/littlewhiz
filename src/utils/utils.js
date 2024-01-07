import '../styles/intro.css'

export function flight_mechanics(qPos, qbr, theQuib){
    
    /*  glide.css imported at selectionIntro.js
    for push and pull */
    
    if(qbr.quibbleAt > qPos){
        theQuib.classList.add('push');
        theQuib.classList.remove('pull');
    }
    else{
        theQuib.classList.remove('push');
        theQuib.classList.add('pull');
    }
    // console.log(`flying in from ${qPos}`);
    // console.log(`flying out to ${qbr.quibbleAt}`);
}

export function presentStart(){
    let targ = document.getElementsByClassName('cbxIntro')[0];
    let focus = document.getElementsByClassName('cbxOutro')[0];
    targ.classList.add('fadeAway');
    focus.classList.add('boldenIn');
}

export function proceed(){
    /* C.f. selectionOutro subcomponent */
    console.log('processing');
    let qmenu = JSON.parse(sessionStorage.getItem('qmenu'));
    let diagx = document.querySelectorAll('.prepDiag')[0];
    let diagBtn = document.querySelectorAll('.initiateQuiz')[0];
    // console.log(qmenu.length);
    let question_count = 2;

    try {
        if(qmenu.length===0) alert(`You've got to choose a test!`);
        else {
            question_count = question_count * qmenu.length;
            diagx.innerHTML=`
                Awesome! <br><br>
                You are going to answer <br>
                ${question_count} questions in total!
                <br><br>
                Happy Qwhizzing!
                `;
            diagx.classList.add('visPrep');
            setTimeout(() => {
                diagBtn.classList.add('btnPrep');
            }, 700);
        }        
    } catch (e) {
        alert('Make a selection, champ!');
        console.log(e);
    }
}

import './styles/intro.css'

export function flight_mechanics(qPos, qbr, theQuib){
    console.log(`flying in from ${qPos}`);
    console.log(`flying out to ${qbr.quibbleAt}`);
    if(qbr.quibbleAt > qPos){
        theQuib.classList.add('push');
        theQuib.classList.remove('pull');
    }
    else{
        theQuib.classList.remove('push');
        theQuib.classList.add('pull');
    }
}

// function knob_mechanics(){
    
// }

export function presentStart(){
    let targ = document.getElementsByClassName('cbxIntro')[0];
    let focus = document.getElementsByClassName('cbxOutro')[0];
    targ.classList.add('fadeAway');
    focus.classList.add('boldenIn');
}

export function proceed(){
    console.log('processing');
}
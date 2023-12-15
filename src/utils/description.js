import { prompts } from "../data/populateData";

export function speaks(e){
    let qSay = document.querySelector('.qSay.describe');
    let qNext = document.querySelector('.qNext.void');
    let current = e.target.parentNode.id.slice(0,-5);
    sessionStorage.clear();

    const notice = prompts.filter((pp)=> pp.id === current );
    qSay.innerHTML = `${notice[0].highlighted}`
    setTimeout(() => {
        qNext.classList.add('diov');
    }, 1000);
}

export function goes(e){
    let qSay = document.querySelector('.qSay.commend');
    let current = e.target.parentNode.id.slice(0,-4);
    const ret = JSON.parse(sessionStorage.getItem('qmenu'));
    let quiz_menu;
    ret !== null ? quiz_menu = ret : quiz_menu = []; 

    const notice = prompts.filter((pp)=> pp.id === current );
    const query = notice[0].selected;
    // console.log(quiz_menu);

    if(e.target.checked===true){
        quiz_menu.push(query);
        sessionStorage.setItem('qmenu', JSON.stringify(quiz_menu));
    }
    else if (e.target.checked===false) {
        if (quiz_menu.includes(query)){
            quiz_menu.splice(
                quiz_menu.indexOf(query),1
            );
            sessionStorage.setItem('qmenu', JSON.stringify(quiz_menu));
        }
    }

    let count;

    switch (quiz_menu.length) {
        case 0:
            count = 'No tests selected'
            break;
        case 1:
            count = 'Not bad...'
            break;
        case 2:
            count = 'Alright!'
            break;
        case 3:
            count = 'Excellent!'
            break;
        case 4:
            count = 'Outstanding!'
            break;
        default:
            break;
    }
    
    qSay.innerHTML = `
        Tests to take: <br>
        ${quiz_menu.join(', ')}
        <br>
        <p style='
            color: goldenrod;
            position: relative;
            left: 60%;'
        >
            ${count}
        </p>
    `;
}
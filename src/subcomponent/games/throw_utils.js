export default function alea(){
    document.querySelector('.pitch').addEventListener('click', function(){
        document.querySelector('.cube').classList.remove('spin');
        document.querySelector('.cubeTwo').classList.remove('twill');
        document.querySelector('.cube').classList.add('throw');
        document.querySelector('.cubeTwo').classList.add('throwTwo');
        this.style.display='none';

        setTimeout(
            () => {document.querySelector('.res').style.display='block'}
        ,3000);

        camp();
    });
    //resetSprig
    document.querySelector('.res').addEventListener('click',function(){
        window.location.reload()});
}

function camp(){
    const dieFace = Math.floor(Math.random()*6)+1;
    const dieImage = "/img/game/die"+ dieFace +".png";
    const dieFace2 = Math.floor(Math.random()*6)+1;
    const dieImage2 = "/img/game/die"+ dieFace2 +".png";
    const dye = document.querySelectorAll('.six')[0];
    const dyeTwo = document.querySelectorAll('.six')[1];
    
    function engageCamp(){
        dye.setAttribute('src', dieImage)
    };
    function engage2Camp(){
        dyeTwo.setAttribute('src', dieImage2)
    };

    engageCamp();
    engage2Camp();
    campConditions();
    campConditionsB();

    // setTimeout(engageCamp,500);
    // setTimeout(engage2Camp,500);
    // setTimeout(campConditions,1000);
    // setTimeout(campConditionsB,1000);
    
    function campConditionsB(){
    const oneB = document.querySelectorAll('.one')[1];
    const twoB = document.querySelectorAll('.two')[1];
    const threeB = document.querySelectorAll('.three')[1];
    const fourB = document.querySelectorAll('.four')[1];
    const fiveB = document.querySelectorAll('.five')[1];

    if(dieFace2===6){
        twoB.setAttribute('src',"/img/game/die4.png");
        threeB.setAttribute('src',"/img/game/die2.png");
        fourB.setAttribute('src',"/img/game/die5.png");
        fiveB.setAttribute('src',"/img/game/die3.png");
        oneB.setAttribute('src',"/img/game/die1.png");
    }
    else if(dieFace2===1){
        twoB.setAttribute('src',"/img/game/die3.png");
        threeB.setAttribute('src',"/img/game/die5.png");
        fourB.setAttribute('src',"/img/game/die2.png");
        fiveB.setAttribute('src',"/img/game/die4.png");
        oneB.setAttribute('src',"/img/game/die6.png");
    }
    else if(dieFace2===2||dieFace2===5){
        twoB.setAttribute('src',"/img/game/die6.png");
        fiveB.setAttribute('src',"/img/game/die1.png");
        oneB.setAttribute('src',"/img/game/die5.png");
        
        fourB.setAttribute('src',"/img/game/die4.png");
        threeB.setAttribute('src',"/img/game/die3.png");
    }
    else if(dieFace2===3||dieFace2===4){    
        threeB.setAttribute('src',"/img/game/die6.png");
        fourB.setAttribute('src',"/img/game/die1.png");
        oneB.setAttribute('src',"/img/game/die4.png");
        
        twoB.setAttribute('src',"/img/game/die2.png");
        fiveB.setAttribute('src',"/img/game/die5.png");
    }
    
    else {
        console.log('value < 1 || > 6');
    }
    }
    
    function campConditions(){
        const one = document.querySelectorAll('.one')[0];
        const two = document.querySelectorAll('.two')[0];
        const three = document.querySelectorAll('.three')[0];
        const four = document.querySelectorAll('.four')[0];
        const five = document.querySelectorAll('.five')[0];
        // const six = document.querySelectorAll('.six');
        // const six = document.querySelectorAll('.six');
    
    if(dieFace===6){
        two.setAttribute('src',"/img/game/die4.png");
        three.setAttribute('src',"/img/game/die2.png");
        four.setAttribute('src',"/img/game/die5.png");
        five.setAttribute('src',"/img/game/die3.png");
        one.setAttribute('src',"/img/game/die1.png");
    }
    
    else if(dieFace===1){
        two.setAttribute('src',"/img/game/die3.png");
        three.setAttribute('src',"/img/game/die5.png");
        four.setAttribute('src',"/img/game/die2.png");
        five.setAttribute('src',"/img/game/die4.png");
        one.setAttribute('src',"/img/game/die6.png");
    }
    
    else if(dieFace===2||dieFace===5){
        two.setAttribute('src',"/img/game/die6.png");
        five.setAttribute('src',"/img/game/die1.png");
        one.setAttribute('src',"/img/game/die5.png");
        
        four.setAttribute('src',"/img/game/die4.png");
        three.setAttribute('src',"/img/game/die3.png");
    }
    
    
    else if(dieFace===3||dieFace===4){
        three.setAttribute('src',"/img/game/die6.png");
        four.setAttribute('src',"/img/game/die1.png");
        one.setAttribute('src',"/img/game/die4.png");
        
        two.setAttribute('src',"/img/game/die2.png");
        five.setAttribute('src',"/img/game/die5.png");
    }
    
    else {
        console.log('value < 1 || > 6');
    }
    }

    function results(){
        sessionStorage.setItem('dieNumberOne', dieFace);
        sessionStorage.setItem('dieNumberTwo', dieFace2);

        if(dieFace>dieFace2){
            document.querySelectorAll('.dive')[0].innerHTML="Winner!";
            document.querySelectorAll('.dive')[1].innerHTML="---";
        }
        else if(dieFace2>dieFace){
            document.querySelectorAll('.dive')[0].innerHTML="---";
            document.querySelectorAll('.dive')[1].innerHTML="Winner!";
        }
        else if(dieFace===dieFace2){
            document.querySelectorAll('.dive')[1].innerHTML='DRAW!'
            document.querySelectorAll('.dive')[0].innerHTML="DRAW!"
        }
    }
    setTimeout(results, 4700);
}
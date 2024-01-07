export default function shouldRender(x,y){
    const status = localStorage.getItem('learnerSignedIn');
    const gbas = document.querySelector(x);
    const gbos = document.querySelector(y);
    if (status !== null){
        if (status === 'yes'){
            gbos.style.display = 'none';
        } else if (status === 'no'){
            gbas.style.display = 'none';
        }
    } else {
        gbas.style.display = 'none';
    }
    
}

export const content=()=>{
    const nameTag = document.querySelector('#nametag');
    nameTag.innerText =
        localStorage.getItem('currentProfileName');
    // console.log(localStorage.getItem('learnerSignedIn'));
}
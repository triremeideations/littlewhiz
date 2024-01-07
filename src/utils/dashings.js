export default function shouldRender(){
    const status = localStorage.getItem('learnerSignedIn');
    const gbas = document.querySelector('#dash');
    const gbos = document.querySelector('#dish');
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
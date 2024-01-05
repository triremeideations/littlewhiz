import '../styles/notice.css';

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


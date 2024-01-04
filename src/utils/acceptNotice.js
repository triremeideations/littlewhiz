import '../styles/notice.css';

export function checkAwareness(){
    const notice = document.getElementsByClassName('notice')[0];
    const gradic = document.getElementsByClassName('gradic')[0];

    if (localStorage.getItem('noticeAware')==='set'){
        notice.classList.add('nullify');
        gradic.classList.add('maximise');
    }
}

export default function awareness(){
    localStorage.setItem('noticeAware','set');

    const notice = document.getElementsByClassName('notice')[0];
    const gradic = document.getElementsByClassName('gradic')[0];
    notice.classList.add('accepted');
    gradic.classList.add('maximise');
}


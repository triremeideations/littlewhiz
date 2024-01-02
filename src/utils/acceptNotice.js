import '../styles/notice.css';

export function checkAwareness(){
    const notice = document.getElementsByClassName('notice')[0];

    if (localStorage.getItem('noticeAware')==='set'){
        notice.classList.add('nullify');
    }
}

export default function awareness(){
    localStorage.setItem('noticeAware','set');

    const notice = document.getElementsByClassName('notice')[0];
    notice.classList.add('accepted');
}


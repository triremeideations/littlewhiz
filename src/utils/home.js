/* eslint-disable dot-location */
import tribb from "./tribb";

export default function homework(){
        sessionStorage.setItem('lock','home');
        const quibble = document.getElementsByClassName('scroll_1')[0];
        const extra = document.getElementsByClassName('extra')[0];
        const lock = sessionStorage.getItem('lock');
        const thisTribb =()=> tribb(quibble, extra);

        lock === 'home' ?
        window.addEventListener("scroll", thisTribb)
        : console.log('far from home');
    };
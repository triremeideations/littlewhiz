export function speaks(e){
    let qSay = document.querySelector('.qSay.describe');
    qSay.style.backgroundColor = 'red';
    qSay.innerHTML = `
        <p>Two shot of hennessy PWNED
    `
    qSay.innerHTML = `
        ${e.target.parentNode.id}
    `
}
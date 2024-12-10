const bar = document.getElementById('bar');
const close= document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click',()= > {
        nav.claasList.add('active');
    })
}
if(close) {
    close.addEventListener('click',()= > {
        nav.claasList.remove('active');
    })
}
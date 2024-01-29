const menu = document.querySelector('.menu');
const menulist =document.querySelector('nav ul');

menu.addEventListener('click', ()=>{
  menulist.classList.toggle('showmenu');
});

const header = document.querySelector('nav');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=200) {
        header.classList.add('navbarDark');    }
    else {
        header.classList.remove('navbarDark');
    }
}

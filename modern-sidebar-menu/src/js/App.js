
let layout = document.querySelector('.layout');

let menuButton = document.querySelector('.link');

let sideBar = document.querySelector('.sidebar-arw');

let closeNav = document.querySelector('.close-nav ');

menuButton.addEventListener('click',()=>{
    layout.classList.toggle('click-layout');
    menuButton.classList.toggle('link-click-active-rotate');
    sideBar.classList.toggle('sidebar-active');
})

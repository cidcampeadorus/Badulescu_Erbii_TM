const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
})



function sendEmail() {
    window.location.href = "mailto:david.bdlsc@eduge.ch?subject=Contact%20ChavaMaths&body=Bonjour,";
}


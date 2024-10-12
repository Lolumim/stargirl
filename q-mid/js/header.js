const navMenu = document.querySelector('nav ul');
const body = document.querySelector('body');
const isActive = () => navMenu.classList.contains('active');


body.addEventListener('click', function(e) {
    console.log('clicked', e.target);
    console.log(e.target.id, isActive());

    if(e.target.classList.contains('burger-menu') && !isActive()) {
        navMenu.classList.toggle('active');
    } else if(isActive()) {
        navMenu.classList.remove('active'); // Close the menu
    }
})


document.addEventListener("DOMContentLoaded", async () => {
    //handle navbar
    const navIcon = document.querySelector('.nav-icon');
    const navCloseIcon = document.querySelector('.nav-close-icon');
    const nav = document.querySelector('nav');

    if (navIcon && navCloseIcon && nav) {
        navIcon.addEventListener('click', () => {
            nav.classList.add('responsive_nav');
            navCloseIcon.style.display = 'block';
            navIcon.style.display = 'none';
        });

        navCloseIcon.addEventListener('click', () => {
            nav.classList.remove('responsive_nav');
            navCloseIcon.style.display = 'none';
            navIcon.style.display = 'block';
        });
    } else {
        console.error('One or more elements are missing from the DOM.');
    }
    //handle home
    document.getElementById("homelink").addEventListener("click", async (event)=>{
        event.preventDefault();
    })
})

/**************************************************************RENDERING METHOD********************************************************************/
function renderHome(element){
    
}
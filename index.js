window.addEventListener('scroll', function () {
    let nav = document.getElementsByClassName("navMain");
    console.log(nav);
    if (window.pageYOffset >= 1381.090) {
        nav.classList.add('sticky');
    }
});
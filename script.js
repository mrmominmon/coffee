
let backToTopBtn = document.getElementById("backToTopBtn");


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}


backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const menuToggle = document.querySelector('.menu-toggle');
        const siteNav = document.querySelector('.site-nav');

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            siteNav.classList.toggle('active');
        });
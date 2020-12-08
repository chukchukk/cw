(function() {
    var buttonToTop = document.querySelector('.back_to_top');
    buttonToTop.addEventListener('click', toTop);
    window.addEventListener('scroll', moving);
    function moving() {
        var height_client = document.documentElement.clientHeight / 2;
        var scrolledPage = window.pageYOffset;
        if (scrolledPage > height_client ) {
            buttonToTop.classList.add('show');
        }
        if (scrolledPage < height_client ) {
            buttonToTop.classList.remove('show');
        }
    }
    function toTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -15);
            setTimeout(toTop, 0);
        }
    }
})();
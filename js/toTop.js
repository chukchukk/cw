(function() {
    
    var button = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', scrolling);
    button.addEventListener('click', backToTop);

    function scrolling() {
      var scrolled = window.pageYOffset;
      var clHeight = document.documentElement.clientHeight / 2;
  
      if (scrolled > clHeight ) {
        button.classList.add('back_to_top-show');
      }
      if (scrolled < clHeight ) {
        button.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -15);
        setTimeout(backToTop, 0);
      }
    }
  
  })();
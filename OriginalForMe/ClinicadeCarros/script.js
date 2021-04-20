const navbar = document.getElementById('mainNav');

navbar.addEventListener('click', function(e) {
    if (navbar.offset().top > 100) {
        console.log("soy grandisimo");
    }
    else {
        console.log("asd");
    }
});

var navbarCollapse = function () {
    if (document.body.classList.contains("dark")) {
        navbar.removeClass("navbar-scrolled");
    }else {
      if (navbar.offset().top > 100) {
        navbar.addClass("navbar-scrolled");
      } else {
      navbar.removeClass("navbar-scrolled");
      }
    }
}
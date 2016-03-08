(function () {
    var menu, toggler;
    toggler = document.querySelectorAll('.js-menu-toggler')[0];
    menu = document.querySelectorAll('.menu')[0];
    console.log(document.querySelectorAll('.js-menu-toggler'));
    toggler.addEventListener('click', function () {
        return $(menu).toggleClass('active');
    });
}.call(this));

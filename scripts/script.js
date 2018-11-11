let popup_menu = $('#popup');
let burger = $('#burger');

function toggleBurger() {
    popup_menu.hasClass('hidden') ? popup_menu.removeClass('hidden') : popup_menu.addClass('hidden')
}

burger.on('click', toggleBurger);
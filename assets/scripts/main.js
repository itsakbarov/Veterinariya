$(document).ready(function() {
    $('.pet_logo').click(function(event) {
        event.preventDefault();
        $('.overlay').toggleClass('opened');
        $('.modal').toggle(300);
        $('body').css('overflow', 'hidden')
    });
    $('.modal-x').click(function(event) {
        event.preventDefault();
        $('.modal').toggle(300);
        $('body').css('overflow', 'unset')
        $('.overlay').toggleClass('opened');
    });
    $('.overlay').click(function() {
        $('.modal').toggle(300);
        $('body').css('overflow', 'unset')
        $('.overlay').toggleClass('opened');

    })
});
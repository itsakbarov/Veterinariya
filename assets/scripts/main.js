$(document).ready(function() {
    $('.pet_logo').click(function(event) {
        $('.overlay').toggleClass('opened');
        $('.modal').toggle(300);
        event.preventDefault();
        $('body').css('overflow', 'hidden')
    });
    $('.modal-x').click(function(event) {
        $('.modal').toggle(300);
        $('.overlay').toggleClass('opened');
        $('body').css('overflow', 'unset')
        event.preventDefault();
    });
    $('.overlay').click(function() {
        $('body').css('overflow', 'unset')
        $('.modal').toggle(300);
        $('.overlay').toggleClass('opened');

    })
});
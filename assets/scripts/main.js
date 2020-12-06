$(document).ready(function () {
    $('.pet_logo').click(function (event) {
        $('.overlay').toggleClass('opened');
        $('.modal').toggle(300);
        event.preventDefault();
    });
    $('.modal-x').click(function (event) {
        $('.modal').toggle(300);
        $('.overlay').toggleClass('opened');
        event.preventDefault();
    });
    $('.overlay').click(function () {
        $('.modal').toggle(300);
        $('.overlay').toggleClass('opened');

    })
});










// $( "a" ).click(function( event ) {
//   event.preventDefault();
//   $( "<div>" )
//     .append( "default " + event.type + " prevented" )
//     .appendTo( "#log" );
// });
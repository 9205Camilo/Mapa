$(document).ready(function () {
  $('#accordion .nombre_formula').click(function () {
    $('.active2').not(this).removeClass('active2').next().slideUp(300);
    if (!$(this).hasClass('active2')) {
        $(this).addClass('active2').next().slideDown(300);
    } else {
         $(this).removeClass('active2').next().slideUp(300);
    }
  });
});
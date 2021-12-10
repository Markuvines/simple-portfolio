console.log('ffffd');
$(document).ready(function() {
  if ($(window).width()<=420) {
    $('.owner').prop('src', './img/ownerMin.png');
    $('.aboutMe br').remove()
  }
}); 
function modalWindowToggle(){
  $('.menuMobile').toggleClass('active');
  $('.modalLayer').toggle();
  $('body').toggleClass('body_modal')
}
$("li").on('click', function() {
  $(this).siblings('.menuSection_active').removeClass('menuSection_active');
  $(this).addClass("menuSection_active");
  // console.log('ffffd');
});
// if ($(window).width()<=375) {
//   $('.owner').prop('src', './img/ownerMin.png');
//   $('.aboutMe br').remove()
// }
$('.menuButton').on('click', function() {
  // $('.menuMobile').toggleClass('active');
  // $('.modalLayer').toggle();
  // $('body').toggleClass('body_modal')
  modalWindowToggle();
})
$('.closeButton').on('click', function() {
  // $('.menuMobile').toggleClass('active');
  // $('.modalLayer').toggle();
  // $('body').toggleClass('body_modal')
  modalWindowToggle();
})
$('.menuMobile__menu').children().on('click', modalWindowToggle)
// console.log($(window).width());
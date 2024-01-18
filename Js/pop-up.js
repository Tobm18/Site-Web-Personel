//Fond
$('#fondPopUp').click(function(){
  $('#réseaux').removeClass('open');
  $('#web').removeClass('open');
  $('#fondPopUp').removeClass('open');
});
document.querySelector('.fond_pop-up').addEventListener('mouseenter', function() {
  document.body.classList.add('no-scroll');
});
document.querySelector('.fond_pop-up').addEventListener('mouseleave', function() {
  document.body.classList.remove('no-scroll');
});

document.querySelector('.window').addEventListener('mouseenter', function() {
  document.body.classList.add('no-scroll');
});
document.querySelector('.window').addEventListener('mouseleave', function() {
  document.body.classList.remove('no-scroll');
});

//Réseaux
$('#btnRéseaux').click(function(){
  $('#réseaux').addClass('open');
  $('#fondPopUp').addClass('open');
});
$('#réseaux .close').click(function(){
   $('#réseaux').removeClass('open');
    $('#fondPopUp').removeClass('open');
});
  
//Web
$('#btnWeb').click(function(){
  $('#web').addClass('open');
  $('#fondPopUp').addClass('open');
});
$('#web .close').click(function(){
  $('#web').removeClass('open');
  $('#fondPopUp').removeClass('open');
});
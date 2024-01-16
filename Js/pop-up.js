//Fond
$('#fondPopUp').click(function(){
  $('#réseaux').removeClass('open');
  $('#web').removeClass('open');
  $('#fondPopUp').removeClass('open');
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
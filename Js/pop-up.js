//Fond
$("#fondPopUp").click(function () {
  $("#réseaux").removeClass("open");
  $("#web").removeClass("open");
  $("#ecriture").removeClass("open");
  $("#fondPopUp").removeClass("open");
  document.body.classList.remove("no-scroll");
});

//Réseaux
$("#btnRéseaux").click(function () {
  $("#réseaux").addClass("open");
  $("#fondPopUp").addClass("open");
  document.body.classList.add("no-scroll");
});
$("#réseaux .close").click(function () {
  $("#réseaux").removeClass("open");
  $("#fondPopUp").removeClass("open");
  document.body.classList.remove("no-scroll");
});

//Web
$("#btnWeb").click(function () {
  $("#web").addClass("open");
  $("#fondPopUp").addClass("open");
  document.body.classList.add("no-scroll");
});
$("#web .close").click(function () {
  $("#web").removeClass("open");
  $("#fondPopUp").removeClass("open");
  document.body.classList.remove("no-scroll");
});

// Langue
$("#btnEcriture").click(function () {
  $("#ecriture").addClass("open");
  $("#fondPopUp").addClass("open");
  document.body.classList.add("no-scroll");
});
$("#ecriture .close").click(function () {
  $("#ecriture").removeClass("open");
  $("#fondPopUp").removeClass("open");
  document.body.classList.remove("no-scroll");
});

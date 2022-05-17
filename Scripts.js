function card1() {
  document.getElementById("Card1").removeAttribute("hidden");
  document.getElementById("Card2").setAttribute("hidden", "");
  document.getElementById("Card3").setAttribute("hidden", "");
}
function card2() {
  document.getElementById("Card1").setAttribute("hidden", "");
  document.getElementById("Card2").removeAttribute("hidden");
  document.getElementById("Card3").setAttribute("hidden", "");
}
function card3() {
  document.getElementById("Card1").setAttribute("hidden", "");
  document.getElementById("Card2").setAttribute("hidden", "");
  document.getElementById("Card3").removeAttribute("hidden");
}

function glow() {
  var c = document.getElementById("circle");
  if (c.className == "circle") {
    c.classList.add("on");
  } else {
    c.className = "circle";
  }
}

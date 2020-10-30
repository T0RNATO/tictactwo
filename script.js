var current = "o";
var i = 0;
function clicked(me) {
  if(!me.innerText) {
    me.innerText = current;
    if (current == "o") {
      current = "x";
      document.getElementById("t").innerText = "Current turn: X"
    }
    else {
      current = "o";
      document.getElementById("t").innerText = "Current turn: O"
    }
  }
}
function resetall() {
  for (var i = 0; i < 125; i++) {
    document.getElementsByTagName("div")[i].innerText = "";
  }
}

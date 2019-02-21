window.onload = start;

function start() {
  var flag = document.createElement("div");
  document.body.appendChild(flag).setAttribute("id", "flag");
  var Button = document.createElement("button");
  Button.innerHTML="Japan";
  Button.setAttribute("onclick","japan()"); 
  document.body.appendChild(Button).setAttribute("class","button");
}

function japan(){
  var target = document.getElementById("flag");
  target.setAttribute("class", "japan");
}

function getAllDomElement() {
  var containerDiv = document.getElementById("container");
  containerDiv.style.backgroundColor = "red";
  containerDiv.style.padding = "20px";

  var h2DomElement = document.querySelector("h2");
  h2DomElement.style.color = "white";
  h2DomElement.style.marginBottom = "15px";

  var contentDiv = document.querySelector(".content");
  contentDiv.onmouseenter = changeBgColorToWhite;
  contentDiv.onmouseleave = changeBgColorToBlue;
  contentDiv.style.border = "solid 3px green";
  contentDiv.style.padding = "10px";
}

function changeBgColorToWhite() {
  var contentDiv = document.querySelector(".content");
  contentDiv.style.backgroundColor = "white";
}

function changeBgColorToBlue() {
  var contentDiv = document.querySelector(".content");
  contentDiv.style.backgroundColor = "blue";
}

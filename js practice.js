
img = document.getElementById("img1");
img = document.getElementById("img2");
img = document.getElementById("img3");

function zoomin() {
  img1.style.transform = "scale(1.5)";
  img1.style.transition = "transform 0.25s ease";
}

function reset() {
  img1.style.transform = "scale(1)";
  img1.style.transition = "transform 0.25s ease";
}

function zoomin2() {
  img2.style.transform = "scale(1.5)";
  img2.style.transition = "transform 0.25s ease";
}

function reset2() {
  img2.style.transform = "scale(1)";
  img2.style.transition = "transform 0.25s ease";
}

function zoomin3() {
  img3.style.transform = "scale(1.5)";
  img3.style.transition = "transform 0.25s ease";
}

function reset3() {
  img3.style.transform = "scale(1)";
  img3.style.transition = "transform 0.25s ease";
}

function elementcount(){
  var numberOfChildren = document.getElementsByTagName('img').length;
  
  document.getElementById("q1").innerHTML = "There are " + numberOfChildren + " image tags on this page";
}

function firstidcount(){
  var firstid = document.getElementById("group1");
  var firstamount = firstid.childNodes.length
  
  document.getElementById("q2").innerHTML = "There are " + firstamount + " elements in the first ID";
}

function secondidcount(){
  var secondid = document.getElementById("group2");
  var secondamount = secondid.childNodes.length
  
  document.getElementById("q3").innerHTML = "There are " + secondamount + " elements in the second ID";
}
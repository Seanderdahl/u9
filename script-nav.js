function functionName() {
  var x = document.getElementsById('mytopnav');
  if (x.className === "topnav") {
  x.className += "responsive";
} else {
  x.className = "topnav";
 }
}

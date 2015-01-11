var img = document.getElementById("cat");
var count = document.getElementById("count");
var counter = 0;
img.addEventListener("click", function() {
  counter++;
  count.innerHTML = counter;
}, false);
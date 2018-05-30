var color = document.getElementById("dotcolor").value;
console.log(color);
var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {
  
var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dot.style.backgroundColor = document.getElementById("dotcolor").value;
    dot.style.height = document.getElementById("dotsize").value;
    dot.style.width = document.getElementById("dotsize").value;
      document.body.appendChild(dot);
  });

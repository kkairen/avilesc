var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

document.getElementById("time").innerHTML = dd + '/' + mm + '/' + yyyy;

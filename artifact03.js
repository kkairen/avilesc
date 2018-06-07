/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}


function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=1;i<=pHeight;i++){
    rLine +="<p>";

    //Fill in the left side of every row
    for(x=1;x<=pHeight-i;x++){
      rLine +="<span class='space'>" + pSymbol +"</span>";
    }
    //Create each line on the Rhombus
    for(j=x;j<=pHeight;j++){

      //Is the position even or odd so we change the color
      if (j%2) 
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("upLeft").innerHTML = rLine;
}


function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=0;i<pHeight;i++){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<=i;j++){

      //Is the position even or odd so we change the color
      if (j%2) 
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
    rLine +="<p>";

    //Fill in the left side of every row
    for(x=1;x<=pHeight-i;x++){
      rLine +="<span class='space'>" + pSymbol +"</span>";
    }

    //Create each line on the Rhombus
    for(j=0;j<i;j++){

      //Is the position even or odd so we change the color
      if (j%2) 
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){

      //Is the position even or odd so we change the color
      if (j%2) 
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("downRight").innerHTML = rLine;
}

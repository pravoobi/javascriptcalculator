var mexp = []; 
$("#equal").click(function(event){
    resultScreen(mexp);
});
  //AC clears the screen to zero, empties the array
$("#ac").click(function(event){
    mexp = [];
     document.getElementById("h1displ").innerHTML = 0;    
     document.getElementById("disps").innerHTML = 0; 
  });
  //CE clears the last entry alone from the array
$("#ce").click(function(event){
    mexp.pop();
      if(mexp.length == 0){ 
     document.getElementById("h1displ").innerHTML = 0;                        
     document.getElementById("disps").innerHTML = 0;
    return none;
        } else {
          displaySScreen(mexp);
          displayLScreen(0);
        }
  });
  //Adds the number or arithmetic operator to the array
$("#divide").click(function(event){
    mexp.push("/");
    displaySScreen(mexp);
    displayLScreen("/");
  });
$("#multiply").click(function(event){
    mexp.push("*");
    displaySScreen(mexp);
    displayLScreen("*");
  });
$("#seven").click(function(event){
    mexp.push("7");
    displaySScreen(mexp);
    displayLScreen(7);
  });
$("#eight").click(function(event){
    mexp.push("8");
    displaySScreen(mexp);
    displayLScreen(8);
  });
$("#nine").click(function(event){
    mexp.push("9");
    displaySScreen(mexp);
    displayLScreen(9);
  });
$("#minus").click(function(event){
    mexp.push("-");
    displaySScreen(mexp);
    displayLScreen("-");
  });
$("#four").click(function(event){
    mexp.push("4");
    displaySScreen(mexp);
    displayLScreen(4);
  });
$("#five").click(function(event){
    mexp.push("5");
    displaySScreen(mexp);
    displayLScreen(5);  
});
$("#six").click(function(event){
    mexp.push("6");
    displaySScreen(mexp);
    displayLScreen(6);
  });
$("#plus").click(function(event){
    mexp.push("+");
    displaySScreen(mexp);
    displayLScreen("+");
  });
$("#one").click(function(event){
    mexp.push("1");
    displaySScreen(mexp);
    displayLScreen(1);
  });
$("#two").click(function(event){
    mexp.push("2");
    displaySScreen(mexp);
    displayLScreen(2);
  });
$("#three").click(function(event){
    mexp.push("3");
    displaySScreen(mexp);
    displayLScreen(3);
  });
$("#zero").click(function(event){
    mexp.push("0");
    displaySScreen(mexp);
    displayLScreen(0);
  });
$("#dot").click(function(event){
    mexp.push(".");
    displaySScreen(mexp);
    displayLScreen(".");
  });
//Displays typing numbers and operators into small screen
function displaySScreen(mexp){
  document.getElementById("disps").innerHTML = mexp.length == 0 ? 0 : mexp.join("").replace(/\*/,"x");
}
//Displays typing numbers and operators into large screen
function displayLScreen(arr){
  document.getElementById("h1displ").innerHTML = arr;
  
}
//Function evaluates the array and displays the result on screen as soon as equal button is hit
function resultScreen(mexp){
  var n = mexp.join("");
  var finalNum =  eval(n);
  var eq = "=";
  var dispNum = n.concat(eq, finalNum); 
  document.getElementById("h1displ").innerHTML = finalNum;
  document.getElementById("disps").innerHTML =  dispNum.replace(/\*/,"x");
  emptyExp(mexp);
}
function emptyExp(arr){
  mexp = [];
}
//JS for I//
//Selecting each box//
var challeng1 = document.querySelector('.card-1');
var challeng1B = document.querySelector('.card-2');
var challeng1C = document.querySelector('.card-3');
//function to change color//
function bgChange(){
              changeColor('red');
                  }
//function to place the color on each box//
  function changeColor(color) {
          document.querySelector('.card-1').style.background = color;
          document.querySelector('.card-2').style.background = color;
          document.querySelector('.card-3').style.background = color;
                        }
//call the function to happen on hover//
challeng1.onmouseover=bgChange;
challeng1B.onmouseover=bgChange;
challeng1C.onmouseover=bgChange;



//Js for II//

var challenge2 = document.querySelector('.card-1'); //selects box 1//

var newEl = document.createElement('h6'); //creates new element//

//creates function of adding the node to the box//
function numberTwo(){
newEl.appendChild(document.createTextNode('Oooh- close but, no cigar.'));
challenge2.appendChild(newEl);
}
//calls the function to occur onclick//
challenge2.onclick=numberTwo;


//Js for III//

var challenge3 = document.querySelector('.card-2'); //selects box 1//

var newElem = document.createElement('h6'); //creates new element//

//creates function of adding the node to the box//
function numberThree(){
newElem.appendChild(document.createTextNode('DING DING DING-We have a winner.'));
challenge3.appendChild(newElem);
}
//calls the function to occur onclick//
challenge3.onclick=numberThree;

//Js for IV//

var challenge4 = document.querySelector('.card-3'); //selects box 1//

var newElement = document.createElement('h6'); //creates new element//

//creates function of adding the node to the box//
function numberFour(){
newElement.appendChild(document.createTextNode('Oops, better luck next time.'));
challenge4.appendChild(newElement);
}
//calls the function to occur onclick//
challenge4.onclick=numberFour;


//JS V//
var x= document.querySelector('.card-1');
var y= document.querySelector('.card-2');
var z= document.querySelector('.card-3');
x.addEventListener("click", function(){
document.querySelector(".btn").style.display = "inline"
      ; });
y.addEventListener("click", function(){
document.querySelector(".btn").style.display = "inline"
        ; });
z.addEventListener("click", function(){
document.querySelector(".btn").style.display = "inline"
            ; });

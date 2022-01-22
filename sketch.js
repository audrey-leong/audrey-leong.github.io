
function setup() {
    createCanvas(400, 400);
}

function draw() {
  
    var hr = hour();
    var min = minute();
    var sec = second();
    angleMode(DEGREES);
    noStroke();
    background("#2a77a1");
    
  
  
      //hours rectangle
      for (var h = 0; h < hr; h++){
        push();
        translate (width/2, height/2 );
        rotate((16*h)) //24 hours -0.25*360
        fill(134, 68, 110);
        rect(70,0,20,7);
        pop();
      }

      //minutes ellipses
        for(var m = 0; m < min; m++){
           
          print(minute())
          push();
          translate (width/2, height/2 );
          rotate((6*m)-210); //60 min +0.018 *360
          fill(215, 142, 16);
          ellipse(120, 0, 15, 2);
          pop();
          }


      //seconds lines
        for(var s = 0; s < sec; s++) { 
          push();
          translate (width/2, height/2 );
          rotate((6*s)+180); //60 lines
          stroke(132, 4, 16);
          strokeWeight(1);
          //blendMode(MULTIPLY);
          line(500,500,20,0);
          pop();
        }
  


}
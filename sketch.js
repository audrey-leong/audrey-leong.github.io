
function setup() {
  createCanvas(400, 400);
}

function draw() {

  var hr = hour();
  var min = minute();
  var sec = second();
  angleMode(DEGREES);
  noStroke();
  background("#000000");
  


    //hours rectangle
    for (var h = 0; h < hr; h++){
      push();
      translate (width/2 - 260, height/2 );
      translate(17*h, 1)
      //rotate((16*h)) //24 hours -0.25*360
      //fill(134, 68, 110);
      fill(224, 46, 252);
      rect(70,0,7,20);
      pop();
    }

    //minutes ellipses
      for(var m = 0; m < min; m++){
         
        print(minute())
        push();
        //translate (width/2, height/2 );
        translate(width/2-250, height/2 - 190 )
        translate(4, 7*m)
        //rotate((6*m)-210); //60 min +0.018 *360
        fill(128, 252, 46);
        ellipse(120, 0, 15, 2);
        pop();
        }


    //seconds lines
      for(var s = 0; s < sec; s++) { 
        push();
        translate (width/2 + 120, height/2 - 230);
        translate (-6*s, 6*s)
        //rotate((-6*s)); //60 lines
        //stroke(132, 4, 16);
        stroke("FFFFFF")
        strokeWeight(0.3 + (s/8));
        blendMode(LIGHTEST);
        line(550,500,20,0);
        pop();
      }



}

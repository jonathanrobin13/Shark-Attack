var drawBubble = function (bubblesX, bubblesY, diameter) {

    fill(156, 219, 237); // bubbles
    ellipse(bubblesX, bubblesY, diameter, diameter);// bubbles    

    var reflectionDiameter = diameter / 4;
    var resizing = 1 / 6 * diameter;

    fill(197, 231, 240);// bubbles reflection
    ellipse(bubblesX - resizing, bubblesY - resizing, reflectionDiameter, reflectionDiameter);// bubbles reflection    


};

var centerX = 0;
var centerY = 200;

var drawFish = function (centerX, centerY) {
    noStroke();
    // body
    ellipse(centerX, centerY, 100, 100);
    // tail
    var tailWidth = 25;
    var tailHeight = 50;
    triangle(centerX - 50, centerY,
        centerX - 50 - tailWidth, centerY - tailHeight,
        centerX - 50 - tailWidth, centerY + tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX + 100 / 4, centerY, 100 / 5, 100 / 5);

};

var drawShark = function (sharkX, sharkY) {
    noStroke();
    fill(140, 140, 140);
    /* sharkX = 150 sharkY = 200 */

    // teeth
    noStroke();
    fill(255, 255, 255);
    var teethX1 = sharkX + 3;
    var teethX2 = sharkX + 67;
    var teethY1 = sharkY + -1;
    var teethY2 = sharkY + -5;
    while (teethX1 < sharkX + 130) {
        triangle(teethX1, teethY1, teethX1 + 60, teethY1 + 9, teethX2, teethY2);
        teethX1 += 17;
        teethX2 += 19;
        teethY1 -= 5;
        teethY2 -= 5;
    }
    var downTeethX1 = sharkX + 1;
    var downTeethY1 = sharkY + 6;
    var downTeethX2 = sharkX + 50;
    var downTeethY2 = sharkY + 17;
    while (downTeethX1 < sharkX + 130) {
        triangle(downTeethX1, downTeethY1, downTeethX1 + 30, downTeethY1 - 6, downTeethX2, downTeethY2);
        downTeethX1 += 17;
        downTeethX2 += 19;
        downTeethY1 += 2;
        downTeethY2 += 3;
    }

    fill(140, 140, 140);
    // Shark body
    ellipse(sharkX - 41, sharkY, 150, 111);

    // tail 
    triangle(sharkX - 140, sharkY - 83, sharkX - 140, sharkY + 55, sharkX - 100, sharkY - 3);

    fill(140, 140, 140);
    // head
    triangle(sharkX + 33, sharkY - 53, sharkX + 17, sharkY + 6, sharkX + 200, sharkY - 40);
    triangle(sharkX - 40, sharkY + 56, sharkX + 23, sharkY + 5, sharkX + 188, sharkY + 37);

    // top fin 
    triangle(sharkX + 10, sharkY - 10, sharkX - 66, sharkY - 109, sharkX + 80, sharkY - 35);

    // bottom fin
    triangle(sharkX - 73, sharkY + 99, sharkX - 31, sharkY + 47, sharkX + 109, sharkY + 38);

    // eyes 
    noStroke();
    strokeWeight(0.5);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    ellipse(sharkX + 69, sharkY - 26, 20, 20);

    //eyebrows
    strokeWeight(9);
    line(sharkX + 55, sharkY - 45, sharkX + 83, sharkY - 30);
};

var sharkX1 = -225;
var sharkX2 = -610;
var fishSpeed = 12;
var fishNormalSpeed = fishSpeed - 6;
var sharkSpeed = fishSpeed - 2;
var fishX1 = 0;
var fishX2 = 300;
var fishX3 = 200;
var bubblesX1 = 284;
var bubblesY1 = 147;
var diameter1 = 77;
var bubblesX2 = 103;
var bubblesY2 = 228;
var diameter2 = 56;
var bubblesX3 = 231;
var bubblesY3 = 286;
var diameter3 = 37;
var seaweedX1 = 344;
var seaweedX2 = 337;
var seaweedX3 = 292;
var seaweedX4 = 266;
var seaweedX5 = 254;
var seaweedX6 = 178;
var seaweedX7 = 223;
var seaweedX8 = 2;
var seaweedX9 = 95;
var seaweedX10 = 70;
var seaweedX11 = 100;
var seaweedMove = 0.1;
var font = createFont("fantasy");
var Size1 = 55;
var numberOfLaps = 0;
textFont(font);

draw = function () {

    textSize(Size1);

    noStroke();
    background(89, 216, 255); //sea
    fill(255, 206, 173);
    beginShape(); // sand
    curveVertex(0, 258);// sand
    curveVertex(-42, 352);// sand
    curveVertex(321, 316);// sand
    curveVertex(429, 414);// sand
    curveVertex(101, 717);// sand
    curveVertex(386, 227);// sand
    endShape();// sand

    fill(150, 150, 150);
    ellipse(350, 350, 18, 10); //rocks
    ellipse(330, 346, 18, 10);//rocks
    ellipse(322, 360, 18, 10);//rocks
    ellipse(336, 356, 18, 10);//rocks
    ellipse(307, 348, 18, 10);//rocks
    ellipse(298, 356, 18, 10);//rocks
    ellipse(229, 368, 18, 10);//rocks
    ellipse(135, 352, 18, 10);//rocks
    ellipse(61, 382, 18, 10);//rocks

    drawBubble(bubblesX1, bubblesY1, diameter1);// bubbles
    drawBubble(bubblesX2, bubblesY2, diameter2);//bubbles
    drawBubble(bubblesX3, bubblesY3, diameter3);// bubbles


    // tell bubbles to repeat
    if (bubblesY3 < -56) {
        bubblesX1 = 284;
        bubblesY1 = 147;
        diameter1 = 77;
        bubblesX2 = 103;
        bubblesY2 = 228;
        diameter2 = 56;
        bubblesX3 = 231;
        bubblesY3 = 286;
        diameter3 = 37;
    }


    // seaweed
    fill(74, 247, 114);
    bezier(317, 359, seaweedX1, 377, 332, 170, 320, 286);
    bezier(323, 356, seaweedX2, 377, 332, 325, 281, 276);
    bezier(333, 358, seaweedX3, 377, 384, 276, 354, 325);
    bezier(292, 358, seaweedX4, 304, 216, 228, 283, 301);
    bezier(255, 358, seaweedX5, 400, 221, 276, 249, 304);
    bezier(158, 358, seaweedX6, 287, 191, 284, 191, 313);
    bezier(188, 358, seaweedX7, 358, 200, 214, 200, 289);
    bezier(24, 358, seaweedX8, 377, 8, 276, 48, 159);
    bezier(134, 358, seaweedX9, 300, 105, 276, 98, 159);
    bezier(56, 358, seaweedX10, 377, 93, 276, 58, 159);
    bezier(113, 358, seaweedX11, 377, 82, 276, 67, 159);


    // tell seaweed to go back and forward
    if (seaweedX1 > 357) {
        seaweedMove = -0.2;

    }
    else if (seaweedX1 < 324) {
        seaweedMove = 0.2;
    }




    // draw fish
    fill(255, 0, 0);
    drawFish(fishX1, 200);
    fill(0, 13, 255);
    drawFish(fishX2, 100);
    fill(255, 217, 0);
    drawFish(fishX3, 280);


    // tell fish to go back to -50
    if (fishX1 > 470) {
        fishX1 = -50;
    }

    if (fishX2 > 470) {
        fishX2 = -50;
    }

    if (fishX3 > 470) {
        fishX3 = -50;
    }


    fill(9, 0, 255);
    text("A Peacful Sea.......", 8, 50);


    // seaweed var
    seaweedX1 += seaweedMove;
    seaweedX2 += seaweedMove;
    seaweedX3 += seaweedMove;
    seaweedX4 += seaweedMove;
    seaweedX5 += seaweedMove;
    seaweedX6 += seaweedMove;
    seaweedX7 += seaweedMove;
    seaweedX8 += seaweedMove;
    seaweedX9 += seaweedMove;
    seaweedX10 += seaweedMove;
    seaweedX11 += seaweedMove;

    // fish var 

    fishX1 += fishNormalSpeed;
    fishX2 += fishNormalSpeed;
    fishX3 += fishNormalSpeed;

    // bubbles var
    bubblesX1 += 0.3;
    bubblesY1 -= 1;
    diameter1 += 0.2;
    bubblesX2 += 0.25;
    bubblesY2 -= 0.7;
    diameter2 += 0.15;
    bubblesX3 += 0.2;
    bubblesY3 -= 0.5;
    diameter3 += 0.1;

    // button for activation
    fill(255, 166, 0);
    rect(133, 331, 148, 66, 10);

    fill(255, 0, 0);
    textSize(20);
    text("Press to activate \n           attack!", 142, 363);

    if (mouseIsPressed && mouseX > 133 && mouseX < 281 && mouseY > 331 && mouseY < 400) {

        draw = function () {
            textSize(Size1);




            noStroke();
            background(89, 216, 255); //sea
            fill(255, 206, 173);
            beginShape(); // sand
            curveVertex(0, 258);// sand
            curveVertex(-42, 352);// sand
            curveVertex(321, 316);// sand
            curveVertex(429, 414);// sand
            curveVertex(101, 717);// sand
            curveVertex(386, 227);// sand
            endShape();// sand




            fill(150, 150, 150);
            ellipse(350, 350, 18, 10); //rocks
            ellipse(330, 346, 18, 10);//rocks
            ellipse(322, 360, 18, 10);//rocks
            ellipse(336, 356, 18, 10);//rocks
            ellipse(307, 348, 18, 10);//rocks
            ellipse(298, 356, 18, 10);//rocks
            ellipse(229, 368, 18, 10);//rocks
            ellipse(135, 352, 18, 10);//rocks
            ellipse(61, 382, 18, 10);//rocks


            drawBubble(bubblesX1, bubblesY1, diameter1);// bubbles
            drawBubble(bubblesX2, bubblesY2, diameter2);//bubbles
            drawBubble(bubblesX3, bubblesY3, diameter3);// bubbles


            // tell bubbles to repeat
            if (bubblesY3 < -56) {
                bubblesX1 = 284;
                bubblesY1 = 147;
                diameter1 = 77;
                bubblesX2 = 103;
                bubblesY2 = 228;
                diameter2 = 56;
                bubblesX3 = 231;
                bubblesY3 = 286;
                diameter3 = 37;
            }


            // seaweed
            fill(74, 247, 114);
            bezier(322, 344, seaweedX1, 377, 332, 170, 323, 286);
            bezier(323, 356, seaweedX2, 377, 332, 325, 281, 276);
            bezier(333, 358, seaweedX3, 377, 384, 276, 354, 325);
            bezier(292, 358, seaweedX4, 304, 216, 228, 283, 301);
            bezier(255, 358, seaweedX5, 400, 221, 276, 249, 304);
            bezier(158, 358, seaweedX6, 287, 191, 284, 191, 313);
            bezier(188, 358, seaweedX7, 358, 200, 214, 200, 289);
            bezier(24, 358, seaweedX8, 377, 8, 276, 48, 159);
            bezier(134, 358, seaweedX9, 300, 105, 276, 98, 159);
            bezier(56, 358, seaweedX10, 377, 93, 276, 58, 159);
            bezier(113, 358, seaweedX11, 377, 82, 276, 67, 159);


            // tell seaweed to go back and forward
            if (seaweedX1 > 357) {
                seaweedMove = -0.2;

            }
            else if (seaweedX1 < 324) {
                seaweedMove = 0.2;
            }

            // draw fish and shark
            if (numberOfLaps < 3) {

                fill(255, 0, 0);
                drawFish(fishX1, 200);
                fill(0, 13, 255);
                drawFish(fishX2, 100);
                drawShark(sharkX1, 257);
                fill(255, 217, 0);
                drawFish(fishX3, 280);
                drawShark(sharkX2, 105);
            }

            else if (numberOfLaps < 5) {
                fill(0, 13, 255);
                drawFish(fishX2, 100);
                drawShark(sharkX1, 257);
                fill(255, 217, 0);
                drawFish(fishX3, 280);
                drawShark(sharkX2, 105);

            }

            else if (numberOfLaps < 8) {
                drawShark(sharkX1, 257);
                fill(255, 217, 0);
                drawFish(fishX3, 280);
                drawShark(sharkX2, 105);
            }

            else {
                drawShark(sharkX1, 257);
                drawShark(sharkX2, 105);
                sharkSpeed = fishSpeed - 4;
            }

            // tell fish to go back to -50
            if (fishX1 > 470) {
                fishX1 = -50;
            }

            if (fishX2 > 470) {
                fishX2 = -50;
            }

            if (fishX3 > 470) {
                fishX3 = -50;
            }


            // tell shark to go back to -350
            if (sharkX1 > 600) {
                sharkX1 = -350;
                numberOfLaps++;
            }

            if (sharkX2 > 600) {
                sharkX2 = -350;
            }

            fill(0, 81, 230);
            textSize(47);
            text("SHARK DOMINATION!!", 8, 42);



            // seaweed var
            seaweedX1 += seaweedMove;
            seaweedX2 += seaweedMove;
            seaweedX3 += seaweedMove;
            seaweedX4 += seaweedMove;
            seaweedX5 += seaweedMove;
            seaweedX6 += seaweedMove;
            seaweedX7 += seaweedMove;
            seaweedX8 += seaweedMove;
            seaweedX9 += seaweedMove;
            seaweedX10 += seaweedMove;
            seaweedX11 += seaweedMove;

            // shark var
            sharkX1 += sharkSpeed;
            sharkX2 += sharkSpeed;

            //fish var
            fishX1 += fishSpeed;
            fishX2 += fishSpeed;
            fishX3 += fishSpeed;

            // bubbles var
            bubblesX1 += 0.3;
            bubblesY1 -= 1;
            diameter1 += 0.2;
            bubblesX2 += 0.25;
            bubblesY2 -= 0.7;
            diameter2 += 0.15;
            bubblesX3 += 0.2;
            bubblesY3 -= 0.5;
            diameter3 += 0.1;



        };


    }
};

var capture;
var radius = 20;
var imgCache
let overAllTexture
function setup() {
    createCanvas(640,640);
    capture = createCapture(VIDEO);
    capture.size(640,640);
    imgCache = createGraphics(640,640)
    imgCache.translate(640,0)
    imgCache.scale(-1.2,1)
    // println(capture.height,capture.height)
    // background(100);
    rectMode(CENTER)
    capture.hide()


    overAllTexture=createGraphics(width,height)
    overAllTexture.loadPixels()
    // noStroke()
    for(var i=0;i<width+50;i++){
        for(var o=0;o<height+50;o++){
            overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
        }
    }
    overAllTexture.updatePixels()

}
let mode = 1
function draw() {
    // loadImage(capture)
    background(0);
    imgCache.image(capture,0,0,640,640)

    push()
    noStroke()
    scale(1)
    radius = max(mouseX,0)/10+20
    for(var y=0;y<imgCache.height;y+=radius){
        for(var x=0;x<imgCache.width;x+=radius){
            var pixel = imgCache.get(x,y)
            var r = pixel[0]
            var g = pixel[1]
            var b = pixel[2]

            let bk = (r+g+b)/3
            let bkI = 10-int(bk/25.5)

            if (mode==1){
                let txt = "ZELIGEGBERT"

                //"一二三天四五田電龍龕龘"
                fill(r+50,g+50,b+50)
                textSize(radius)
                textStyle(BOLD)
                text(txt[bkI],x,y)
            }else if (mode==2){
                ellipse(x,y,radius/3+b/15,radius/3+b/15)
            }else if (mode==3){ui
                push()
                translate(x,y)
                rotate(b/20)
                colorMode(HSB)
                fill(r,100,100)
                // strokeWeight(3)
                // noFill()
                rect(0,0,radius/2.5+r/20,radius/2.5+r/20)
                fill(0)
                ellipse(0,0,5)
                pop()
            }
            // fill(0)
            // rect(x,y,radius/10+b/10-10,radius/10+b/10-20)
        }
    }
    pop()

    push()
    blendMode(MULTIPLY)
    image(overAllTexture,0,0)
    pop()


    // ellipse(mouseX, mouseY, 20, 20);
}

function keyPressed(){
    if (key=="1"){
        mode=1
    }
    if (key=="2"){
        mode = 2
    }
    if (key=="3"){
        mode = 3
    }
}


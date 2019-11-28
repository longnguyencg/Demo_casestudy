let BallBlue = function (speed) {
    this.x = Math.floor(Math.random() * canvas.width) - 10;
    this.y = 0;
    this.a = Math.random() * 5;
    this.img = document.getElementById("blue");
    this.creatBallBlue = function () {
        ctx.drawImage(this.img, this.x, this.y);
        this.a += 0.02;
        this.x += Math.sin(this.a);
        this.y += speed;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.floor(Math.random() * canvas.width);
        }
    }
};
function creatBallBlue() {
    let speed = Math.random()*10+2;
    let ballBlue = new BallBlue(speed);
    bluesBall.push(ballBlue);
    ballBlue.creatBallBlue();
}
function creatMultiBallBlue() {
    for (let i=0;i<5;i++){
        creatBallBlue();
    }
}



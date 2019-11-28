let BallGreen = function () {
    this.x = Math.floor(Math.random() * canvas.width) - 10;
    this.y = 0;
    this.a = Math.random() * 5;
    this.img = document.getElementById("green");
    this.creatBallGreen = function () {
        ctx.drawImage(this.img, this.x, this.y);
        this.a += 0.02;
        this.x += Math.sin(this.a);
        this.y += 10;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.floor(Math.random() * canvas.width);
        }
    }
};
function checkScore() {
    if (ballRed.y >= (basket.y - 70) && ballRed.x >= (basket.x - 50) && basket.x >= (ballRed.x - 100)) {
        ballRed.y = canvas.height;
        score -= 1;
    }
    for (let i = 0; i < 5; i++) {
        if (bluesBall[i].y >= (basket.y - 70) && bluesBall[i].x >= (basket.x - 50) && basket.x >= (bluesBall[i].x - 100)) {
            bluesBall[i].y = canvas.height;
            score += 1;
        }
    }

    if (score < 0 || (ballGreen.y >= (basket.y - 70) && ballGreen.x >= (basket.x - 50) && basket.x >= (ballGreen.x - 100))) {
        clearInterval(playGame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundImage = "url('batan3.jpg')";
    }
    if (score == 100) {
        clearInterval(playGame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundImage = "url('trick3.jpg')";

    }
}
let Score = function (score) {
    this.score = score;
    this.creatScore = function () {
        ctx.font = "35px Georgia";
        ctx.fillStyle = "pink";
        ctx.fillText("Điểm số:"+this.score,20,50);
    }
};
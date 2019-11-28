function run() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i=0;i<5;i++){
        bluesBall[i].creatBallBlue();
    }
    ballRed.creatBallRed();
    ballGreen.creatBallGreen();
    basket.creatTheBasket();
    checkScore();
    let mark = new Score(score);
    mark.creatScore();
}

function play() {
    canvas.style.backgroundImage = "url('trick2.jpg')";
    playGame = setInterval(run, 30);
}

function pause() {
    clearInterval(playGame);
}


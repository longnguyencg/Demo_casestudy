function redAndBlue() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballBlue.creatBallBlue();
    ballRed.creatBallRed();
    ballGreen.creatBallGreen();
    basket.creatTheBasket();
    checkScore();
}

function play() {
    canvas.style.backgroundImage = "url('trick2.jpg')";
    playGame = setInterval(redAndBlue, 30);    
}

function pause() {
    clearInterval(playGame);
}


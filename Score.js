function checkScore() {
    if (ballRed.y >= (basket.y - 70) && ballRed.x >= (basket.x - 50) && basket.x >= (ballRed.x - 100)) {
        ballRed.y = canvas.height;
        score-=1;
    }
    if (ballBlue.y >= (basket.y - 70) && ballBlue.x >= (basket.x - 50) && basket.x >= (ballBlue.x - 100)) {
        ballBlue.y = canvas.height;
        score+=1;
    }
    if (score < 0 || (ballGreen.y >= (basket.y - 70) && ballGreen.x >= (basket.x - 50) && basket.x >= (ballGreen.x - 100))) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundImage = "url('batan3.jpg')";
        clearInterval(playGame)
    }
    if (score ==100){
        canvas.style.backgroundImage = "url('trick3.jpg')";
        clearInterval(playGame)
    }
    document.getElementById('score').innerHTML = score;
}
let Basket = function (x, y) {
    this.x = 2 * x / 5;
    this.y = 4 * y / 5;
    this.img = document.getElementById("myImg");
    this.creatTheBasket = function () {
        ctx.drawImage(this.img, this.x, this.y);
    };
    this.moveBasket = function () {
        switch (event.which) {
            case 37:
                this.x -= 50;
                if (this.x <= 0) this.x = 0;
                break;
            case 39:
                if (this.x <= canvas.width - 150) {
                    this.x += 50;
                }
        }
    }
};

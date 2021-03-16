const Paddle = function (x, y, width, height, upKey, downKey) {

    this.color = "#444444";

    this.direction = "None";
    this.speed = 4;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    if ((this.width - this.x) <= 0) {
        this.x -= this.width;
    }

    window.addEventListener("keydown", e => {
        if (e.code === upKey) {
            this.direction = "Up";
        } else if (e.code === downKey) {
            this.direction = "Down"; 
        }
    });

    window.addEventListener("keyup", e => {
        if ((e.code === upKey) || (e.code === downKey)) {
            this.direction = "None";
        }
    });
}

Paddle.prototype = {

    update: function (backendPaddle) { 
        this.x = backendPaddle.x;
        this.y = backendPaddle.y;
    },
    
    draw: function (context) { 

        context.fillStyle = this.color;
        context.beginPath();"#444444"
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}
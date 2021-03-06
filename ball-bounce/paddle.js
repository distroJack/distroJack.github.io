const Paddle = function (x, y, width, height, upKey, downKey) {

    this.color = "#444444";

    this.direction = 0;
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
            this.direction = -1;
        } else if (e.code === downKey) {
            this.direction = 1; 
        }
        console.log(e.code);
    });

    window.addEventListener("keyup", e => {
        if ((e.code === upKey) || (e.code === downKey)) {
            this.direction = 0;
        }
    });
}

Paddle.prototype = {

    getLeftPos: function () { 
        return {
            "x" : this.x + this.width,
            "y_top": this.y,
            "y_bot": this.y + this.height
        }
    },

    getRightPos: function () { 
        return {
            "x" : this.x,
            "y_top": this.y,
            "y_bot": this.y + this.height
        }
    },

    updatePosition: function (width, height) {

        this.y += this.speed  * this.direction;
        if (this.y > (height - this.height)) {
            this.y = (height - this.height)
        } else if (this.y < 0) {
            this.y = 0;
        }
    },

    draw: function (context) { 

        context.fillStyle = this.color;
        context.beginPath();"#444444"
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}
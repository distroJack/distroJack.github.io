const Ball = function (x, y, radius) {

    this.color = "#444444";

    console.log(x,y);

    this.direction = Math.PI;
    this.speed = 4;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.last = 1;

}

Ball.prototype = {

    updatePosition: function (width, height, left, right, board) {

        this.x += this.speed * Math.cos(this.direction);
        this.y += this.speed * Math.sin(this.direction);

        // Randomly kick the ball within a 6 degree direction on bounce
        var kick = ((Math.random() * 2) - 1) / (Math.PI * 2);

        var lp = left.getLeftPos();
        var rp = right.getRightPos();
 
        // Has either player scored
        if (this.x - this.radius < 0) {
            board.score_right();
            this.last = 2 * Math.PI;
            this.reset(width, height);
        } else if (this.x + this.radius > width) {
            board.score_left();
            this.last = Math.PI;
            this.reset(width, height);
        }

        // Has either player successfully blocked
        if (this.x - this.radius < lp.x) { // ball past the paddles edge 
            if (this.y > lp.y_top && this.y < lp.y_bot) { // ball center within paddle bounds
                this.x = lp.x + radius;
                this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
                this.direction += kick;
                this.speed++;
            }
        } else if (this.x + this.radius > rp.x) { // ball past the paddles edge 
            if  (this.y > rp.y_top && this.y < rp.y_bot)  { // ball center within paddle bounds
                this.x = rp.x - radius;
                this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
                this.direction += kick;
                this.speed++;
            }
        }

        // Bounce the ball off the top and bottom
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
            this.direction += kick;
        } else if (this.y + this.radius > height) {
            this.y = height - this.radius;
            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
            this.direction += kick;
        }
    },

    reset : function(width, height) {
        this.speed = 4;
        var kick = ((Math.random() * 10) - 5) / (Math.PI * 2);
        this.direction = this.last + kick;
        this.x = width / 2.0;
        this.y =  height / 2.0;
    },

    draw : function (context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

}

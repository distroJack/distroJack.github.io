const Ball = function (x, y, radius) {

    this.color = "#444444";
    this.x = x;
    this.y = y;
    this.radius = radius;

}

Ball.prototype = {

    update: function (backendBall) {
        this.x = backendBall.x;
        this.y = backendBall.y;
    },

    draw : function (context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

}

const Board = function (width, height) {

    this.width = width;
    this.height = height;

    this.lscore = 0;
    this.rscore = 0;

}

Board.prototype = {

    update: function(width, height) { 
        this.width = width;
        this.height = height;
    },

    score_left: function() { 
        this.lscore++;
    },

    score_right: function() { 
        this.rscore++;
    },

    draw: function(context) {
        context.fillStyle = "#444444";
        context.beginPath();
        context.fillRect(this.width/2.0 - 2.5, 0, 5, this.height);
        context.font = "40px Arial";
        context.fillText(this.lscore, this.width/4, this.height/10);
        context.fillText(this.rscore, this.width * (3/4), this.height/10);
    }

}
const Board = function (width, height) {

    this.width = width;
    this.height = height;

    console.log(width);
    console.log(height);
    this.lscore = 0;
    this.rscore = 0;

}

Board.prototype = {

    update: function(backendPlayer1, backendPlayer2) { 
        this.lscore = backendPlayer1.score;
        this.rscore = backendPlayer2.score;
    },

    draw: function(context) {
        context.fillStyle = "#cccccc";
        context.beginPath();
        context.fillRect(this.width/2.0 - 2.5, 0, 5, this.height);
        context.font = "30px Arial";
        context.fillText("Player 1 : " + this.lscore, this.width/7, this.height/10);
        context.fillText("Player 2 : " + this.rscore, this.width * (19/28), this.height/10);
    }

}
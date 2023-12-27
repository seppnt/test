function play(index) {
let x = this.player.hand[index];
if (this.player.mana >= x.cost && this.player.board[this.tgX][this.tgY] == null &&  this.turnState == "player" ) {
this.player.mana -= x.cost
this.player.board[this.tgX][this.tgY]=x
this.player.hand.splice(index, 1)
}
}

function target(x, y){
this.tgX=x
this.tgY=y
}
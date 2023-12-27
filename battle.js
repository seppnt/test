function battle(x, y) {
for (i in x.board) {
if (x.board[i][0] !== null && y.board[i][0] === null) {
y.hp -= x.board[i][0].atk;
}
if (x.board[i][0] !== null && y.board[i][0] !== null) {
x.board[i][0].hp -= y.board[i][0].atk;
y.board[i][0].hp -= x.board[i][0].atk;
this.deat( i);
}
}
}

function deat(x) {
if (this.player.board[x][0].hp <= 0) {
this.player.board[x].splice(0, 1);
this.player.board[0].push(null);
}
if (this.bot.board[x][0].hp <= 0) {
this.bot.board[x].splice(0, 1);
this.bot.board[0].push(null);
}
}
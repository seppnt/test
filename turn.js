function turn() {
  if (this.turnState === "player") {
    this.player.board.flat().forEach(card => {
      if (card !== null && card.onturn) {
        card.onturn()
      }
    });
    this.battle(this.player, this.bot)
    this.turnState = "bot"

  } else if (this.turnState === "bot") {
   this.bot.board.flat().forEach(card => {
      if (card !== null && card.onturn) {
        card.onturn()
      }
    });
    this.battle(this.bot , this.player)
    this.turnState = "player";

    // Execute bot decision
    //botDecision.call(this);
    this.player.mana = 4
  }
  
  

  if (this.player.hp <= 0) {
    alert("lose");
  } else if (this.bot.hp <= 0) {
    alert("win");
  }
}

/*
function botDecision() {
  const targetIndex = Math.floor(Math.random() * this.player.board.length);

  // Simulate the bot targeting a random card from the player's board
  this.target1 = targetIndex;
  this.isAtking = true;

  // After making a decision, proceed with the battle
  this.targetB(0);  // Assuming the bot always targets the first card in its board
}
*/

// Modify the turn function to include bot decision







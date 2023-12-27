let cd1 = {name:"char1", cost: 1, atk: 1, hp: 2, onturn: function(){this.atk+=1}}
let cd2 = {name:"char2", cost: 2, atk: 1, hp: 1, onplay: function(){this.atk+=1}}
let cd3 = {name:"char3", cost: 3, atk: 3, hp: 3}
var player= { hp: 5, mana: 4, 
board: [[{...cd1}, {...cd1}], [null, null]],
hand: [{...cd2}, {...cd2} ]
}
var bot= { hp: 5, 
board: [[{...cd1}, null], [null, null]],
hand: [{...cd1},{...cd1}]
}
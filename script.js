function Player(name, power, hp, type='ai') {
    this.name = name;
    this.power = power;
    this.hp = hp;
    this.type = type;

    this.directionOfAttack = null;
    this.directionOfDefence = null;

    this.attack = function() {
        return this.power;
    }

    this.takeDamage = function(damage) {
        this.hp -= damage;
    }
}

const players = [
    new Player('Play1', 10, 100, 'user'),
    new Player('Lvl01', 2, 20, 'comp_lvl_01'),
]

const gameController = {
    attackTurn: null,
    defenceTurn : null,

    start() {
        this.attackTurn = Math.round(Math.random()); //визначаємо чий хід
        this.defenceTurn = Math.abs(this.attackTurn - 1);

        while (players[0].hp > 0 && players[1].hp > 0) {
            alert(`атакує гравець ${players[this.attackTurn].name}`)

            const damage = players[this.attackTurn].attack();

            alert(`${players[this.attackTurn].name} наносить ${players[this.attackTurn].power} урона`)

            players[this.defenceTurn].takeDamage(damage);
            
            this.showHealth();
            this.changeTurn();
        }
    },

    changeTurn() {
        this.attackTurn = this.defenceTurn;
        this.defenceTurn = Math.abs(this.defenceTurn - 1);
    },
    showHealth() {
        alert(`
            здоров'я ${players[this.attackTurn].name}: ${players[this.attackTurn].hp}
            здоров'я ${players[this.defenceTurn].name}: ${players[this.defenceTurn].hp}
            `)
    }
}


let zero = 0;
let one = 0;

for (let i = 0; i < 1000; i++) {
    let turn = Math.round(Math.random());

    if (turn === 0) {
        zero++;
    } else {
        one++;
    }
}

console.log('0 випало:', zero);
console.log('1 випало:', one);

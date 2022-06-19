let monsterEscaper = null;

function setup() {

    createCanvas(800, 600);

    // het spel tonen zonder alle code in sketch.js te leggen.
    monsterEscaper = new MonsterEscaper();
}

function draw() {
    // een nieuwe update van het spel tonen.
    monsterEscaper.Update();
}
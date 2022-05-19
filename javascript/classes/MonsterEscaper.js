class MonsterEscaper extends Game{
    #player = null;
    #robot = [];
    #zombie = [];

    
    constructor() {
        super();

        // de code om de player te laten zien.
        this.#player = new Player(70, 70, 55, 55);
        

        // de code om de little bees te laten zien.
        this.#robot[0] = new Robot(180, 59,45, this.#player);
        this.#robot[1] = new Robot(100, 520,45, this.#player);
        this.#robot[2] = new Robot(200, 300,45, this.#player);

        // de code om de big bees te laten zien.
        this.#zombie[0] = new Zombie(150, 400, 60, this.#player);
        this.#zombie[1] = new Zombie(580, 500, 60, this.#player);
        this.#zombie[2] = new Zombie(700, 100, 60, this.#player);



        // variabele criëeren om een verschil te hebben van de muren posities.
        let topWalls = [];
        let bottomWalls = [];
        let leftWalls = [];
        let rightWalls = [];


        // de code om de muren te laten zien.
        topWalls.push(new Tile( 30, 15, 1550, 30));
        bottomWalls.push(new Tile( 30, 585, 1550, 30));
        bottomWalls.push(new Tile( 190, 120, 150, 30));
        bottomWalls.push(new Tile( 500, 120, 250, 30));
        bottomWalls.push(new Tile( 150, 340, 450, 30));
        bottomWalls.push(new Tile( 150, 460, 300, 30));

        rightWalls.push(new Tile(785, 350 - ( 20), 30, 650));
        leftWalls.push(new Tile(15, 350 - ( 20), 30, 650));  
        leftWalls.push(new Tile(130, 30 - ( 20), 30, 210));
        rightWalls.push(new Tile(150, 290 - ( 20), 30, 110));
        leftWalls.push(new Tile(550, 290 - ( 20), 30, 110));
        leftWalls.push(new Tile(450, 540 - ( 20), 30, 110));
        rightWalls.push(new Tile(660, 400 - ( 20), 30, 110));

        // de variabele voor de munten omdat ik er veel heb.
        let coins = [];

        // de code om de muren te laten zien.
        coins.push(new Gold(70, 150, 30));
        coins.push(new Gold(70, 210, 30));
        coins.push(new Gold(70, 270, 30));
        coins.push(new Gold(150, 170, 30));
        coins.push(new Gold(220, 170, 30));
        coins.push(new Gold(290, 170, 30));
        coins.push(new Gold(360, 170, 30));
        coins.push(new Gold(430, 170, 30));
        coins.push(new Gold(500, 170, 30));
        coins.push(new Gold(570, 170, 30));
        coins.push(new Gold(640, 170, 30));
        coins.push(new Gold(710, 170, 30));
        coins.push(new Gold(320, 100, 30));
        coins.push(new Gold(250, 50, 30));
        coins.push(new Gold(320, 44, 30));
        coins.push(new Gold(380, 44, 30));
        coins.push(new Gold(450, 44, 30));
        coins.push(new Gold(520, 44, 30));
        coins.push(new Gold(590, 44, 30));
        coins.push(new Gold(660, 44, 30));
        coins.push(new Gold(756, 60, 30));
        coins.push(new Gold(730, 260, 30));
        coins.push(new Gold(730, 420, 30));
        coins.push(new Gold(730, 500, 30));
        coins.push(new Gold(500, 450, 30));
        coins.push(new Gold(500, 380, 30));
        coins.push(new Gold(480, 310, 30));
        coins.push(new Gold(480, 240, 30));
        coins.push(new Gold(640, 240, 30));
        coins.push(new Gold(400, 250, 30));
        coins.push(new Gold(400, 320, 30));
        coins.push(new Gold(400, 380, 30));
        coins.push(new Gold(400, 450, 30));
        coins.push(new Gold(330, 530, 30));
        coins.push(new Gold(260, 530, 30));
        coins.push(new Gold(190, 530, 30));
        coins.push(new Gold(50, 400, 30));
        coins.push(new Gold(220, 400, 30));
        coins.push(new Gold(290, 400, 30));
        coins.push(new Gold(300, 280, 30));
        coins.push(new Gold(230, 240, 30));


        

        loadJSON("imagess/tiles/sheet.json", allFrames => {
            let frames = [];
            let spritesheet = null;
            let animation = null;

            frames = [
                allFrames[31]
            ];
            spritesheet = loadSpriteSheet('imagess/tiles/sheet.png', frames);
            animation = loadAnimation(spritesheet);

            topWalls.forEach(tile => { 
                tile.addAnimation("top", animation);
                tile.changeAnimation("top");
            });

            frames = [
                allFrames[6]
            ];
            spritesheet = loadSpriteSheet('imagess/tiles/sheet.png', frames);
            animation = loadAnimation(spritesheet);
            
            bottomWalls.forEach(tile => { 
                tile.addAnimation("bottom", animation);
                tile.changeAnimation("bottom");
            });
            frames = [
                allFrames[23]
            ];
            spritesheet = loadSpriteSheet('imagess/tiles/sheet.png', frames);
            animation = loadAnimation(spritesheet);
            
            leftWalls.forEach(tile => { 
                tile.addAnimation("left", animation);
                tile.changeAnimation("left");
            });
            frames = [
                allFrames[22]
            ];
            spritesheet = loadSpriteSheet('imagess/tiles/sheet.png', frames);
            animation = loadAnimation(spritesheet);
            
            rightWalls.forEach(tile => { 
                tile.addAnimation("right", animation);
                tile.changeAnimation("right");
            });

        });

        
        
    }



       

    
}
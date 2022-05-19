class Player extends GameObject{

    #speed = 5;
    #moveDirection = null;
    // #cursor = null;

    constructor(x, y, size){
        super(x, y, size, size, true);

        this.#moveDirection = createVector(0, 0);
        this.setCollider("circle", 0, 0, this.width/8);

        // alle images die ik wil gebruiken aangegeven.
        loadJSON(
            "/imagess/character/character_maleAdventurer_sheet.json",
             (allFrames) => {
            let frames = [];
            let spritesheet = null;
            let animation = null;

            frames = [
                allFrames[0]
                
            ];
            spritesheet = loadSpriteSheet('/imagess/character/character_maleAdventurer_sheet.png', frames);
            animation = loadAnimation(spritesheet);
            this.addAnimation("adventurer_idle", animation);

            frames = [
                allFrames[24],
                allFrames[25]

            ];
            spritesheet = loadSpriteSheet('/imagess/character/character_maleAdventurer_sheet.png', frames);
            animation = loadAnimation(spritesheet);
            animation.frameDelay = 100;
            this.addAnimation("adventurer_walk", animation);
            
            
            this.changeAnimation("adventurer_idle");
            
        });
        
    }

    get MoveDirection() { 
        return this.#moveDirection;
    }
    Update(){

        // welke image de computer moet tonen en wanneer.
        

        if (keyIsDown(32) === true) {
            this.changeAnimation("adventurer_walk");
         }
         else if (keyIsDown(RIGHT_ARROW, UP_ARROW, DOWN_ARROW, LEFT_ARROW )) {
             this.changeAnimation("adventurer_walk");

        
        }

        

        //  aangeven hoe groot de image moet zijn en die laten zien.
        if (this.animation){
            push();
            scale(0.5);
            this.animation.draw(0, 0);
            pop();
        }

        //circle(0, 0, this.width);

        
        

        // het makkelijk maken van de bewegingen
        this.#moveDirection.x = 0;
        this.#moveDirection.y = 0;

        

        // de speler laten bewegen met peiltjes.
        if (keyIsDown(LEFT_ARROW) === true){
            
            this.position.x -= this.#speed;
        }
        if (keyIsDown(RIGHT_ARROW) === true){
            this.position.x += this.#speed;
        }
        if (keyIsDown(UP_ARROW) === true){
            this.position.y -= this.#speed;
        }
        if (keyIsDown(DOWN_ARROW) === true){
            this.position.y += this.#speed;
        }
        
        
        // de player gaat niet door de muren heen kunnen.
        if (this.#moveDirection.magSq()== 0){
            this.setSpeed(0);

        }
        else{

            let angle = this.#moveDirection.heading();
        angle = degrees(angle);

        this.setSpeed(5, angle)
        }
    }

    
}
    

class Robot extends Monster {

    constructor(x, y, size, player){
        super(x, y, size, player);

        // alle images die ik wil gebruiken aangegeven.
        loadJSON(
            "/imagess/character/character_robot_sheet.json",
             (allFrames) => {
            let frames = [];
            let spritesheet = null;
            let animation = null;

            frames = [
                allFrames[0]
                
            ];
            spritesheet = loadSpriteSheet('/imagess/character/character_robot_sheet.png', frames);
            animation = loadAnimation(spritesheet);
            this.addAnimation("robot_idle", animation);

            frames = [
                allFrames[40],
                allFrames[41]
            ];
            spritesheet = loadSpriteSheet('/imagess/character/character_robot_sheet.png', frames);
            animation = loadAnimation(spritesheet);
            animation.frameDelay = 50;
            this.addAnimation("robot_walk", animation);

            frames = [
                allFrames[24],
                allFrames[25],
                allFrames[26]

            ];
            spritesheet = loadSpriteSheet('/imagess/character/character_robot_sheet.png', frames);
            animation = loadAnimation(spritesheet);
            animation.frameDelay = 100;
            this.addAnimation("robot_walk", animation);
            
            this.changeAnimation("robot_idle");
            
            
            
        });
    }

    Update() { 
        // fill(0,255, 0);
        // super.Update();
        // this.#PlayerPos = this.Player.position.copy();


        //  aangeven hoe groot de image moet zijn en die laten zien.
        if (this.animation){
            push();
            scale(0.5);
            this.animation.draw(0, 0);
            pop();
           
        }
        
    }
}
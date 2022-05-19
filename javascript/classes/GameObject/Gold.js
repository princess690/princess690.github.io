class Gold extends GameObject{

    constructor(x, y, size){
        super(x, y, size, size);

        // alle images die ik wil gebruiken aangegeven.
        loadJSON(
            "/imagess/coin/sheet.json",
             (allFrames) => {
            let frames = [];
            let spritesheet = null;
            let animation = null;

            frames = [
                allFrames[36]
                
            ];
            spritesheet = loadSpriteSheet('/imagess/coin/sheet.png', frames);
            animation = loadAnimation(spritesheet);
            this.addAnimation("goldCoin", animation);

            this.changeAnimation("goldCoin");
            
        });
       
    }

    Update(){

        //  aangeven hoe groot de image moet zijn en die laten zien.
        if (this.animation){
            push();
            scale(0.3);
            this.animation.draw(0, 0);
            pop();
        }

        // fill(255,215,0)
        // circle(0, 0, this.width);
    }

    // als de speler een coin aanraakt zal de coin moeten verdwijnen.
    Overlap(otherObject){
        if(otherObject instanceof Player){
            this.remove();  
        }
        
    }

}
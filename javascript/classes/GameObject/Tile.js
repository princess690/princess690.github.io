class Tile extends GameObject{

    constructor(x, y, width, height){
        super(x, y, width, height, true);
        this.setCollider("rectangle");
        this.immovable = true;


    }

    Update(){
        
        //  aangeven hoe groot de image moet zijn en die laten zien.
        if (this.animation){
            push();
            scale(this.width/70, this.height/70);
            this.animation.draw(0, 0);
            pop();
        }

        

        // fill(0, 0, 255);
        // rect(0,0, this.width, this.height);
    }   

    
}
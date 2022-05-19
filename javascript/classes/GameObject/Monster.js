class Monster extends GameObject{

    #speed = 2;
    #player = null;
    #playerPos = null;
    #moveDirection = null;


    constructor(x, y, size, player){
        super(x, y, size, size, true);

        this.#player = player;
        this.#playerPos = this.#player.position.copy();
        // this.setCollider("circle");

        
    }

    // een poging gedaan om de bee de player te laten volgen.
    get Player() { 
        return this.#player;
    }

    set PlayerPos(value) { 
        this.#playerPos = value;
    }

    get MoveDirection() { 
        return this.#moveDirection;
    }
   
    Update(){

        circle(0, 0, this.width);

        // de bees gaan niet door de muren heen kunnen.
        if (this.#moveDirection.magSq()== 0){
            this.setSpeed(0);

        }
        else{

            let angle = this.#moveDirection.heading();
        angle = degrees(angle);

        this.setSpeed(5, angle)
        }
        this.PlayerPos = this.Player.position.copy();

        let direction = p5.Vector.sub(this.#playerPos, this.position);

        let dirAngle = direction.heading();
     
        let dirAngleDegrees = degrees(dirAngle);
     
        this.setSpeed(2, dirAngleDegrees);
        

    }

    Overlap(otherObject){
        if(otherObject instanceof Player){
            this.remove();  
        }
        
    }

}
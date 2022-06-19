class GameObject extends OOSprite {
    #detectCollision = false;
    constructor(x, y, width, height, detectCollision = false) {
        super(x, y, width, height);
        this.#detectCollision = detectCollision;
    }

    get DetectCollision() { 
        return this.#detectCollision;
    }

    Overlap() { 
    }

    Collide() { 
    }

    Update() {
        fill(this.shapeColor);
        rect(0, 0, this.width, this.height);
    }
}
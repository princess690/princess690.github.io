class Game {
    constructor() {
    }

    static GetAllGameObjects() {return GameCanvas.GetInstance().GetAllGameObjects(); }

    Update() {
        GameCanvas.GetInstance().Update();

        let gameObjects = Game.GetAllGameObjects();

        let colliders = new Group();
        gameObjects.filter(go => go.DetectCollision).forEach(go => colliders.add(go));

        gameObjects.overlap(gameObjects, this.#overlapping);
        colliders.collide(colliders, this.#colliding);
    }

    #overlapping(A, B) { 
        A.Overlap(B); 
        B.Overlap(A);
    }

    #colliding(A, B) { 
        A.Collide(B); 
        B.Collide(A);
    }
}

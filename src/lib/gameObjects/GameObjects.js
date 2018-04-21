import GameObject from "./GameObject";

/**
 * Game objects composite.
 */
class GameObjects {
    /**
     * Constructor.
     */
    constructor() {
        /**
         * Game objects.
         * @type {GameObject[]}
         * @private
         */
        this.__gameObjects = [];
    }

    /**
     * Adds game object to the composite.
     * @param {GameObject} gameObject
     * @returns {GameObjects}
     * @throws {Error}
     */
    add(gameObject) {
        this.__gameObjects.push(GameObject.isInstStrict(gameObject));
        return this;
    }

    /**
     * Updates game objects.
     */
    update() {
        // console.log("Update game objects.");
        this.__gameObjects.forEach(o => o.update());
    }

    /**
     * Renders game objects.
     */
    render() {
        // console.log("Render game objects.");
        this.__gameObjects.forEach(o => o.render());
    }
}

export default GameObjects
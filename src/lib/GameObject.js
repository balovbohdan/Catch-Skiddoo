import Game from "./Game";

/**
 * Game objects superclass.
 * @abstract
 */
class GameObject {
    /**
     * Constructor
     * @param {int} x
     * @param {int} y
     * @param {int} w
     * @param {int} h
     */
    constructor(x, y, w, h) {
        /**
         * Main game instance.
         * @type {Game}
         * @private
         */
        this.__game = Game.getInst();

        /**
         * Rendering context (of the <canvas>).
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this.__ctx = this.__game.getWindow().getCtx();

        /**
         * "X" position.
         * @type {int}
         * @private
         */
        this.__x = x;

        /**
         * "Y" position.
         * @type {int}
         * @private
         */
        this.__y = y;

        /**
         * Game object width.
         * @type {int}
         * @private
         */
        this.__w = w;

        /**
         * Game object height.
         * @type {int}
         * @private
         */
        this.__h = h;
    }

    /**
     * Updates game object.
     */
    update() {
        // console.log("Update game object.");
        ++this.__x;
        ++this.__y;
    }

    /**
     * Renders game object.
     */
    render() {
        // console.log("Render game object.");
        // console.log(this.__x, this.__y, this.__x, this.__h);
        const c = this.__ctx;
        c.fillStyle = "red";
        c.fillRect(this.__x, this.__y, this.__w, this.__h);
    }

    /**
     * Says if object instance of "GameObject".
     * @param {*} o Object to check.
     * @returns {boolean}
     */
    static isInst(o) {
        return o instanceof GameObject;
    }

    /**
     * Says if object instance of "GameObject".
     * Strict version.
     * @param {*} o Object to check.
     * @returns {GameObject} Valid game object.
     * @throws {Error}
     */
    static isInstStrict(o) {
        if (GameObject.isInst(o)) return o;
        throw new Error("Object is not instance of 'GameObject'.");
    }
}

export default GameObject;
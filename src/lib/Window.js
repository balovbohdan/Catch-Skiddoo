/**
 * Window of the game.
 * Singletone.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 0.0.1
 */
class Window {
    /**
     * Instance constructor.
     * @param {int} [w = Window.FULL_WIDTH] Window width.
     * @param {int} [h = Window.FULL_HEIGHT] Window height.
     * @constructor
     */
    constructor(w = Window.FULL_WIDTH, h = Window.FULL_HEIGHT) {
        if (Window.isInst(Window.__inst)) return Window.__inst;
        Window.__inst = this;

        /**
         * Window width.
         * @type {int}
         * @private
         */
        this.w = +w >> 0;

        /**
         * Window height.
         * @type {int}
         * @private
         */
        this.h = +h >> 0;

        /**
         * Game container (<canvas>).
         * @type {HTMLCanvasElement}
         * @private
         */
        this.__domContainer = document.createElement("canvas");

        /**
         * Rendering context (of the <canvas>).
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this.__ctx = this.__domContainer.getContext("2d");

        this.__init();
    }

    /**
     * Says if object is instance of "Window".
     * @param {object} window
     * @returns {boolean}
     */
    static isInst(window) {
        return window instanceof Window;
    }

    /**
     * Makes rendering of the game.
     */
    render(gameObject) {}

    /**
     * Returns game container.
     * @returns {HTMLCanvasElement}
     */
    getDomContainer() {
        return this.__domContainer;
    }

    /**
     * Returns rendering context (of the <canvas>).
     * @returns {CanvasRenderingContext2D}
     */
    getCtx() {
        return this.__ctx;
    }

    /**
     * Clears DOM container.
     */
    clearDomContainer() {
        // [BB: Set inner width and height.]
        this.getCtx().clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    }

    /**
     * Initializes instance.
     * @private
     */
    __init() {
        this.__domContainer.width = document.documentElement.clientWidth;
        this.__domContainer.height = document.documentElement.clientHeight;
        document.body.appendChild(this.__domContainer);
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Single instance of the class.
 * @type {null|Window}
 * @private
 */
Window.__inst = null;

/**
 * This says "Use full device width".
 * @type {number}
 */
Window.FULL_WIDTH = 1;

/**
 * This says "Use full device window height".
 * @type {number}
 */
Window.FULL_HEIGHT = 2;

export default Window;
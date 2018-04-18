import Game from "./Game";

/**
 * Class that organizes game loop.
 */
class GameLoop {
    /**
     * Constructor.
     */
    constructor() {
        /**
         * Main game object.
         * @type {Game}
         */
        this.__game = Game.getInst();

        /**
         * Game loop listeners.
         */
        this.__listeners = [];

        /**
         * ID of the game loop.
         * It is needed to cancel game loop.
         * @type {number}
         * @private
         */
        this.__loopID = 0;

        /**
         * Game render FPS.
         * @type {number}
         * @private
         */
        this.__fps = 60;
    }

    /**
     * Starts game loop.
     * @throws {Error}
     * @returns {GameLoop}
     */
    start() {
        console.log("Start game loop.");
        if (!this.__listeners.length) throw new Error("There are no listeners for game loop!");
        if (!this.__game.getRunning()) throw new Error("Forbidden to start game loop. Game is not running.");
        this.__start();
        return this;
    }

    /**
     * Stops game loop.
     * @returns {GameLoop}
     */
    stop() {
        console.log("Stop game loop.");
        if (this.__loopID) window.cancelAnimationFrame(this.__loopID);
        if (this.__game.getRunning()) this.__game.stop();
        return this;
    }

    /**
     * Adds listener to the game loop listeners.
     * @param {Function} listener
     * @returns {GameLoop}
     * @throws {Error}
     */
    addListener(listener) {
        if (typeof listener !== "function") throw new Error("Got invalid game loop listener.");
        this.__listeners.push(listener);
        return this;
    }

    /**
     * Starts game loop.
     * Helper for the "start()" method.
     * @private
     */
    __start() {
        const frameDelay = 1000 / this.__fps;

        (function loop() {
            if (!this.__game.getRunning()) return this.stop();
            const frameStart = Date.now();
            this.__getLoopCallback()();

            const framePassedTime = Date.now() - frameStart,
                  nextFrameDelay = Math.max(frameDelay - framePassedTime, frameDelay);

            return setTimeout(this.__callLoopFunc.bind(this, loop.bind(this)), nextFrameDelay);
        }.bind(this))();
    }

    /**
     * Returns game loop callback.
     * This callback will be used to render game.
     * Calls all client listeners.
     * @returns {Function}
     * @private
     */
    __getLoopCallback() {
        return () => this.__listeners.forEach(listener => listener());
    }

    /**
     * Returns function that realizes correct game looping.
     * @returns {Function}
     * @throws {Error}
     * @private
     */
    static __getLoopFunc() {
        const func = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame;

        if (typeof func !== "function") throw new Error("Failed to find game loop function!");
        return func;
    }

    /**
     * Calls function that realizes correct game looping.
     * @param {Function} loopWrapFunc Wrapper loop function (See "__start()" method.)
     * @throws {Error}
     * @private
     */
    __callLoopFunc(loopWrapFunc) {
        if (typeof loopWrapFunc !== "function") throw new Error("Gor invalid loop wrapper function.");
        this.__loopID = GameLoop.__getLoopFunc()(loopWrapFunc, this.__game.getWindow().getDomContainer());
    }
}

export default GameLoop;
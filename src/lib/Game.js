import GameObjects from "./gameObjects/GameObjects";
import Player from "./gameObjects/Player";
import EventsHandler from "./EventsHandler";
import Window from "./Window";
import GameLoop from "./GameLoop";

/**
 * Main game class.
 * This is mediator of game parts.
 * Singletone.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 0.0.1
 */
class Game {
    /**
     * Instance constructor.
     */
    constructor() {
        if (Game.isInst(Game.__inst)) return Game.__inst;
        Game.__inst = this;

        /**
         * Is game running right now?
         * @type {boolean}
         * @private
         */
        this.__running = false;

        /**
         * Game objects composite.
         * @type {GameObjects}
         * @private
         */
        this.__gameObjects = new GameObjects();

        /**
         * Instance that controls events.
         * @type {EventsHandler}
         * @private
         */
        this.__eventsHandler = new EventsHandler();

        /**
         * Game window instance.
         * @type {Window}
         * @private
         */
        this.__window = new Window();

        /**
         * Game loop instance.
         * @type {GameLoop}
         * @private
         */
        this.__gameLoop = new GameLoop();

        this.__init();
    }

    /**
     * Starts game.
     * @returns {Game}
     */
    start() {
        this.__running = true;
        this.__handleEvents();
        this.__gameLoop.start();
        return this;
    }

    /**
     * Stops game.
     * @returns {Game}
     */
    stop() {
        this.__running = false;
        this.__unhandleEvents();
        return this;
    }

    /**
     * Returns game window instance.
     * @returns {Window}
     */
    getWindow() {
        return this.__window;
    }

    /**
     * Says if game is running right now.
     * @returns {boolean}
     */
    getRunning() {
        return this.__running;
    }

    /**
     * Says if object is instance of "Game".
     * @param {Object} game
     * @returns {boolean}
     */
    static isInst(game) {
        return game instanceof Game;
    }

    /**
     * Returns single instance of the current class.
     * @returns {Game}
     */
    static getInst() {
        return new Game();
    }

    /**
     * Updates game objects states.
     * @private
     */
    __update() {
        this.__gameObjects.update();
    }

    /**
     * Renders game objects.
     * @private
     */
    __render() {
        this.getWindow().clearDomContainer();
        this.__gameObjects.render();
    }

    /**
     * Applies events handlers.
     * @private
     */
    __handleEvents() {
        this.__eventsHandler.handleEvents();
    }

    /**
     * Stops events handling.
     * @private
     */
    __unhandleEvents() {
        this.__eventsHandler.unhandleEvents();
    }

    /**
     * Initializes instance.
     * @private
     */
    __init() {
        this.__gameObjects.add(new Player(10, 10, 30, 30));

        this.__gameLoop.addListener(function () {
            this.__render();
            this.__update();
        }.bind(this));
    }
}

/**
 * Single instance of the class.
 * @type {null|Game}
 * @private
 */
Game.__inst = null;

export default Game;
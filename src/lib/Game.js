/** @flow */

import GameObjects from './gameObjects/GameObjects';
import Player from './gameObjects/Player';

import EventsSystem from './EventsSystem/EventsSystem';
import './EventsSystem/EventsSystem.Handler';
import './EventsSystem/EventsSystem.Names';
import './EventsSystem/EventsSystem.CurrentEvents';

import Window from './Window';
import GameLoop from './GameLoop';

/**
 * Main game class.
 * This is mediator of game parts.
 * Singletone.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 0.0.1
 */
class Game {
    __running:boolean = false;
    __gameObjects:GameObjects;
    __currentEvents:EventsSystem.CurrentEvents;
    __eventsHandler:EventsSystem.Handler;
    __window:Window;
    __gameLoop:GameLoop;

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
         * Current game events.
         * @type {EventsSystem.CurrentEvents}
         * @private
         */
        this.__currentEvents = new EventsSystem.CurrentEvents();

        /**
         * Instance that controls events.
         * @type {EventsSystem.Handler}
         * @private
         */
        this.__eventsHandler = new EventsSystem.Handler();

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
    getWindow() { return this.__window; }

    /**
     * Returns current events object.
     * @returns {EventsSystem.CurrentEvents}
     */
    getCurrentEvents():EventsSystem.CurrentEvents { return this.__currentEvents; }

    /**
     * Says if game is running right now.
     * @returns {boolean}
     */
    getRunning():boolean { return this.__running; }

    /**
     * Says if object is instance of 'Game'.
     * @param {*} game
     * @returns {boolean}
     */
    static isInst(game:mixed):boolean { return game instanceof Game; }

    /**
     * Returns single instance of the current class.
     * @returns {Game}
     */
    static getInst():Game { return new Game(); }

    /**
     * Updates game objects states.
     * @private
     */
    __update() {
        this.__gameObjects.update();
        this.getCurrentEvents().flush();
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
    __handleEvents() { this.__eventsHandler.handle(); }

    /**
     * Stops events handling.
     * @private
     */
    __unhandleEvents() { this.__eventsHandler.unhandle(); }

    /**
     * Initializes instance.
     * @private
     */
    __init() {
        this.__gameObjects.add(new Player({ x: 10, y: 10, w: 64, h: 64 }));

        this.__gameLoop.addListener(function () {
            this.__render();
            this.__update();
        }.bind(this));
    }

    /**
     * Single instance of the class.
     * @type {null|Game}
     * @private
     */
    static __inst = null;
}

export default Game;
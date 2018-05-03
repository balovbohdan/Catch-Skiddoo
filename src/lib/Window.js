/** @flow */

/**
 * Window of the game.
 * Singletone.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 0.0.1
 */
class Window {
    __w:number;
    __h:number;
    __domContainer:HTMLCanvasElement;
    __ctx:CanvasRenderingContext2D;

    /**
     * Instance constructor.
     * @param {number} [w = Window.FULL_WIDTH] Window width.
     * @param {number} [h = Window.FULL_HEIGHT] Window height.
     * @constructor
     */
    constructor(w?:number = Window.FULL_WIDTH, h?:number = Window.FULL_HEIGHT) {
        if (Window.isInst(Window.__inst)) return Window.__inst;
        Window.__inst = this;

        /**
         * Window width.
         * @type {number}
         * @private
         */
        this.__w = +w >> 0;

        /**
         * Window height.
         * @type {number}
         * @private
         */
        this.__h = +h >> 0;

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
     * @param {*} window
     * @returns {boolean}
     */
    static isInst(window:mixed):boolean { return window instanceof Window; }

    /**
     * Returns game container.
     * @returns {HTMLCanvasElement}
     */
    getDomContainer() { return this.__domContainer; }

    /**
     * Returns rendering context (of the <canvas>).
     * @returns {CanvasRenderingContext2D}
     */
    getCtx():CanvasRenderingContext2D { return this.__ctx; }

    /** Clears DOM container. */
    clearDomContainer() {
        // TODO: Set inner width and height.
        const htmlContainer = Window.getHtmlContainer();
        this.getCtx().clearRect(0, 0, htmlContainer.clientWidth, htmlContainer.clientHeight);
    }

    /**
     * Initializes instance.
     * @private
     * @throws {Error}
     */
    __init() {
        const htmlContainer = Window.getHtmlContainer();
        const body = Window.getDocumentBody();

        this.__domContainer.width = htmlContainer.clientWidth;
        this.__domContainer.height = htmlContainer.clientHeight;

        body.appendChild(this.__domContainer);
        body.style.overflow = 'hidden';
    }

    /**
     * Returns <html> DOM element.
     * @returns {HTMLElement}
     * @throws {Error}
     * @private
     */
    static getHtmlContainer():HTMLElement {
        const htmlContainer = document.documentElement;
        if (!htmlContainer) throw new Error('Failed to look for <html> DOM element.');
        return htmlContainer;
    }

    /**
     * Returns <body> DOM element.
     * @returns {HTMLElement}
     * @private
     * @throws {Error}
     */
    static getDocumentBody():HTMLElement {
        const body = document.body;
        if (!body) throw new Error('Failed to look for <body> DOM element.');
        return body;
    }

    /**
     * Single instance of the class.
     * @type {null|Window}
     * @private
     */
    static __inst = null;

    /**
     * This says "Use full device width".
     * @type {number}
     */
    static FULL_WIDTH = 1;

    /**
     * This says "Use full device window height".
     * @type {number}
     */
    static FULL_HEIGHT = 2;
}

export default Window;
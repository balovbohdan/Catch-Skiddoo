import Game from "../Game";
import Components from '../GOCS/GOCS.Components';
import Position from "../GOCS/GOCS.Position";
import Size from "../GOCS/GOCS.Size";

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
         * Game object components.
         * @type {null|GOCS.Components}
         * @private
         */
        this.__components = new Components([new Position(x, y), new Size(w, h)]);
    }

    /**
     * Updates game object.
     */
    update() {
        this.__components.update();
    }

    /**
     * Renders game object.
     * @abstract
     */
    render() {}

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

    /**
     * Adds game object component.
     * @param {GOCS.Component|GOCS.Component[]} c
     * @protected
     * @throws {Error}
     */
    _addComponents(c:GOCS.Component|Array<GOCS.Component>) {
        if (!c) throw new Error('Got invalid component(s) to add to game object.');
        if (Array.isArray(c)) c.forEach(i => this.__components.add(i));
        this.__components.add(c);
    }

    /**
     * Returns game object components composite.
     * @returns {GOCS.Components}
     * @protected
     */
    _getComponents() {
        return this.__components;
    }

    /**
     * Returns rendering context (of the <canvas>).
     * @returns {CanvasRenderingContext2D}
     * @protected
     */
    _getCtx() {
        return this.__ctx;
    }
}

export default GameObject;
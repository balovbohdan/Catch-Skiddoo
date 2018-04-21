import Game from "../Game";
import GOCS from '../GOCS/GOCS';
import '../GOCS/GOCS.Components';

/**
 * Game objects superclass.
 * @abstract
 */
class GameObject {
    /**
     * Constructor.
     *
     * @param {Object} [params] Parameters of the game object.
     *     @param {number} [params.x = 0] 'X' position.
     *     @param {number} [params.y = 0] 'Y' position.
     *     @param {number} [params.w = 0] Width.
     *     @param {number} [params.h = 0] Height.
     *     @param {number} [params.speed = 0] Speed.
     */
    constructor(params:Object) {
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
         * Game object parameters.
         * @type {Object}
         * @private
         */
        this.__params = Object.assign(this._getDefParams(), params || {});

        /**
         * Game object components.
         * @type {null|GOCS.Components}
         * @private
         */
        this.__components = new GOCS.Components();

        this._init();
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
     * Returns game object speed.
     * @returns {number}
     */
    getSpeed():number {
        const speedComponent = this._getComponents().get(GOCS.Speed);
        return speedComponent ? speedComponent.getSpeed() : 0;
    }

    /**
     * Says if object instance of "GameObject".
     * @param {*} o Object to check.
     * @returns {boolean}
     */
    static isInst(o):boolean {
        return o instanceof GameObject;
    }

    /**
     * Says if object instance of "GameObject".
     * Strict version.
     * @param {*} o Object to check.
     * @returns {GameObject} Valid game object.
     * @throws {Error}
     */
    static isInstStrict(o):GameObject {
        if (GameObject.isInst(o)) return o;
        throw new Error("Object is not instance of 'GameObject'.");
    }

    /**
     * Returns game object components composite.
     * @returns {GOCS.Components}
     * @protected
     */
    _getComponents():GOCS.Components {
        return this.__components;
    }

    /**
     * Returns rendering context (of the <canvas>).
     * @returns {CanvasRenderingContext2D}
     * @protected
     */
    _getCtx():CanvasRenderingContext2D {
        return this.__ctx;
    }

    /**
     * Returns default game object parameters.
     * @returns {Object}
     * @protected
     */
    _getDefParams():Object {
        return {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            speed: 0
        };
    }

    /**
     * Returns game object parameters.
     * @returns {Object}
     * @protected
     */
    _getParams():Object { return this.__params; }

    /**
     * Initializes instance.
     * @protected
     */
    _init() {}
}

export default GameObject;
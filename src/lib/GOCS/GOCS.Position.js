import GOCS from './GOCS';
import './GOCS.Component';
import GameObject from '../gameObjects/GameObject';

/**
 * Position component of game object.
 * @type {GOCS.Position}
 * @abstract
 */
GOCS.Position = class extends GOCS.Component {
    /**
     * Constructor.
     *
     * @param {GameObject} gameObject Game object that uses this component.
     * @param {{}} [params] Position parameters.
     *     @param {number} [params.x = 0] Initial 'X' coordinate.
     *     @param {number} [params.y = 0] Initial 'Y' coordinate.
     *
     * @throws {Error}
     */
    constructor(gameObject:GameObject, params:{x?:number, y?:number}) {
        super(gameObject);

        /**
         * Component name.
         * @type {string}
         * @private
         */
        this.__name = 'Position';

        /**
         * 'X' coordinate.
         * @type {number}
         * @private
         */
        this.__x = +params.x || 0;

        /**
         * 'Y' coordinate.
         * @type {number}
         * @private
         */
        this.__y = +params.y || 0;
    }

    /**
     * Returns 'X' coordinate.
     * @returns {number}
     */
    x():number { return this.__x; }

    /**
     * Returns 'Y' coordinate.
     * @returns {number}
     */
    y():number { return this.__y; }

    /**
     * Returns game object speed.
     * @returns {number}
     * @private
     */
    __getSpeed():number { return this._getGameObject().getSpeed(); }

    /**
     * Increases 'X' position.
     * @returns {number} Increased 'X' Position.
     * @private
     */
    __increaseX():number { return this.__x += this.__getSpeed(); }

    /**
     * Decreases 'X' position.
     * @returns {number} Decreased 'X' position.
     * @private
     */
    __decreaseX():number { return this.__x -= this.__getSpeed(); }

    /**
     * Increases 'Y' position.
     * @returns {number} Increased 'Y' position.
     * @private
     */
    __increaseY():number { return this.__y += this.__getSpeed(); }

    /**
     * Decreases 'Y' position.
     * @returns {number} Decreased 'Y' position.
     * @private
     */
    __decreaseY():number { return this.__y -= this.__getSpeed(); }

    /**
     * Moves up.
     * @protected
     */
    _moveUp() { this.__decreaseY(); }

    /**
     * Moves down.
     * @protected
     */
    _moveDown() { this.__increaseY(); }

    /**
     * Moves left.
     * @protected
     */
    _moveLeft() { this.__decreaseX(); }

    /**
     * Moves right.
     * @protected
     */
    _moveRight() { this.__increaseX(); }
};

export default GOCS.Position;
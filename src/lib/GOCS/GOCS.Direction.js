import GOCS from './GOCS';
import './GOCS.Component';
import GameObject from "../gameObjects/GameObject";

/**
 * Direction component of the game object.
 * @type {GOCS.Direction}
 */
GOCS.Direction = class extends GOCS.Component {
    /**
     * Constructor.
     *
     * @param {GameObject} gameObject Game object that uses this component.
     * @param {{}} [params] Parameters.
     *     @param {number} [params.direction = GOCS.Direction.BOTTOM_RIGHT] Initial direction. See constants.
     */
    constructor(gameObject:GameObject, params:{direction?:number}) {
        super(gameObject);

        params = params || {};

        /**
         * Game object direction.
         * @type {number}
         * @private
         */
        this.__direction = params.direction || GOCS.Direction.BOTTOM_RIGHT;
    }

    /**
     * Returns game object direction.
     * @returns {number}
     */
    get():number { return this.__direction; }

    /**
     * Sets game object direction.
     * @param {number} direction Direction. See constants.
     * @returns {number} Current game object direction.
     */
    set(direction):number { return this.__direction = direction; }
};

/**
 * Game object direction 'TOP LEFT'.
 * @type {number}
 */
GOCS.Direction.TOP_LEFT = 1;

/**
 * Game object direction 'TOP RIGHT'.
 * @type {number}
 */
GOCS.Direction.TOP_RIGHT = 2;

/**
 * Game object direction 'BOTTOM LEFT'.
 * @type {number}
 */
GOCS.Direction.BOTTOM_LEFT = 3;

/**
 * Game object direction 'BOTTOM RIGHT'.
 * @type {number}
 */
GOCS.Direction.BOTTOM_RIGHT = 4;

export default GOCS.Direction;
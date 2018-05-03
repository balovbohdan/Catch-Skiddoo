import GOCS from './GOCS';
import GameObject from '../gameObjects/GameObject';

/**
 * Size component of game object.
 * @type {GOCS.Size}
 */
GOCS.Size = class extends GOCS.Component {
    /**
     * Constructor.
     * @param {GameObject} gameObject Game object that uses this component.
     * @param {number} [w = 0] Game object width.
     * @param {number} [h = 0] Game object height.
     * @throws {Error}
     */
    constructor(gameObject:GameObject, w, h) {
        super(gameObject);

        /**
         * Component name.
         * @type {string}
         * @private
         */
        this.__name = 'Size';

        /**
         * Game object width.
         * @type {number}
         * @private
         */
        this.__w = w || 0;

        /**
         * Game object height;
         * @type {number}
         * @private
         */
        this.__h = h || 0;
    }

    /**
     * Updates component.
     */
    update() {}

    /**
     * Returns game int width.
     * @returns {number}
     */
    w():number { return this.__w; }

    /**
     * Returns game object height.
     * @returns {number}
     */
    h():number { return this.__h; }
};

export default GOCS.Size;
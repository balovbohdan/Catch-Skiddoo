import GOCS from './GOCS';

/**
 * Size component of game object.
 * @type {GOCS.Size}
 */
GOCS.Size = class extends GOCS.Component {
    /**
     * Constructor.
     * @param {int} [w = 0] Game object width.
     * @param {int} [h = 0] Game object height.
     */
    constructor(w, h) {
        super();

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
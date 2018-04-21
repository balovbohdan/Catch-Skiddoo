import GOCS from './GOCS';
import Component from './GOCS.Component';

/**
 * Position component of game object.
 * @type {GOCS.Position}
 */
GOCS.Position = class extends Component {
    /**
     * Constructor.
     * @param {int} [x = 0] Initial 'X' coordinate.
     * @param {int} [y = 0] Initial 'Y' coordinate.
     */
    constructor(x, y) {
        super();

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
        this.__x = x || 0;

        /**
         * 'Y' coordinate.
         * @type {number}
         * @private
         */
        this.__y = y || 0;
    }

    /**
     * Updates component.
     */
    update() {
        ++this.__x;
        ++this.__y;
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
};

export default GOCS.Position;
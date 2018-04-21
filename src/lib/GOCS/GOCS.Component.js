import GOCS from './GOCS';

/**
 * Game object components superclass.
 * There are can be: 'PositionComponent', 'TextureComponent', etc.
 * @type {GOCS.Component}
 * @abstract
 */
GOCS.Component = class {
    /**
     * Constructor.
     */
    constructor() {
        /**
         * Component name.
         * @type {string}
         * @private
         */
        this.__name = 'Component';
    }

    /**
     * Updates component's state.
     * @abstract
     */
    update() {}

    /**
     * Returns name of the component.
     * @returns {string}
     */
    name():string { return this.__name; }
};

export default GOCS.Component;
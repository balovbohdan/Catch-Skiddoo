import GOCS from './GOCS';
import GameObject from '../gameObjects/GameObject';

/**
 * Game object components superclass.
 * There are can be: 'PositionComponent', 'TextureComponent', etc.
 * @type {GOCS.Component}
 * @abstract
 */
GOCS.Component = class {
    /**
     * Constructor.
     * @throws {Error}
     */
    constructor(gameObject:GameObject) {
        /**
         * Component name.
         * @type {string}
         * @private
         */
        this.__name = 'Component';

        /**
         * Game object that uses this component.
         * @type {GameObject}
         * @private
         */
        this.__gameObject = GameObject.isInstStrict(gameObject);
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

    /**
     * Returns game object that uses this component.
     * @returns {GameObject}
     * @protected
     */
    _getGameObject():GameObject { return this.__gameObject; }
};

export default GOCS.Component;
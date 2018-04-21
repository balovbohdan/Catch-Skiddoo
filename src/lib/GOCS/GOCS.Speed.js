import GOCS from './GOCS';
import './GOCS.Component';
import GameObject from '../gameObjects/GameObject';

/**
 * Game object speed component.
 * @type {GOCS.Speed}
 */
GOCS.Speed = class extends GOCS.Component {
    /**
     * Game object speed.
     * @param {GameObject} gameObject Game object that uses this component.
     * @param {number} [speed = 0] Speed.
     */
    constructor(gameObject:GameObject, speed:number) {
        super(gameObject);

        /**
         * Game object speed.
         * @type {number}
         * @private
         */
        this.__speed = speed || 0;
    }

    /**
     * Updates component.
     */
    update() {}

    /**
     * Returns speed.
     * @returns {number}
     */
    getSpeed():number { return this.__speed; }
};

export default GOCS.Speed;
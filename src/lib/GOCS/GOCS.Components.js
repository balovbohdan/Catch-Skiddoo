import GOCS from './GOCS';
import Component from './GOCS.Component';

/**
 * Game object components composite.
 * @type {GOCS.Components}
 */
GOCS.Components = class {
    /**
     * Constructor.
     * @param {Array<GOCS.Component>} [c] Initial game object components.
     */
    constructor(c:Array<GOCS.Component>) {
        /**
         * Game object components.
         * @type {GOCS.Component[]}
         * @private
         */
        this.__components = c || [];
    }

    /**
     * Updates game object components.
     */
    update() {
        this.__components.forEach(c => c.update());
    }

    /**
     * Adds new game object component.
     * @param {GOCS.Component} c
     */
    add(c) {
        this.__components.push(c);
    }

    /**
     * Returns components from the composite.
     * @param {Function} T Type of the aim game object component. (Eg., GOCS.Position).
     * @returns {GOCS.Component|null}
     */
    get(T) {
        const c = this.__components;
        for (let i of c) if (i instanceof T) return i;
        return null;
    }

    /**
     * Goes through the components.
     * @param {Function} f
     */
    forEach(f) {
        this.__components.forEach(f);
    }
};

export default GOCS.Components;
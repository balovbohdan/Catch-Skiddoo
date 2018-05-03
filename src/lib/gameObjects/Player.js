import GameObject from './GameObject';

import GOCS from '../GOCS/GOCS';
import '../GOCS/GOCS.PlayerPosition';
import '../GOCS/GOCS.Size';
import '../GOCS/GOCS.Speed';
import '../GOCS/GOCS.Direction';

/**
 * Player.
 */
class Player extends GameObject {
    /**
     * Constructor.
     *
     * @param {{}} [params] Parameters.
     *     @param {number} [params.x] 'X' coordinate.
     *     @param {number} [params.y] 'Y' coordinate.
     *     @param {number} [params.w] Width.
     *     @param {number} [params.h] Height.
     *     @param {number} [params.direction] Initial direction.
     */
    constructor(params:{}) { super(params); }

    /**
     * Renders game object.
     * @override
     */
    render() { super.render(); }

    /**
     * Returns default player parameters.
     * @returns {{}}
     * @private
     */
    _getDefParams():{} { return Object.assign(super._getDefParams(), { speed: 2 }); }

    /**
     * Returns sequence of game object direction and
     * coordinates of the game object texture.
     * @returns {Object<Array<number>>} Format: <em>{[column, row], ...}</em>.
     * @private
     */
    __getDirectionsToTextureCoords():Object<Array> {
        const s = {};
        const D = GOCS.Direction;

        s[D.BOTTOM_RIGHT] = [0, 0];
        s[D.BOTTOM_LEFT] = [1, 0];
        s[D.TOP_LEFT] = [2, 0];
        s[D.TOP_RIGHT] = [3, 0];

        return s;
    }

    /**
     * Returns coordinates of the game object texture
     * on the game object sprite sheet.
     * @returns {Array}
     * @protected
     * @override
     */
    __getTextureCoords() {
        const directionComponent = this.__getComponents().get(GOCS.Direction);
        if (!directionComponent) return [0, 0];
        const direction = directionComponent.get();
        return this.__getDirectionsToTextureCoords()[direction];
    }

    /**
     * Initializes instance.
     * @private
     * @override
     */
    _init() {
        const params = this.__getParams();
        const components = this.__getComponents();

        components.add(new GOCS.PlayerPosition(this, { x: params.x, y: params.y }));
        components.add(new GOCS.Size(this, params.w, params.h));
        components.add(new GOCS.Speed(this, params.speed));
        components.add(new GOCS.Direction(this, params.direction));
    }
}

export default Player;
import GameObject from './GameObject';

import GOCS from '../GOCS/GOCS';
import '../GOCS/GOCS.PlayerPosition';
import '../GOCS/GOCS.Size';
import '../GOCS/GOCS.Speed';

/**
 * Player.
 */
class Player extends GameObject {
    /**
     * Constructor.
     * @param {number} [x] 'X' coordinate.
     * @param {number} [y] 'Y' coordinate.
     * @param {number} [w] Width.
     * @param {number} [h] Height.
     */
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    /**
     * Renders game object.
     * @override
     */
    render() {
        const ctx = this._getCtx();
        const components = this._getComponents();
        const position = components.get(GOCS.PlayerPosition);
        const size = components.get(GOCS.Size);
        ctx.fillStyle = 'orangered';
        ctx.fillRect(position.x(), position.y(), size.w(), size.h());
    }

    /**
     * Returns default player parameters.
     * @returns {Object}
     * @private
     */
    _getDefParams():Object {
        return Object.assign(super._getDefParams(), { speed: 2 });
    }

    /**
     * Initializes instance.
     * @private
     * @override
     */
    _init() {
        const params = this._getParams();
        const components = this._getComponents();
        components.add(new GOCS.PlayerPosition(this, params.x, params.y));
        components.add(new GOCS.Size(this, params.w, params.h));
        components.add(new GOCS.Speed(this, params.speed));
    }
}

export default Player;
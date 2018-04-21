import GameObject from './GameObject';
import Position from '../GOCS/GOCS.Position';
import Size from '../GOCS/GOCS.Size';

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
     */
    render() {
        const ctx = this._getCtx();
        const components = this._getComponents();
        const position = components.get(Position);
        const size = components.get(Size);
        // if (!position || !size) return;
        ctx.fillStyle = 'orangered';
        ctx.fillRect(position.x(), position.y(), size.w(), size.h());
    }
}

export default Player;
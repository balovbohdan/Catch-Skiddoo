import GameObject from "./GameObject";

/**
 * Player.
 */
class Player extends GameObject {
    /**
     * Constructor.
     * @param {int} x
     * @param {int} y
     * @param {int} w
     * @param {int} h
     */
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }
}

export default Player;
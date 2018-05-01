import Game from '../Game';

import EventsSystem from '../EventsSystem/EventsSystem';
import '../EventsSystem/EventsSystem.Names';
import '../EventsSystem/EventsSystem.KeyCodes';
import '../EventsSystem/EventsSystem.KeyCodesToNames';

import GOCS from './GOCS';
import './GOCS.Position';
import GameObject from '../gameObjects/GameObject';

/**
 * Player position component.
 * @type {GOCS.PlayerPosition}
 */
GOCS.PlayerPosition = class extends GOCS.Position {
    /**
     * Constructor.
     * @param {GameObject} gameObject Game object that uses this component.
     * @param {int} [x = 0] Initial 'X' coordinate.
     * @param {int} [y = 0] Initial 'Y' coordinate.
     * @throws {Error}
     */
    constructor(gameObject:GameObject, x, y) {
        super(gameObject, x, y);

        /**
         * Component name.
         * @type {string}
         * @private
         */
        this.__name = 'PlayerPosition';

        /**
         * Events names that is going to be used
         * to control this game object.
         * @type {Object<Array>}
         * @private
         */
        this.__events = {
            keydown: [
                EventsSystem.KeyCodes.ARROW_LEFT,
                EventsSystem.KeyCodes.ARROW_RIGHT,
                EventsSystem.KeyCodes.ARROW_UP,
                EventsSystem.KeyCodes.ARROW_DOWN
            ]
        };
    }

    /**
     * Updates player position.
     */
    update() {
        this.__processKeydownEvts();
    }

    /**
     * Processes 'keydown' events.
     * Uses data from the 'EventsSystem.CurrentEvents' object.
     * @private
     */
    __processKeydownEvts() {
        const currEvts = Game.getInst().getCurrentEvents();

        this.__events[EventsSystem.Names.KEYDOWN].forEach(keyCode => {
            if (!currEvts.isKeyDown(keyCode)) return;

            this.__processMovement(keyCode);
            this.__processDirection(keyCode);
        });
    }

    /**
     * Processes changing of the player direction events.
     * @param {number} keyCode Code of the key that player pressed.
     * @private
     */
    __processDirection(keyCode:number) {
        const KEYS = EventsSystem.KeyCodes;
        const DIRS = GOCS.Direction;

        // [BB: HERE.]
    }

    /**
     * Processes movement events of the player.
     * @param {number} keyCode Code of the key that player pressed.
     * @private
     */
    __processMovement(keyCode:number) {
        const keyShortName = EventsSystem.KeyCodesToNames.codeToShortName(keyCode);
        const mover = this['_move' + keyShortName];
        if (typeof mover === 'function') mover.call(this);
    }
};

export default GOCS.PlayerPosition;
import EventsSystem from './EventsSystem';

/**
 * Class-helper to work with names of events.
 * @type {EventsSystem.Names}
 */
EventsSystem.Names = class {
    /**
     * Returns names of available events.
     * @returns {Array}
     */
    static getAll() {
        return  [
            EventsSystem.Names.KEYUP,
            EventsSystem.Names.KEYDOWN,
            EventsSystem.Names.CLICK,
            EventsSystem.Names.TOUCH
        ];
    }

    /**
     * Says if event name if available.
     * @param {string} name Name of event.
     * @returns {boolean}
     */
    static validate(name) {
        return EventsSystem.Names.getAll().includes(name);
    }

    /**
     * Says if event name is available.
     * Strict version.
     * @param {string} name Name of event.
     * @returns {string} Valid name of event.
     * @throws {Error}
     */
    static validateStrict(name) {
        if (EventsSystem.Names.validate(name)) return name;
        throw new Error('Invalid event name.');
    }
};

/**
 * Event 'keyup'.
 * @type {string}
 */
EventsSystem.Names.KEYUP = 'keyup';

/**
 * Event 'keydown'.
 * @type {string}
 */
EventsSystem.Names.KEYDOWN = 'keydown';

/**
 * Event 'click'.
 * @type {string}
 */
EventsSystem.Names.CLICK = 'click';

/**
 * Event 'touch'.
 * @type {string}
 */
EventsSystem.Names.TOUCH = 'touch';

export default EventsSystem.Names;
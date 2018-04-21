import EventsSystem from './EventsSystem';
import './EventsSystem.Names';

/**
 * Current game events.
 * @type {EventsSystem.CurrentEvents}
 */
EventsSystem.CurrentEvents = class {
    /**
     * Constructor.
     */
    constructor() {
        /**
         * Current events.
         * @type {Object<Array<Event>>}
         * @private
         */
        this.__events = {};

        /**
         * Pressed keys.
         * @type {Array<number>}
         * @private
         */
        this.__downKeys = [];
    }

    /**
     * Adds current game event.
     * @param {string} evtName event name. (See 'EventsSystem.Names' class.)
     * @param {Event} evt Current event.
     * @returns {EventsSystem.CurrentEvents}
     * @throws {Error}
     */
    add(evtName, evt:Event):EventsSystem.CurrentEvents {
        EventsSystem.Names.validateStrict(evtName);
        if (!(evt instanceof Event)) throw new Error('Failed to add invalid current event.');
        this.__events[evtName] = this.__events[evtName] || [];
        this.__events[evtName].push(evt);
        this.__processEvt(evtName, evt);
        return this;
    }

    /**
     * Returns current events by event name.
     * @param {string} evtName Name of events. (See 'EventsSystem.Names' class.)
     * @returns {Array<Event>|Array}
     * @throws {Error}
     */
    get(evtName:string):Array<Event>|Array {
        EventsSystem.Names.validateStrict(evtName);
        return this.__events[evtName] || [];
    }

    /**
     * Flushes current game events.
     * @returns {EventsSystem.CurrentEvents}
     */
    flush():EventsSystem.CurrentEvents {
        this.__events = [];
        return this;
    }

    /**
     * Says if keyboard key is pressed.
     * @param {number} keyCode Code of key.
     * @returns {boolean}
     */
    isKeyDown(keyCode):boolean {
        return this.__downKeys.includes(keyCode);
    }

    /**
     * Says if keyboard key is not pressed.
     * @param {number} keyCode Code of key.
     * @returns {boolean}
     */
    isKeyUp(keyCode):boolean {
        return !this.isKeyDown(keyCode);
    }

    /**
     * Processes event.
     * Saves some meta data of the event if it is needed.
     * @param {string} evtName Event name. (See 'EventsSystem.Events' class.)
     * @param {Event} evt Event object.
     * @private
     */
    __processEvt(evtName:string, evt:Event) {
        const f = this['__process' + evtName[0].toUpperCase() + evtName.substr(1)];
        if (typeof f === 'function') f.call(this, evt);
    }

    /**
     * Processes 'keyup' event.
     * Removes code of the key from local storage.
     * @param {KeyboardEvent} evt
     * @private
     */
    __processKeyup(evt:KeyboardEvent) {
        const keyCode = evt.keyCode;
        const i = this.__downKeys.indexOf(keyCode);
        if (~i) this.__downKeys.splice(i, 1);
    }

    /**
     * Processes 'keydown' event.
     * Saves code of the pressed key locally.
     * @param {KeyboardEvent} evt
     * @private
     */
    __processKeydown(evt:KeyboardEvent) {
        const keyCode = evt.keyCode;
        if (this.__downKeys.includes(keyCode)) return;
        this.__downKeys.push(keyCode);
    }
};

export default EventsSystem.CurrentEvents;
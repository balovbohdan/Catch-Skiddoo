import Game from '../Game';
import EventsSystem from './EventsSystem';
import './EventsSystem.Names';

/**
 * Handler of game events.
 * This class 'catches' events and tries to process them.
 * @type {EventsSystem.Handler}
 */
EventsSystem.Handler = class {
    /**
     * Instance constructor.
     */
    constructor() {
        /**
         * Names of handled events.
         * It is needed to prevent poly-handling of the same events.
         * @type {Array}
         * @private
         */
        this.__handledEvts = [];

        /**
         * Events listeners.
         * @type {Object<Array<Function>>}
         * @private
         */
        this.__listeners = {};
    }

    /**
     * Adds event listener.
     * @param {string} evtName Event name. (See 'EventsSystem.Names' class.)
     * @param {Function} listener Event listener.
     * @returns {EventsSystem.Handler}
     * @throws {Error}
     */
    addListener(evtName, listener) {
        EventsSystem.Names.validateStrict(evtName);
        if (typeof listener !== 'function') throw new Error('Got invalid event listener.');
        this.__listeners[evtName] = this.__listeners[evtName] || [];
        this.__listeners[evtName].push(listener);
        return this;
    }

    /**
     * Applies events handlers.
     */
    handle() {
        EventsSystem.Names.getAll().forEach(this.__handleEvent.bind(this));
    }

    /**
     * Stops listening of the handled events.
     */
    unhandle() {
        this.__listeners = {};
    }

    /**
     * Says if event handler hast been already applied.
     * @param {string} evtName name of event
     * @returns {boolean}
     * @private
     */
    __evtWasHandled(evtName) {
        return this.__handledEvts.includes(evtName);
    }

    /**
     * Returns name of event handler.
     * @param {string} evtName Name of event
     * @returns {string}
     * @private
     */
    static __getHandlerName(evtName) {
        return '__handle' + evtName[0].toUpperCase() + evtName.substr(1);
    }

    /**
     * Tries to apply event handler.
     * @param {string} evtName Name of event.
     * @private
     */
    __handleEvent(evtName) {
        try {
            EventsSystem.Names.validateStrict(evtName);
            if (this.__evtWasHandled(evtName)) return;
            document.addEventListener(evtName, this.__getEventHandler(evtName));
        } catch (e) {
            console.warn(`Failed to handle '` + evtName + `' event.`);
        }
    }

    /**
     * Returns event handler that processes certain event.
     * @param {string} evtName Event name
     * @returns {Function}
     * @private
     * @throws {Error}
     */
    __getEventHandler(evtName) {
        EventsSystem.Names.validateStrict(evtName);

        return (evt:Event) => {
            const listeners = this.__listeners[evtName];
            if (listeners) listeners.forEach(l => l(evt));
            Game.getInst().getCurrentEvents().add(evtName, evt);
        };
    }
};

export default EventsSystem.Handler;
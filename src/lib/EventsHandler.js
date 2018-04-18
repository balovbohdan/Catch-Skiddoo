/**
 * Handler of game events.
 * This class "catches" events and tries to process them.
 */
class EventsHandler {
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
    }

    /**
     * Applies events handlers.
     */
    handleEvents() {
        this.__getEvents().forEach(this.__handleEvent.bind(this));
    }

    /**
     * Stops events handling.
     */
    unhandleEvents() {

    }

    /**
     * Says if event handler hast been already applied.
     * @param {string} evt name of event
     * @returns {boolean}
     * @private
     */
    __evtWasHandled(evt) {
        return this.__handledEvts.includes(evt);
    }

    /**
     * Returns name of event handler.
     * @param {string} evt Name of event
     * @returns {string}
     * @private
     */
    static __getHandlerName(evt) {
        return "__handle" + evt[0].toUpperCase() + evt.substr(1);
    }

    /**
     * Returns handler of event.
     * @param {string} evt Name of event.
     * @returns {Function}
     * @private
     * @throws {Error}
     */
    __getHandler(evt) {
        let handler = this[EventsHandler.__getHandlerName(evt)];
        if (typeof handler !== "function") throw new Error("Failed at looking for event handler.");
        return handler;
    }

    /**
     * Tries to apply event handler.
     * @param {string} evt Name of event.
     * @private
     */
    __handleEvent(evt) {
        try {
            if (this.__evtWasHandled(evt)) return;
            this.__getHandler(evt)();
        } catch (e) {
            console.warn("Failed at handling '" + evt + "' event. No handler found for this event.");
        }
    }

    /**
     * Handles "keyup" events.
     * @private
     */
    __handleKeyup() {
        console.log("'Keyup' event handler is applied.");
    }

    /**
     * Handles "keydown" events.
     * @private
     */
    __handleKeydown() {
        console.log("'Keydown' event handler is applied.");
    }

    /**
     * Handles "click" events.
     * @private
     */
    __handleClick() {
        console.log("'Click' event handler is applied.");
    }

    /**
     * Handles "touch" events.
     * @private
     */
    __handleTouch() {
        console.log("'Touch' event handler is applied.");
    }

    /**
     * Returns names of events this instance works with.
     * @returns {Array}
     * @private
     */
    __getEvents() {
        return  [
            EventsHandler.KEYUP,
            EventsHandler.KEYDOWN,
            EventsHandler.CLICK,
            EventsHandler.TOUCH
        ];
    }
}

/**
 * Event "keyup".
 * @type {string}
 */
EventsHandler.KEYUP = "keyup";

/**
 * Event "keydown".
 * @type {string}
 */
EventsHandler.KEYDOWN = "keydown";

/**
 * Event "click".
 * @type {string}
 */
EventsHandler.CLICK = "click";

/**
 * Event "touch".
 * @type {string}
 */
EventsHandler.TOUCH = "touch";

export default EventsHandler
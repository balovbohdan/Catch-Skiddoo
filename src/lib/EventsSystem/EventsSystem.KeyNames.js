import EventsSystem from './EventsSystem';

/**
 * Names of the keyboard keys.
 * @type {EventsSystem.KeyNames}
 */
EventsSystem.KeyNames = class {};

/**
 * Arrow left.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_LEFT = 'ArrowLeft';

/**
 * Arrow left. Short variant.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_LEFT_SHORT = 'Left';

/**
 * Arrow up.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_UP = 'ArrowUp';

/**
 * Arrow up. Short variant.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_UP_SHORT = 'Up';

/**
 * Arrow right.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_RIGHT = 'ArrowRight';

/**
 * Arrow right. Short variant.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_RIGHT_SHORT = 'Right';

/**
 * Arrow down.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_DOWN = 'ArrowDown';

/**
 * Arrow down. Short version.
 * @type {string}
 */
EventsSystem.KeyNames.ARROW_DOWN_SHORT = 'Down';

export default EventsSystem.KeyNames;
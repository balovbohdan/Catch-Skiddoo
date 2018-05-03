import EventsSystem from './EventsSystem';
import './EventsSystem.KeyCodes';
import './EventsSystem.KeyNames';

/**
 * Class that makes sequence between keyboard codes and names.
 * @type {EventsSystem.KeyCodesToNames}
 */
EventsSystem.KeyCodesToNames = class {
    /**
     * Returns keyboard key code by name.
     * @param {string} keyName Keyboard key name.
     * @returns {number} Keyboard key code.
     * @throws {Error}
     */
    static nameToCode(keyName:string):number {
        const keyCode = EventsSystem.KeyCodes[keyName];
        if (!keyCode) throw new Error(`Failed to look for keyboard key code by '${keyName}' name.`);
        return keyCode;
    }

    /**
     * Returns keyboard key name by code.
     * @param {number} keyCode Keyboard key code.
     * @returns {string} Keyboard key name.
     * @throws {Error}
     */
    static codeToName(keyCode:number):string {
        const keyName = EventsSystem.KeyCodesToNames.getNameDataByCode(keyCode).name;
        if (!keyName) throw new Error(`Failed to look for keyboard key name by '${keyCode}' code.`);
        return keyName;
    }

    /**
     * Returns keyboard key short name by code.
     * @param {number} keyCode Keyboard key code.
     * @returns {string} Keyboard key name.
     * @throws {Error}
     */
    static codeToShortName(keyCode:number):string {
        const keyShortName = EventsSystem.KeyCodesToNames.getNameDataByCode(keyCode).shortName;
        if (!keyShortName) throw new Error(`Failed to look for keyboard key short name by '${keyCode}' code.`);
        return keyShortName;
    }

    /**
     * Returns keyboard key data.
     * @param {number} keyCode Keyboard key code.
     * @returns {{}} Keyboard key data.
     */
    static getNameDataByCode(keyCode:number):{} {
        const keyNameData = EventsSystem.KeyCodesToNames.__getKeysData()[keyCode];
        if (!keyNameData) throw new Error(`Failed to look for keyboard key data by '${keyCode}' code.`);
        return keyNameData;
    }

    /**
     * Returns keyboard keys data.
     * @returns {{}}
     * @private
     */
    static __getKeysData():{} {
        const NAMES = EventsSystem.KeyNames;

        return {
            37: {
                name: NAMES.ARROW_LEFT,
                shortName: NAMES.ARROW_LEFT_SHORT
            },
            38: {
                name: NAMES.ARROW_UP,
                shortName: NAMES.ARROW_UP_SHORT
            },
            39: {
                name: NAMES.ARROW_RIGHT,
                shortName: NAMES.ARROW_RIGHT_SHORT
            },
            40: {
                name: NAMES.ARROW_DOWN,
                shortName: NAMES.ARROW_DOWN_SHORT
            }
        };
    }
};

export default EventsSystem.KeyCodesToNames;
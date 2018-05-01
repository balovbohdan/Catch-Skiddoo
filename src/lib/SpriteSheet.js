/**
 * Controls sprite sheet.
 */
class SpriteSheet {
    /**
     * Image SRC.
     * @param {string} src
     */
    constructor(src:string) {
        /**
         * Image SRC.
         * @type {string}
         * @private
         */
        this.__src = src;

        /**
         * Sprite sheet image.
         * @type {HTMLImageElement}
         * @private
         */
        this.__img = new Image();

        /**
         * Loading promise of the sprite sheet.
         * @type {null|Promise}
         * @private
         */
        this.__loadingPromise = null;
    }

    /**
     * Returns sprite sheet image.
     * @returns {HTMLImageElement}
     */
    get():HTMLImageElement { return this.__img; }

    /**
     * Loads sprite sheet image.
     * @returns {Promise<SpriteSheet>}
     */
    load():Promise<SpriteSheet> {
        if (this.__loadingPromise) return this.__loadingPromise;

        return this.__loadingPromise = new Promise(function (success) {
            this.__img.onload = function () { return success(this); }.bind(this);
            this.__img.src = this.__src;
        }.bind(this));
    }

    /**
     * Returns path to the root of sprite sheet.
     * @returns {string}
     */
    static getGameObjectsRoot():string { return '/assets/gameObjects/'; }

}

export default SpriteSheet;
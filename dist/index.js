(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _Game = require("./lib/Game");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();
game.start();
},{"./lib/Game":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handler of game events.
 * This class "catches" events and tries to process them.
 */
var EventsHandler = function () {
  /**
   * Instance constructor.
   */
  function EventsHandler() {
    _classCallCheck(this, EventsHandler);

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


  _createClass(EventsHandler, [{
    key: "handleEvents",
    value: function handleEvents() {
      this.__getEvents().forEach(this.__handleEvent.bind(this));
    }

    /**
     * Stops events handling.
     */

  }, {
    key: "unhandleEvents",
    value: function unhandleEvents() {}

    /**
     * Says if event handler hast been already applied.
     * @param {string} evt name of event
     * @returns {boolean}
     * @private
     */

  }, {
    key: "__evtWasHandled",
    value: function __evtWasHandled(evt) {
      return this.__handledEvts.includes(evt);
    }

    /**
     * Returns name of event handler.
     * @param {string} evt Name of event
     * @returns {string}
     * @private
     */

  }, {
    key: "__getHandler",


    /**
     * Returns handler of event.
     * @param {string} evt Name of event.
     * @returns {Function}
     * @private
     * @throws {Error}
     */
    value: function __getHandler(evt) {
      var handler = this[EventsHandler.__getHandlerName(evt)];
      if (typeof handler !== "function") throw new Error("Failed at looking for event handler.");
      return handler;
    }

    /**
     * Tries to apply event handler.
     * @param {string} evt Name of event.
     * @private
     */

  }, {
    key: "__handleEvent",
    value: function __handleEvent(evt) {
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

  }, {
    key: "__handleKeyup",
    value: function __handleKeyup() {
      console.log("'Keyup' event handler is applied.");
    }

    /**
     * Handles "keydown" events.
     * @private
     */

  }, {
    key: "__handleKeydown",
    value: function __handleKeydown() {
      console.log("'Keydown' event handler is applied.");
    }

    /**
     * Handles "click" events.
     * @private
     */

  }, {
    key: "__handleClick",
    value: function __handleClick() {
      console.log("'Click' event handler is applied.");
    }

    /**
     * Handles "touch" events.
     * @private
     */

  }, {
    key: "__handleTouch",
    value: function __handleTouch() {
      console.log("'Touch' event handler is applied.");
    }

    /**
     * Returns names of events this instance works with.
     * @returns {Array}
     * @private
     */

  }, {
    key: "__getEvents",
    value: function __getEvents() {
      return [EventsHandler.KEYUP, EventsHandler.KEYDOWN, EventsHandler.CLICK, EventsHandler.TOUCH];
    }
  }], [{
    key: "__getHandlerName",
    value: function __getHandlerName(evt) {
      return "__handle" + evt[0].toUpperCase() + evt.substr(1);
    }
  }]);

  return EventsHandler;
}();

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

exports.default = EventsHandler;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObjects = require("./GameObjects");

var _GameObjects2 = _interopRequireDefault(_GameObjects);

var _Player = require("./Player");

var _Player2 = _interopRequireDefault(_Player);

var _EventsHandler = require("./EventsHandler");

var _EventsHandler2 = _interopRequireDefault(_EventsHandler);

var _Window = require("./Window");

var _Window2 = _interopRequireDefault(_Window);

var _GameLoop = require("./GameLoop");

var _GameLoop2 = _interopRequireDefault(_GameLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Main game class.
 * This is mediator of game parts.
 * Singletone.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 0.0.1
 */
var Game = function () {
  /**
   * Instance constructor.
   */
  function Game() {
    _classCallCheck(this, Game);

    if (Game.isInst(Game.__inst)) return Game.__inst;
    Game.__inst = this;

    /**
     * Is game running right now?
     * @type {boolean}
     * @private
     */
    this.__running = false;

    /**
     * Game objects composite.
     * @type {GameObjects}
     * @private
     */
    this.__gameObjects = new _GameObjects2.default();

    /**
     * Instance that controls events.
     * @type {EventsHandler}
     * @private
     */
    this.__eventsHandler = new _EventsHandler2.default();

    /**
     * Game window instance.
     * @type {Window}
     * @private
     */
    this.__window = new _Window2.default();

    /**
     * Game loop instance.
     * @type {GameLoop}
     * @private
     */
    this.__gameLoop = new _GameLoop2.default();

    this.__init();
  }

  /**
   * Starts game.
   * @returns {Game}
   */


  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.__running = true;
      this.__handleEvents();
      this.__gameLoop.start();
      return this;
    }

    /**
     * Stops game.
     * @returns {Game}
     */

  }, {
    key: "stop",
    value: function stop() {
      this.__running = false;
      this.__unhandleEvents();
      return this;
    }

    /**
     * Returns game window instance.
     * @returns {Window}
     */

  }, {
    key: "getWindow",
    value: function getWindow() {
      return this.__window;
    }

    /**
     * Says if game is running right now.
     * @returns {boolean}
     */

  }, {
    key: "getRunning",
    value: function getRunning() {
      return this.__running;
    }

    /**
     * Says if object is instance of "Game".
     * @param {Object} game
     * @returns {boolean}
     */

  }, {
    key: "__update",


    /**
     * Updates game objects states.
     * @private
     */
    value: function __update() {
      this.__gameObjects.update();
    }

    /**
     * Renders game objects.
     * @private
     */

  }, {
    key: "__render",
    value: function __render() {
      this.getWindow().clearDomContainer();
      this.__gameObjects.render();
    }

    /**
     * Applies events handlers.
     * @private
     */

  }, {
    key: "__handleEvents",
    value: function __handleEvents() {
      this.__eventsHandler.handleEvents();
    }

    /**
     * Stops events handling.
     * @private
     */

  }, {
    key: "__unhandleEvents",
    value: function __unhandleEvents() {
      this.__eventsHandler.unhandleEvents();
    }

    /**
     * Initializes instance.
     * @private
     */

  }, {
    key: "__init",
    value: function __init() {
      this.__gameObjects.add(new _Player2.default(10, 10, 30, 30));

      this.__gameLoop.addListener(function () {
        this.__render();
        this.__update();
      }.bind(this));
    }
  }], [{
    key: "isInst",
    value: function isInst(game) {
      return game instanceof Game;
    }

    /**
     * Returns single instance of the current class.
     * @returns {Game}
     */

  }, {
    key: "getInst",
    value: function getInst() {
      return new Game();
    }
  }]);

  return Game;
}();

/**
 * Single instance of the class.
 * @type {null|Game}
 * @private
 */


Game.__inst = null;

exports.default = Game;
},{"./EventsHandler":2,"./GameLoop":4,"./GameObjects":6,"./Player":7,"./Window":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = require("./Game");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class that organizes game loop.
 */
var GameLoop = function () {
  /**
   * Constructor.
   */
  function GameLoop() {
    _classCallCheck(this, GameLoop);

    /**
     * Main game object.
     * @type {Game}
     */
    this.__game = _Game2.default.getInst();

    /**
     * Game loop listeners.
     */
    this.__listeners = [];

    /**
     * ID of the game loop.
     * It is needed to cancel game loop.
     * @type {number}
     * @private
     */
    this.__loopID = 0;

    /**
     * Game render FPS.
     * @type {number}
     * @private
     */
    this.__fps = 60;
  }

  /**
   * Starts game loop.
   * @throws {Error}
   * @returns {GameLoop}
   */


  _createClass(GameLoop, [{
    key: "start",
    value: function start() {
      console.log("Start game loop.");
      if (!this.__listeners.length) throw new Error("There are no listeners for game loop!");
      if (!this.__game.getRunning()) throw new Error("Forbidden to start game loop. Game is not running.");
      this.__start();
      return this;
    }

    /**
     * Stops game loop.
     * @returns {GameLoop}
     */

  }, {
    key: "stop",
    value: function stop() {
      console.log("Stop game loop.");
      if (this.__loopID) window.cancelAnimationFrame(this.__loopID);
      if (this.__game.getRunning()) this.__game.stop();
      return this;
    }

    /**
     * Adds listener to the game loop listeners.
     * @param {Function} listener
     * @returns {GameLoop}
     * @throws {Error}
     */

  }, {
    key: "addListener",
    value: function addListener(listener) {
      if (typeof listener !== "function") throw new Error("Got invalid game loop listener.");
      this.__listeners.push(listener);
      return this;
    }

    /**
     * Starts game loop.
     * Helper for the "start()" method.
     * @private
     */

  }, {
    key: "__start",
    value: function __start() {
      var frameDelay = 1000 / this.__fps;

      (function loop() {
        if (!this.__game.getRunning()) return this.stop();
        var frameStart = Date.now();
        this.__getLoopCallback()();

        var framePassedTime = Date.now() - frameStart,
            nextFrameDelay = Math.max(frameDelay - framePassedTime, frameDelay);

        return setTimeout(this.__callLoopFunc.bind(this, loop.bind(this)), nextFrameDelay);
      }).bind(this)();
    }

    /**
     * Returns game loop callback.
     * This callback will be used to render game.
     * Calls all client listeners.
     * @returns {Function}
     * @private
     */

  }, {
    key: "__getLoopCallback",
    value: function __getLoopCallback() {
      var _this = this;

      return function () {
        return _this.__listeners.forEach(function (listener) {
          return listener();
        });
      };
    }

    /**
     * Returns function that realizes correct game looping.
     * @returns {Function}
     * @throws {Error}
     * @private
     */

  }, {
    key: "__callLoopFunc",


    /**
     * Calls function that realizes correct game looping.
     * @param {Function} loopWrapFunc Wrapper loop function (See "__start()" method.)
     * @throws {Error}
     * @private
     */
    value: function __callLoopFunc(loopWrapFunc) {
      if (typeof loopWrapFunc !== "function") throw new Error("Gor invalid loop wrapper function.");
      this.__loopID = GameLoop.__getLoopFunc()(loopWrapFunc, this.__game.getWindow().getDomContainer());
    }
  }], [{
    key: "__getLoopFunc",
    value: function __getLoopFunc() {
      var func = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      if (typeof func !== "function") throw new Error("Failed to find game loop function!");
      return func;
    }
  }]);

  return GameLoop;
}();

exports.default = GameLoop;
},{"./Game":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = require("./Game");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Game objects superclass.
 * @abstract
 */
var GameObject = function () {
  /**
   * Constructor
   * @param {int} x
   * @param {int} y
   * @param {int} w
   * @param {int} h
   */
  function GameObject(x, y, w, h) {
    _classCallCheck(this, GameObject);

    /**
     * Main game instance.
     * @type {Game}
     * @private
     */
    this.__game = _Game2.default.getInst();

    /**
     * Rendering context (of the <canvas>).
     * @type {CanvasRenderingContext2D}
     * @private
     */
    this.__ctx = this.__game.getWindow().getCtx();

    /**
     * "X" position.
     * @type {int}
     * @private
     */
    this.__x = x;

    /**
     * "Y" position.
     * @type {int}
     * @private
     */
    this.__y = y;

    /**
     * Game object width.
     * @type {int}
     * @private
     */
    this.__w = w;

    /**
     * Game object height.
     * @type {int}
     * @private
     */
    this.__h = h;
  }

  /**
   * Updates game object.
   */


  _createClass(GameObject, [{
    key: "update",
    value: function update() {
      // console.log("Update game object.");
      ++this.__x;
      ++this.__y;
    }

    /**
     * Renders game object.
     */

  }, {
    key: "render",
    value: function render() {
      // console.log("Render game object.");
      // console.log(this.__x, this.__y, this.__x, this.__h);
      var c = this.__ctx;
      c.fillStyle = "red";
      c.fillRect(this.__x, this.__y, this.__w, this.__h);
    }

    /**
     * Says if object instance of "GameObject".
     * @param {*} o Object to check.
     * @returns {boolean}
     */

  }], [{
    key: "isInst",
    value: function isInst(o) {
      return o instanceof GameObject;
    }

    /**
     * Says if object instance of "GameObject".
     * Strict version.
     * @param {*} o Object to check.
     * @returns {GameObject} Valid game object.
     * @throws {Error}
     */

  }, {
    key: "isInstStrict",
    value: function isInstStrict(o) {
      if (GameObject.isInst(o)) return o;
      throw new Error("Object is not instance of 'GameObject'.");
    }
  }]);

  return GameObject;
}();

exports.default = GameObject;
},{"./Game":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject = require("./GameObject");

var _GameObject2 = _interopRequireDefault(_GameObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Game objects composite.
 */
var GameObjects = function () {
  /**
   * Constructor.
   */
  function GameObjects() {
    _classCallCheck(this, GameObjects);

    /**
     * Game objects.
     * @type {GameObject[]}
     * @private
     */
    this.__gameObjects = [];
  }

  /**
   * Adds game object to the composite.
   * @param {GameObject} gameObject
   * @returns {GameObjects}
   * @throws {Error}
   */


  _createClass(GameObjects, [{
    key: "add",
    value: function add(gameObject) {
      this.__gameObjects.push(_GameObject2.default.isInstStrict(gameObject));
      return this;
    }

    /**
     * Updates game objects.
     */

  }, {
    key: "update",
    value: function update() {
      // console.log("Update game objects.");
      this.__gameObjects.forEach(function (o) {
        return o.update();
      });
    }

    /**
     * Renders game objects.
     */

  }, {
    key: "render",
    value: function render() {
      // console.log("Render game objects.");
      this.__gameObjects.forEach(function (o) {
        return o.render();
      });
    }
  }]);

  return GameObjects;
}();

exports.default = GameObjects;
},{"./GameObject":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GameObject2 = require("./GameObject");

var _GameObject3 = _interopRequireDefault(_GameObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Player.
 */
var Player = function (_GameObject) {
  _inherits(Player, _GameObject);

  /**
   * Constructor.
   * @param {int} x
   * @param {int} y
   * @param {int} w
   * @param {int} h
   */
  function Player(x, y, w, h) {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, w, h));
  }

  return Player;
}(_GameObject3.default);

exports.default = Player;
},{"./GameObject":5}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Window of the game.
 * Singletone.
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 0.0.1
 */
var Window = function () {
  /**
   * Instance constructor.
   * @param {int} [w = Window.FULL_WIDTH] Window width.
   * @param {int} [h = Window.FULL_HEIGHT] Window height.
   * @constructor
   */
  function Window() {
    var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Window.FULL_WIDTH;
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Window.FULL_HEIGHT;

    _classCallCheck(this, Window);

    if (Window.isInst(Window.__inst)) return Window.__inst;
    Window.__inst = this;

    /**
     * Window width.
     * @type {int}
     * @private
     */
    this.w = +w >> 0;

    /**
     * Window height.
     * @type {int}
     * @private
     */
    this.h = +h >> 0;

    /**
     * Game container (<canvas>).
     * @type {HTMLCanvasElement}
     * @private
     */
    this.__domContainer = document.createElement("canvas");

    /**
     * Rendering context (of the <canvas>).
     * @type {CanvasRenderingContext2D}
     * @private
     */
    this.__ctx = this.__domContainer.getContext("2d");

    this.__init();
  }

  /**
   * Says if object is instance of "Window".
   * @param {object} window
   * @returns {boolean}
   */


  _createClass(Window, [{
    key: "render",


    /**
     * Makes rendering of the game.
     */
    value: function render(gameObject) {}

    /**
     * Returns game container.
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getDomContainer",
    value: function getDomContainer() {
      return this.__domContainer;
    }

    /**
     * Returns rendering context (of the <canvas>).
     * @returns {CanvasRenderingContext2D}
     */

  }, {
    key: "getCtx",
    value: function getCtx() {
      return this.__ctx;
    }

    /**
     * Clears DOM container.
     */

  }, {
    key: "clearDomContainer",
    value: function clearDomContainer() {
      this.getCtx().clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    }

    /**
     * Initializes instance.
     * @private
     */

  }, {
    key: "__init",
    value: function __init() {
      this.__domContainer.width = document.documentElement.clientWidth;
      this.__domContainer.height = document.documentElement.clientHeight;
      document.body.appendChild(this.__domContainer);
    }
  }], [{
    key: "isInst",
    value: function isInst(window) {
      return window instanceof Window;
    }
  }]);

  return Window;
}();

/**
 * Single instance of the class.
 * @type {null|Window}
 * @private
 */


Window.__inst = null;

/**
 * This says "Use full device width".
 * @type {number}
 */
Window.FULL_WIDTH = 1;

/**
 * This says "Use full device window height".
 * @type {number}
 */
Window.FULL_HEIGHT = 2;

exports.default = Window;
},{}]},{},[1])
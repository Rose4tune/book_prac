/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/scripts/src/app.js":
/*!********************************!*\
  !*** ./app/scripts/src/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ws_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-client */ "./app/scripts/src/ws-client.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./app/scripts/src/dom.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FORM_SELECTOR = '[data-chat="chat-form"]';
var INPUT_SELECTOR = '[data-chat="message-input"]';

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  this.chatForm = new _dom__WEBPACK_IMPORTED_MODULE_1__.ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
  _ws_client__WEBPACK_IMPORTED_MODULE_0__.default.init('ws://localhost:3001');
  _ws_client__WEBPACK_IMPORTED_MODULE_0__.default.registerOpenHandler(function () {
    var message = new ChatMessage({
      message: 'POW!'
    });
    _ws_client__WEBPACK_IMPORTED_MODULE_0__.default.sendMessage(message.serialize());
  });
  _ws_client__WEBPACK_IMPORTED_MODULE_0__.default.registerMessageHandler(function (data) {
    console.log(data);
  });
};

var ChatMessage = /*#__PURE__*/function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === void 0 ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === void 0 ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: "serialize",
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatApp);

/***/ }),

/***/ "./app/scripts/src/dom.js":
/*!********************************!*\
  !*** ./app/scripts/src/dom.js ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\app\\scripts\\src\\dom.js: Unexpected token (12:14)\n\n\u001b[0m \u001b[90m 10 |\u001b[39m     \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$form\u001b[33m.\u001b[39msubmit((event) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m       event\u001b[33m.\u001b[39mpreventDefault()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 |\u001b[39m       \u001b[36mlet\u001b[39m va\u001b[33m;\u001b[39m \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$input\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m       submitCallback(val)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m       \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$input\u001b[33m.\u001b[39mval(\u001b[32m''\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:798:17)\n    at Parser.raiseWithData (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:791:17)\n    at Parser.raise (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:752:17)\n    at Parser.unexpected (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:3257:16)\n    at Parser.parseExprAtom (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11520:20)\n    at Parser.parseExprSubscripts (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11081:23)\n    at Parser.parseUpdate (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11061:21)\n    at Parser.parseMaybeUnary (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11039:23)\n    at Parser.parseExprOps (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:10882:23)\n    at Parser.parseMaybeConditional (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:10856:23)");

/***/ }),

/***/ "./app/scripts/src/ws-client.js":
/*!**************************************!*\
  !*** ./app/scripts/src/ws-client.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./app/scripts/src/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app/scripts/src/app.js");

new _app__WEBPACK_IMPORTED_MODULE_0__.default();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
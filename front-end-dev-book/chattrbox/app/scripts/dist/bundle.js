/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/scripts/src/app.js":
/*!********************************!*\
  !*** ./app/scripts/src/app.js ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\app\\scripts\\src\\app.js: Unexpected token, expected \",\" (14:45)\n\n\u001b[0m \u001b[90m 12 |\u001b[39m     socket\u001b[33m.\u001b[39mregisterOpenHandler(() \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m       \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mchatForm\u001b[33m.\u001b[39minit((data) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 |\u001b[39m         \u001b[36mlet\u001b[39m message \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mChatMessage\u001b[39m(message\u001b[33m:\u001b[39mdata)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m         socket\u001b[33m.\u001b[39msendMessage(message\u001b[33m.\u001b[39mserialize())\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m       })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:798:17)\n    at Parser.raiseWithData (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:791:17)\n    at Parser.raise (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:752:17)\n    at Parser.unexpected (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:3257:16)\n    at Parser.expect (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:3231:28)\n    at Parser.parseExprList (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:12290:14)\n    at Parser.parseNewArguments (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11880:25)\n    at Parser.parseNew (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11874:10)\n    at Parser.parseNewOrNewTarget (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11860:17)\n    at Parser.parseExprAtom (C:\\Users\\lesuy\\OneDrive\\Book_prac\\front-end-dev-book\\chattrbox\\node_modules\\@babel\\parser\\lib\\index.js:11447:21)");

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
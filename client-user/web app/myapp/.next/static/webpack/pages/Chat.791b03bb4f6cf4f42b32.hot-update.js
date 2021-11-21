"use strict";
self["webpackHotUpdate_N_E"]("pages/Chat",{

/***/ "./pages/Chat.js":
/*!***********************!*\
  !*** ./pages/Chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ "./node_modules/firebase/compat/firestore/dist/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\pages\\Chat.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();










firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.initializeApp({
  apiKey: "AIzaSyBCOsnTXv_-slD3V_EGJsQJNox9keCYihY",
  authDomain: "studied-biplane-288914.firebaseapp.com",
  databaseURL: "https://studied-biplane-288914-default-rtdb.firebaseio.com",
  projectId: "studied-biplane-288914",
  storageBucket: "studied-biplane-288914.appspot.com",
  messagingSenderId: "200125937769",
  appId: "1:200125937769:web:b7dd80653ea66fa3ad8af8",
  measurementId: "G-BPWS19HWJM"
});
var auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.auth();
var firestore = firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore();

function Chat() {
  _s();

  var _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(auth),
      _useAuthState2 = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useAuthState, 1),
      user = _useAuthState2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
        children: "\u269B\uFE0F\uD83D\uDD25"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SignOut, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ChatRoom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SignIn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 32
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Chat, "hP/7NvzUIXfxIpRVjMlmHSnysKo=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState];
});

_c = Chat;

function SignIn() {
  var signInWithGoogle = function signInWithGoogle() {
    var provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
      className: "sign-in",
      onClick: signInWithGoogle,
      children: "Sign in with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
      children: "Do not violate the community guidelines or you will be banned for life!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c2 = SignIn;

function SignOut() {
  return auth.currentUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
    className: "sign-out",
    onClick: function onClick() {
      return auth.signOut();
    },
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_c3 = SignOut;

function ChatRoom() {
  _s2();

  var _this = this;

  var dummy = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var messagesRef = firestore.collection('messages');
  var query = messagesRef.orderBy('createdAt');

  var _useCollectionData = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useCollectionData)(query, {
    idField: 'id'
  }),
      _useCollectionData2 = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCollectionData, 1),
      messages = _useCollectionData2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      formValue = _useState[0],
      setFormValue = _useState[1];

  var sendMessage = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var _auth$currentUser, uid, photoURL;

      return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _auth$currentUser = auth.currentUser, uid = _auth$currentUser.uid, photoURL = _auth$currentUser.photoURL;
              _context.next = 4;
              return messagesRef.add({
                text: formValue,
                createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore.FieldValue.serverTimestamp(),
                uid: uid,
                photoURL: photoURL
              });

            case 4:
              setFormValue('');
              dummy.current.scrollIntoView({
                behavior: 'smooth'
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendMessage(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("main", {
      children: [messages && messages.map(function (msg) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ChatMessage, {
          message: msg
        }, msg.id, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 40
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
        ref: dummy
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
      onSubmit: sendMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
        value: formValue,
        onChange: function onChange(e) {
          return setFormValue(e.target.value);
        },
        placeholder: "type your message here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
        type: "submit",
        disabled: !formValue,
        children: "\uD83D\uDD4A\uFE0F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s2(ChatRoom, "NX0eAKMykrgqWBRdNpM7iVcnAm4=", false, function () {
  return [react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useCollectionData];
});

_c4 = ChatRoom;

function ChatMessage(e) {
  var _e$message = e.message,
      text = _e$message.text,
      uid = _e$message.uid,
      photoURL = _e$message.photoURL;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
        src: photoURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_c5 = ChatMessage;
/* harmony default export */ __webpack_exports__["default"] = (Chat);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Chat");
$RefreshReg$(_c2, "SignIn");
$RefreshReg$(_c3, "SignOut");
$RefreshReg$(_c4, "ChatRoom");
$RefreshReg$(_c5, "ChatMessage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC43OTFiMDNiYjRmNmNmNGY0MmIzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUcsc0VBQUEsQ0FBdUI7QUFDckJJLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLHdDQUZTO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsNERBSFE7QUFJckJDLEVBQUFBLFNBQVMsRUFBRSx3QkFKVTtBQUtyQkMsRUFBQUEsYUFBYSxFQUFFLG9DQUxNO0FBTXJCQyxFQUFBQSxpQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxFQUFBQSxLQUFLLEVBQUUsMkNBUGM7QUFRckJDLEVBQUFBLGFBQWEsRUFBRTtBQVJNLENBQXZCO0FBV0EsSUFBTUMsSUFBSSxHQUFHWiw2REFBQSxFQUFiO0FBQ0EsSUFBTWEsU0FBUyxHQUFHYixrRUFBQSxFQUFsQjs7QUFHQSxTQUFTYyxJQUFULEdBQWdCO0FBQUE7O0FBRWQsc0JBQWViLHVFQUFZLENBQUNXLElBQUQsQ0FBM0I7QUFBQTtBQUFBLE1BQU9HLElBQVA7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSxnQkFDR0EsSUFBSSxnQkFBRyw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxnQkFBa0IsOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQWpC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QUFPRixZQUFZLENBQUNFLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUEsU0FBbkM7QUFBd0UsbUJBQVcsRUFBQztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGdCQUFRLEVBQUUsQ0FBQ25CLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVE07QUFBQSxrQkFBUjtBQWlCRDs7SUEzQ1FSO1VBS1l0Qjs7O01BTFpzQjs7QUE4Q1QsU0FBUzRCLFdBQVQsQ0FBcUJqQixDQUFyQixFQUF3QjtBQUN0QixtQkFBZ0NBLENBQUMsQ0FBQ2tCLE9BQWxDO0FBQUEsTUFBUWIsSUFBUixjQUFRQSxJQUFSO0FBQUEsTUFBY0gsR0FBZCxjQUFjQSxHQUFkO0FBQUEsTUFBbUJDLFFBQW5CLGNBQW1CQSxRQUFuQjtBQUNBLHNCQUFRO0FBQUEsMkJBQ047QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxtQkFBUjtBQU1EOztNQVJRWTtBQVdULCtEQUFldEMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9DaGF0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCdcclxuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJ1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbkRhdGEgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5cclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJDT3NuVFh2Xy1zbEQzVl9FR0pzUUpOb3g5a2VDWWloWVwiLFxyXG4gIGF1dGhEb21haW46IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3N0dWRpZWQtYmlwbGFuZS0yODg5MTQtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInN0dWRpZWQtYmlwbGFuZS0yODg5MTRcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInN0dWRpZWQtYmlwbGFuZS0yODg5MTQuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMDAxMjU5Mzc3NjlcIixcclxuICBhcHBJZDogXCIxOjIwMDEyNTkzNzc2OTp3ZWI6YjdkZDgwNjUzZWE2NmZhM2FkOGFmOFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1CUFdTMTlIV0pNXCJcclxufSlcclxuXHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXQoKSB7XHJcblxyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPuKam++4j/CflKU8L2gxPlxyXG4gICAgICAgIDxTaWduT3V0IC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge3VzZXIgPyA8Q2hhdFJvb20gLz4gOiA8U2lnbkluIC8+fVxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2lnbkluKCkge1xyXG5cclxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ24taW5cIiBvbkNsaWNrPXtzaWduSW5XaXRoR29vZ2xlfT5TaWduIGluIHdpdGggR29vZ2xlPC9idXR0b24+XHJcbiAgICAgIDxwPkRvIG5vdCB2aW9sYXRlIHRoZSBjb21tdW5pdHkgZ3VpZGVsaW5lcyBvciB5b3Ugd2lsbCBiZSBiYW5uZWQgZm9yIGxpZmUhPC9wPlxyXG4gICAgPC8+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gU2lnbk91dCgpIHtcclxuICByZXR1cm4gYXV0aC5jdXJyZW50VXNlciAmJiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ24tb3V0XCIgb25DbGljaz17KCkgPT4gYXV0aC5zaWduT3V0KCl9PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdFJvb20oKSB7XHJcbiAgY29uc3QgZHVtbXkgPSB1c2VSZWYoKTtcclxuICBjb25zdCBtZXNzYWdlc1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gbWVzc2FnZXNSZWYub3JkZXJCeSgnY3JlYXRlZEF0JylcclxuXHJcbiAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZUNvbGxlY3Rpb25EYXRhKHF1ZXJ5LCB7IGlkRmllbGQ6ICdpZCcgfSk7XHJcblxyXG4gIGNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyB1aWQsIHBob3RvVVJMIH0gPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG5cclxuICAgIGF3YWl0IG1lc3NhZ2VzUmVmLmFkZCh7XHJcbiAgICAgIHRleHQ6IGZvcm1WYWx1ZSxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgdWlkLFxyXG4gICAgICBwaG90b1VSTFxyXG4gICAgfSlcclxuXHJcbiAgICBzZXRGb3JtVmFsdWUoJycpO1xyXG4gICAgZHVtbXkuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxtYWluPlxyXG5cclxuICAgICAge21lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcChtc2cgPT4gPENoYXRNZXNzYWdlIGtleT17bXNnLmlkfSBtZXNzYWdlPXttc2d9IC8+KX1cclxuXHJcbiAgICAgIDxzcGFuIHJlZj17ZHVtbXl9Pjwvc3Bhbj5cclxuXHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlfT5cclxuXHJcbiAgICAgIDxpbnB1dCB2YWx1ZT17Zm9ybVZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1WYWx1ZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwidHlwZSB5b3VyIG1lc3NhZ2UgaGVyZSBcIiAvPlxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFmb3JtVmFsdWV9PvCflYrvuI88L2J1dHRvbj5cclxuXHJcbiAgICA8L2Zvcm0+XHJcbiAgPC8+KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdE1lc3NhZ2UoZSkge1xyXG4gIGNvbnN0IHsgdGV4dCwgdWlkLCBwaG90b1VSTCB9ID0gZS5tZXNzYWdlO1xyXG4gIHJldHVybiAoPD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPXtwaG90b1VSTH0gLz5cclxuICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImZpcmViYXNlIiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbkRhdGEiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aCIsImZpcmVzdG9yZSIsIkNoYXQiLCJ1c2VyIiwiU2lnbkluIiwic2lnbkluV2l0aEdvb2dsZSIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiU2lnbk91dCIsImN1cnJlbnRVc2VyIiwic2lnbk91dCIsIkNoYXRSb29tIiwiZHVtbXkiLCJtZXNzYWdlc1JlZiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJpZEZpZWxkIiwibWVzc2FnZXMiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWUiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVpZCIsInBob3RvVVJMIiwiYWRkIiwidGV4dCIsImNyZWF0ZWRBdCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm1hcCIsIm1zZyIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJDaGF0TWVzc2FnZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {}, void 0, false, {
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
        children: "\uD83D\uDCAC"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC5kYjVlZWEzZmQzOTdkMDk0MjA3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUcsc0VBQUEsQ0FBdUI7QUFDckJJLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLHdDQUZTO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsNERBSFE7QUFJckJDLEVBQUFBLFNBQVMsRUFBRSx3QkFKVTtBQUtyQkMsRUFBQUEsYUFBYSxFQUFFLG9DQUxNO0FBTXJCQyxFQUFBQSxpQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxFQUFBQSxLQUFLLEVBQUUsMkNBUGM7QUFRckJDLEVBQUFBLGFBQWEsRUFBRTtBQVJNLENBQXZCO0FBV0EsSUFBTUMsSUFBSSxHQUFHWiw2REFBQSxFQUFiO0FBQ0EsSUFBTWEsU0FBUyxHQUFHYixrRUFBQSxFQUFsQjs7QUFHQSxTQUFTYyxJQUFULEdBQWdCO0FBQUE7O0FBRWQsc0JBQWViLHVFQUFZLENBQUNXLElBQUQsQ0FBM0I7QUFBQTtBQUFBLE1BQU9HLElBQVA7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLGdCQUNHQSxJQUFJLGdCQUFHLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUFrQiw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBakJRRDtVQUVRYjs7O0tBRlJhOztBQW1CVCxTQUFTRSxNQUFULEdBQWtCO0FBRWhCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFNQyxRQUFRLEdBQUcsSUFBSWxCLGdGQUFKLEVBQWpCO0FBQ0FZLElBQUFBLElBQUksQ0FBQ1EsZUFBTCxDQUFxQkYsUUFBckI7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUMsU0FBbEI7QUFBNEIsYUFBTyxFQUFFRCxnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU9EOztNQWRRRDs7QUFnQlQsU0FBU0ssT0FBVCxHQUFtQjtBQUNqQixTQUFPVCxJQUFJLENBQUNVLFdBQUwsaUJBQ0w7QUFBUSxhQUFTLEVBQUMsVUFBbEI7QUFBNkIsV0FBTyxFQUFFO0FBQUEsYUFBTVYsSUFBSSxDQUFDVyxPQUFMLEVBQU47QUFBQSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O01BSlFGOztBQU9ULFNBQVNHLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsS0FBSyxHQUFHM0IsNkNBQU0sRUFBcEI7QUFDQSxNQUFNNEIsV0FBVyxHQUFHYixTQUFTLENBQUNjLFVBQVYsQ0FBcUIsVUFBckIsQ0FBcEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixXQUFwQixDQUFkOztBQUVBLDJCQUFtQjNCLGlGQUFpQixDQUFDMEIsS0FBRCxFQUFRO0FBQUVFLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQVIsQ0FBcEM7QUFBQTtBQUFBLE1BQU9DLFFBQVA7O0FBRUEsa0JBQWtDaEMsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT2lDLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBR0EsTUFBTUMsV0FBVztBQUFBLHVUQUFHLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQURrQixrQ0FHUXhCLElBQUksQ0FBQ1UsV0FIYixFQUdWZSxHQUhVLHFCQUdWQSxHQUhVLEVBR0xDLFFBSEsscUJBR0xBLFFBSEs7QUFBQTtBQUFBLHFCQUtaWixXQUFXLENBQUNhLEdBQVosQ0FBZ0I7QUFDcEJDLGdCQUFBQSxJQUFJLEVBQUVSLFNBRGM7QUFFcEJTLGdCQUFBQSxTQUFTLEVBQUV6Qyw2RkFBQSxFQUZTO0FBR3BCcUMsZ0JBQUFBLEdBQUcsRUFBSEEsR0FIb0I7QUFJcEJDLGdCQUFBQSxRQUFRLEVBQVJBO0FBSm9CLGVBQWhCLENBTFk7O0FBQUE7QUFZbEJMLGNBQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7QUFDQVIsY0FBQUEsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxjQUFkLENBQTZCO0FBQUVDLGdCQUFBQSxRQUFRLEVBQUU7QUFBWixlQUE3Qjs7QUFia0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWFosV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFnQkEsc0JBQVE7QUFBQSw0QkFDTjtBQUFBLGlCQUVHSCxRQUFRLElBQUlBLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFBQyxHQUFHO0FBQUEsNEJBQUksOERBQUMsV0FBRDtBQUEwQixpQkFBTyxFQUFFQTtBQUFuQyxXQUFrQkEsR0FBRyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUEsT0FBaEIsQ0FGZixlQUlFO0FBQU0sV0FBRyxFQUFFeEI7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sZUFTTjtBQUFNLGNBQVEsRUFBRVMsV0FBaEI7QUFBQSw4QkFFRTtBQUFPLGFBQUssRUFBRUYsU0FBZDtBQUF5QixnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9GLFlBQVksQ0FBQ0UsQ0FBQyxDQUFDZSxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxTQUFuQztBQUF3RSxtQkFBVyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUlFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZ0JBQVEsRUFBRSxDQUFDbkIsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUTTtBQUFBLGtCQUFSO0FBaUJEOztJQTNDUVI7VUFLWXRCOzs7TUFMWnNCOztBQThDVCxTQUFTNEIsV0FBVCxDQUFxQmpCLENBQXJCLEVBQXdCO0FBQ3RCLG1CQUFnQ0EsQ0FBQyxDQUFDa0IsT0FBbEM7QUFBQSxNQUFRYixJQUFSLGNBQVFBLElBQVI7QUFBQSxNQUFjSCxHQUFkLGNBQWNBLEdBQWQ7QUFBQSxNQUFtQkMsUUFBbkIsY0FBbUJBLFFBQW5CO0FBQ0Esc0JBQVE7QUFBQSwyQkFDTjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNLG1CQUFSO0FBTUQ7O01BUlFZO0FBV1QsK0RBQWV0QyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NoYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmUnXHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uRGF0YSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QkNPc25UWHZfLXNsRDNWX0VHSnNRSk5veDlrZUNZaWhZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc3R1ZGllZC1iaXBsYW5lLTI4ODkxNC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIwMDEyNTkzNzc2OVwiLFxyXG4gIGFwcElkOiBcIjE6MjAwMTI1OTM3NzY5OndlYjpiN2RkODA2NTNlYTY2ZmEzYWQ4YWY4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJQV1MxOUhXSk1cIlxyXG59KVxyXG5cclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdCgpIHtcclxuXHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+PC9oMT5cclxuICAgICAgICA8U2lnbk91dCAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHt1c2VyID8gPENoYXRSb29tIC8+IDogPFNpZ25JbiAvPn1cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuXHJcbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWduLWluXCIgb25DbGljaz17c2lnbkluV2l0aEdvb2dsZX0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvYnV0dG9uPlxyXG4gICAgICA8cD5EbyBub3QgdmlvbGF0ZSB0aGUgY29tbXVuaXR5IGd1aWRlbGluZXMgb3IgeW91IHdpbGwgYmUgYmFubmVkIGZvciBsaWZlITwvcD5cclxuICAgIDwvPlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25PdXQoKSB7XHJcbiAgcmV0dXJuIGF1dGguY3VycmVudFVzZXIgJiYgKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWduLW91dFwiIG9uQ2xpY2s9eygpID0+IGF1dGguc2lnbk91dCgpfT5TaWduIE91dDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRSb29tKCkge1xyXG4gIGNvbnN0IGR1bW15ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbWVzc2FnZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbignbWVzc2FnZXMnKTtcclxuICBjb25zdCBxdWVyeSA9IG1lc3NhZ2VzUmVmLm9yZGVyQnkoJ2NyZWF0ZWRBdCcpXHJcblxyXG4gIGNvbnN0IFttZXNzYWdlc10gPSB1c2VDb2xsZWN0aW9uRGF0YShxdWVyeSwgeyBpZEZpZWxkOiAnaWQnIH0pO1xyXG5cclxuICBjb25zdCBbZm9ybVZhbHVlLCBzZXRGb3JtVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdWlkLCBwaG90b1VSTCB9ID0gYXV0aC5jdXJyZW50VXNlcjtcclxuXHJcbiAgICBhd2FpdCBtZXNzYWdlc1JlZi5hZGQoe1xyXG4gICAgICB0ZXh0OiBmb3JtVmFsdWUsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIHVpZCxcclxuICAgICAgcGhvdG9VUkxcclxuICAgIH0pXHJcblxyXG4gICAgc2V0Rm9ybVZhbHVlKCcnKTtcclxuICAgIGR1bW15LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKDw+XHJcbiAgICA8bWFpbj5cclxuXHJcbiAgICAgIHttZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAobXNnID0+IDxDaGF0TWVzc2FnZSBrZXk9e21zZy5pZH0gbWVzc2FnZT17bXNnfSAvPil9XHJcblxyXG4gICAgICA8c3BhbiByZWY9e2R1bW15fT48L3NwYW4+XHJcblxyXG4gICAgPC9tYWluPlxyXG5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0+XHJcblxyXG4gICAgICA8aW5wdXQgdmFsdWU9e2Zvcm1WYWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVmFsdWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cInR5cGUgeW91ciBtZXNzYWdlIGhlcmUgXCIgLz5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybVZhbHVlfT7wn5KsPC9idXR0b24+XHJcblxyXG4gICAgPC9mb3JtPlxyXG4gIDwvPilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRNZXNzYWdlKGUpIHtcclxuICBjb25zdCB7IHRleHQsIHVpZCwgcGhvdG9VUkwgfSA9IGUubWVzc2FnZTtcclxuICByZXR1cm4gKDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nIHNyYz17cGhvdG9VUkx9IC8+XHJcbiAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvPilcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJmaXJlYmFzZSIsInVzZUF1dGhTdGF0ZSIsInVzZUNvbGxlY3Rpb25EYXRhIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImF1dGgiLCJmaXJlc3RvcmUiLCJDaGF0IiwidXNlciIsIlNpZ25JbiIsInNpZ25JbldpdGhHb29nbGUiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsIlNpZ25PdXQiLCJjdXJyZW50VXNlciIsInNpZ25PdXQiLCJDaGF0Um9vbSIsImR1bW15IiwibWVzc2FnZXNSZWYiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwiaWRGaWVsZCIsIm1lc3NhZ2VzIiwiZm9ybVZhbHVlIiwic2V0Rm9ybVZhbHVlIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1aWQiLCJwaG90b1VSTCIsImFkZCIsInRleHQiLCJjcmVhdGVkQXQiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtYXAiLCJtc2ciLCJpZCIsInRhcmdldCIsInZhbHVlIiwiQ2hhdE1lc3NhZ2UiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
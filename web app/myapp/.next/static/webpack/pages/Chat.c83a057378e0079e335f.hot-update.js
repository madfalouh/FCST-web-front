"use strict";
self["webpackHotUpdate_N_E"]("pages/Chat",{

/***/ "./pages/Chat.js":
/*!***********************!*\
  !*** ./pages/Chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ "./node_modules/firebase/compat/firestore/dist/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/index.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
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
var firestore = firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore();

var handleOnClickOnLogout = /*#__PURE__*/function () {
  var _ref = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser.uid), {
              isOnline: false
            });

          case 2:
            _context.next = 4;
            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_9__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_7__.auth);

          case 4:
            router.push("/Home");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleOnClickOnLogout() {
    return _ref.apply(this, arguments);
  };
}();

function Chat() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      user = _useState[0],
      setUser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser.uid)).then(function (docSnap) {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h1", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("section", {
      children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(ChatRoom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 24
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(SignIn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 39
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Chat, "hT6C72rcbfRUedrDq+TPaFfRI/M=");

_c = Chat;

function SignIn() {
  var signInWithGoogle = function signInWithGoogle() {
    var provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.auth.GoogleAuthProvider();
    _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.signInWithPopup(provider);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
      className: "sign-in",
      onClick: signInWithGoogle,
      children: "Sign in with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c2 = SignIn;

function SelectUser() {
  var UserRef = firestore.collection("users");
}

_c3 = SelectUser;

function ChatRoom() {
  _s2();

  var _this = this;

  var uuid = "njKfj9LCruaRr9DTrvBo9YBtU5c2";
  var dummy = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var messagesRef = firestore.collection("messages");
  var query = messagesRef.where("uuid", "==", "njKfj9LCruaRr9DTrvBo9YBtU5c2", "||", "uid", "==", "9pPxdDNKq8Ppbzffwp4M598yVAK2").orderBy("createdAt");

  var _useCollectionData = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_11__.useCollectionData)(query, {
    idField: "id"
  }),
      _useCollectionData2 = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useCollectionData, 1),
      messages = _useCollectionData2[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      var _auth$currentUser, uid, photoURL;

      return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _auth$currentUser = _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser, uid = _auth$currentUser.uid, photoURL = _auth$currentUser.photoURL;
              _context2.next = 4;
              return messagesRef.add({
                text: formValue,
                createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore.FieldValue.serverTimestamp(),
                uid: uid,
                photoURL: photoURL,
                uuid: uuid
              });

            case 4:
              setFormValue("");
              dummy.current.scrollIntoView({
                behavior: "smooth"
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function sendMessage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("main", {
      children: [messages && messages.map(function (msg) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(ChatMessage, {
          message: msg
        }, msg.id, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 33
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        ref: dummy
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("form", {
      onSubmit: sendMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("input", {
        value: formValue,
        onChange: function onChange(e) {
          return setFormValue(e.target.value);
        },
        placeholder: "type your message here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
        type: "submit",
        disabled: !formValue,
        children: "\uD83D\uDCAC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(ChatRoom, "mjNEwEIb0WBSFyCyv/zX3AnHy9U=", false, function () {
  return [react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_11__.useCollectionData];
});

_c4 = ChatRoom;

function ChatMessage(e) {
  var _e$message = e.message,
      text = _e$message.text,
      uid = _e$message.uid,
      photoURL = _e$message.photoURL;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
        src: photoURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c5 = ChatMessage;
/* harmony default export */ __webpack_exports__["default"] = (Chat);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Chat");
$RefreshReg$(_c2, "SignIn");
$RefreshReg$(_c3, "SelectUser");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC5jODNhMDU3Mzc4ZTAwNzllMzM1Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUksc0VBQUEsQ0FBdUI7QUFDckJZLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLHdDQUZTO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsNERBSFE7QUFJckJDLEVBQUFBLFNBQVMsRUFBRSx3QkFKVTtBQUtyQkMsRUFBQUEsYUFBYSxFQUFFLG9DQUxNO0FBTXJCQyxFQUFBQSxpQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxFQUFBQSxLQUFLLEVBQUUsMkNBUGM7QUFRckJDLEVBQUFBLGFBQWEsRUFBRTtBQVJNLENBQXZCO0FBV0EsSUFBTUMsU0FBUyxHQUFHcEIsa0VBQUEsRUFBbEI7O0FBQ0EsSUFBTXFCLHFCQUFxQjtBQUFBLHFUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QmYsNkRBQVMsQ0FBQ0QsdURBQUcsQ0FBQ0gseUNBQUQsRUFBSyxPQUFMLEVBQWNDLDJEQUFkLENBQUosRUFBeUM7QUFDdERxQixjQUFBQSxRQUFRLEVBQUU7QUFENEMsYUFBekMsQ0FEYTs7QUFBQTtBQUFBO0FBQUEsbUJBS3RCakIsc0RBQU8sQ0FBQ0osMkNBQUQsQ0FMZTs7QUFBQTtBQU81QnNCLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVo7O0FBUDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXJCTCxxQkFBcUI7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBVUEsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUNkLGtCQUF3QjdCLCtDQUFRLEVBQWhDO0FBQUEsTUFBTzhCLElBQVA7QUFB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LENBQUMsQ0FBQ2lCLE9BQWxDO0FBQUEsTUFBUWIsSUFBUixjQUFRQSxJQUFSO0FBQUEsTUFBY25DLEdBQWQsY0FBY0EsR0FBZDtBQUFBLE1BQW1CaUMsUUFBbkIsY0FBbUJBLFFBQW5CO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQ7O01BVlFZO0FBWVQsK0RBQWUzQyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NoYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgICwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2F1dGhcIjtcclxuaW1wb3J0IHsgc3RvcmFnZSwgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgZ2V0RG9jLCBkb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb25EYXRhIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5cclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJDT3NuVFh2Xy1zbEQzVl9FR0pzUUpOb3g5a2VDWWloWVwiLFxyXG4gIGF1dGhEb21haW46IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3N0dWRpZWQtYmlwbGFuZS0yODg5MTQtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInN0dWRpZWQtYmlwbGFuZS0yODg5MTRcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInN0dWRpZWQtYmlwbGFuZS0yODg5MTQuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMDAxMjU5Mzc3NjlcIixcclxuICBhcHBJZDogXCIxOjIwMDEyNTkzNzc2OTp3ZWI6YjdkZDgwNjUzZWE2NmZhM2FkOGFmOFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1CUFdTMTlIV0pNXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGhhbmRsZU9uQ2xpY2tPbkxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgaXNPbmxpbmU6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBzaWduT3V0KGF1dGgpO1xyXG5cclxuICByb3V0ZXIucHVzaChcIi9Ib21lXCIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQ2hhdCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCkpLnRoZW4oKGRvY1NuYXApID0+IHtcclxuICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XHJcbiAgICAgICAgc2V0VXNlcihkb2NTbmFwLmRhdGEoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gIFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+PC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8c2VjdGlvbj57dXNlciA/IDxDaGF0Um9vbSAvPiA6IDxTaWduSW4gLz59PC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gIGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ24taW5cIiBvbkNsaWNrPXtzaWduSW5XaXRoR29vZ2xlfT5cclxuICAgICAgICBTaWduIGluIHdpdGggR29vZ2xlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2VsZWN0VXNlcigpe1xyXG4gIGNvbnN0IFVzZXJSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRSb29tKCkge1xyXG4gIGNvbnN0IHV1aWQ9XCJuaktmajlMQ3J1YVJyOURUcnZCbzlZQnRVNWMyXCIgOyBcclxuICBjb25zdCBkdW1teSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG1lc3NhZ2VzUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKTtcclxuICBjb25zdCBxdWVyeSA9IG1lc3NhZ2VzUmVmLndoZXJlKFwidXVpZFwiLCBcIj09XCIsIFwibmpLZmo5TENydWFScjlEVHJ2Qm85WUJ0VTVjMlwiICwgXCJ8fFwiICxcInVpZFwiLFwiPT1cIixcIjlwUHhkRE5LcThQcGJ6ZmZ3cDRNNTk4eVZBSzJcIikub3JkZXJCeShcImNyZWF0ZWRBdFwiKVxyXG5cclxuICBjb25zdCBbbWVzc2FnZXNdID0gdXNlQ29sbGVjdGlvbkRhdGEocXVlcnksIHsgaWRGaWVsZDogXCJpZFwiIH0pO1xyXG5cclxuICBjb25zdCBbZm9ybVZhbHVlLCBzZXRGb3JtVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7IHVpZCwgcGhvdG9VUkwgfSA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBhd2FpdCBtZXNzYWdlc1JlZi5hZGQoe1xyXG4gICAgICB0ZXh0OiBmb3JtVmFsdWUsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIHVpZCxcclxuICAgICAgcGhvdG9VUkwsXHJcbiAgICAgIHV1aWQgLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Rm9ybVZhbHVlKFwiXCIpO1xyXG4gICAgZHVtbXkuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7bWVzc2FnZXMgJiZcclxuICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobXNnKSA9PiA8Q2hhdE1lc3NhZ2Uga2V5PXttc2cuaWR9IG1lc3NhZ2U9e21zZ30gLz4pfVxyXG5cclxuICAgICAgICA8c3BhbiByZWY9e2R1bW15fT48L3NwYW4+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIHlvdXIgbWVzc2FnZSBoZXJlIFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFmb3JtVmFsdWV9PlxyXG4gICAgICAgICAg8J+SrFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGF0TWVzc2FnZShlKSB7XHJcbiAgY29uc3QgeyB0ZXh0LCB1aWQsIHBob3RvVVJMIH0gPSBlLm1lc3NhZ2U7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9e3Bob3RvVVJMfSAvPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwic3RvcmFnZSIsImRiIiwiYXV0aCIsImdldERvYyIsImRvYyIsInVwZGF0ZURvYyIsInNpZ25PdXQiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VDb2xsZWN0aW9uRGF0YSIsIkhlYWRlciIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJoYW5kbGVPbkNsaWNrT25Mb2dvdXQiLCJjdXJyZW50VXNlciIsInVpZCIsImlzT25saW5lIiwicm91dGVyIiwicHVzaCIsIkNoYXQiLCJ1c2VyIiwic2V0VXNlciIsInRoZW4iLCJkb2NTbmFwIiwiZXhpc3RzIiwiZGF0YSIsIlNpZ25JbiIsInNpZ25JbldpdGhHb29nbGUiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsIlNlbGVjdFVzZXIiLCJVc2VyUmVmIiwiY29sbGVjdGlvbiIsIkNoYXRSb29tIiwidXVpZCIsImR1bW15IiwibWVzc2FnZXNSZWYiLCJxdWVyeSIsIndoZXJlIiwib3JkZXJCeSIsImlkRmllbGQiLCJtZXNzYWdlcyIsImZvcm1WYWx1ZSIsInNldEZvcm1WYWx1ZSIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGhvdG9VUkwiLCJhZGQiLCJ0ZXh0IiwiY3JlYXRlZEF0IiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibWFwIiwibXNnIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNoYXRNZXNzYWdlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=
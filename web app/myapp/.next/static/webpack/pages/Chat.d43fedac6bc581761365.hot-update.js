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
  var query = messagesRef.where("uuid", "==", "njKfj9LCruaRr9DTrvBo9YBtU5c2", "||", "uid", "==", "9pPxdDNKq8Ppbzffwp4M598yVAK2").s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC5kNDNmZWRhYzZiYzU4MTc2MTM2NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUksc0VBQUEsQ0FBdUI7QUFDckJZLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLHdDQUZTO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsNERBSFE7QUFJckJDLEVBQUFBLFNBQVMsRUFBRSx3QkFKVTtBQUtyQkMsRUFBQUEsYUFBYSxFQUFFLG9DQUxNO0FBTXJCQyxFQUFBQSxpQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxFQUFBQSxLQUFLLEVBQUUsMkNBUGM7QUFRckJDLEVBQUFBLGFBQWEsRUFBRTtBQVJNLENBQXZCO0FBV0EsSUFBTUMsU0FBUyxHQUFHcEIsa0VBQUEsRUFBbEI7O0FBQ0EsSUFBTXFCLHFCQUFxQjtBQUFBLHFUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QmYsNkRBQVMsQ0FBQ0QsdURBQUcsQ0FBQ0gseUNBQUQsRUFBSyxPQUFMLEVBQWNDLDJEQUFkLENBQUosRUFBeUM7QUFDdERxQixjQUFBQSxRQUFRLEVBQUU7QUFENEMsYUFBekMsQ0FEYTs7QUFBQTtBQUFBO0FBQUEsbUJBS3RCakIsc0RBQU8sQ0FBQ0osMkNBQUQsQ0FMZTs7QUFBQTtBQU81QnNCLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVo7O0FBUDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXJCTCxxQkFBcUI7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBVUEsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUNkLGtCQUF3QjdCLCtDQUFRLEVBQWhDO0FBQUEsTUFBTzhCLElBQVA7QUFB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QztBQUFBLE1BQVFiLElBQVIsY0FBUUEsSUFBUjtBQUFBLE1BQWNuQyxHQUFkLGNBQWNBLEdBQWQ7QUFBQSxNQUFtQmlDLFFBQW5CLGNBQW1CQSxRQUFuQjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVFEOztNQVZRWTtBQVlULCtEQUFlM0MsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9DaGF0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlICAsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9hdXRoXCI7XHJcbmltcG9ydCB7IHN0b3JhZ2UsIGRiLCBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldERvYywgZG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uRGF0YSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gIGFwaUtleTogXCJBSXphU3lCQ09zblRYdl8tc2xEM1ZfRUdKc1FKTm94OWtlQ1lpaFlcIixcclxuICBhdXRoRG9tYWluOiBcInN0dWRpZWQtYmlwbGFuZS0yODg5MTQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zdHVkaWVkLWJpcGxhbmUtMjg4OTE0LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjAwMTI1OTM3NzY5XCIsXHJcbiAgYXBwSWQ6IFwiMToyMDAxMjU5Mzc3Njk6d2ViOmI3ZGQ4MDY1M2VhNjZmYTNhZDhhZjhcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctQlBXUzE5SFdKTVwiLFxyXG59KTtcclxuXHJcbmNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBoYW5kbGVPbkNsaWNrT25Mb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgIGlzT25saW5lOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgc2lnbk91dChhdXRoKTtcclxuXHJcbiAgcm91dGVyLnB1c2goXCIvSG9tZVwiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpKS50aGVuKChkb2NTbmFwKSA9PiB7XHJcbiAgICAgIGlmIChkb2NTbmFwLmV4aXN0cykge1xyXG4gICAgICAgIHNldFVzZXIoZG9jU25hcC5kYXRhKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICBcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPjwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPHNlY3Rpb24+e3VzZXIgPyA8Q2hhdFJvb20gLz4gOiA8U2lnbkluIC8+fTwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWduLWluXCIgb25DbGljaz17c2lnbkluV2l0aEdvb2dsZX0+XHJcbiAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFVzZXIoKXtcclxuICBjb25zdCBVc2VyUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0Um9vbSgpIHtcclxuICBjb25zdCB1dWlkPVwibmpLZmo5TENydWFScjlEVHJ2Qm85WUJ0VTVjMlwiIDsgXHJcbiAgY29uc3QgZHVtbXkgPSB1c2VSZWYoKTtcclxuICBjb25zdCBtZXNzYWdlc1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwibWVzc2FnZXNcIik7XHJcbiAgY29uc3QgcXVlcnkgPSBtZXNzYWdlc1JlZi53aGVyZShcInV1aWRcIiwgXCI9PVwiLCBcIm5qS2ZqOUxDcnVhUnI5RFRydkJvOVlCdFU1YzJcIiAsIFwifHxcIiAsXCJ1aWRcIixcIj09XCIsXCI5cFB4ZEROS3E4UHBiemZmd3A0TTU5OHlWQUsyXCIpLnNcclxuXHJcbiAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZUNvbGxlY3Rpb25EYXRhKHF1ZXJ5LCB7IGlkRmllbGQ6IFwiaWRcIiB9KTtcclxuXHJcbiAgY29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyB1aWQsIHBob3RvVVJMIH0gPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgYXdhaXQgbWVzc2FnZXNSZWYuYWRkKHtcclxuICAgICAgdGV4dDogZm9ybVZhbHVlLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB1aWQsXHJcbiAgICAgIHBob3RvVVJMLFxyXG4gICAgICB1dWlkICxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZvcm1WYWx1ZShcIlwiKTtcclxuICAgIGR1bW15LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge21lc3NhZ2VzICYmXHJcbiAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1zZykgPT4gPENoYXRNZXNzYWdlIGtleT17bXNnLmlkfSBtZXNzYWdlPXttc2d9IC8+KX1cclxuXHJcbiAgICAgICAgPHNwYW4gcmVmPXtkdW1teX0+PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybVZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSB5b3VyIG1lc3NhZ2UgaGVyZSBcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybVZhbHVlfT5cclxuICAgICAgICAgIPCfkqxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhdE1lc3NhZ2UoZSkge1xyXG4gIGNvbnN0IHsgdGV4dCwgdWlkLCBwaG90b1VSTCB9ID0gZS5tZXNzYWdlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtwaG90b1VSTH0gLz5cclxuICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsInN0b3JhZ2UiLCJkYiIsImF1dGgiLCJnZXREb2MiLCJkb2MiLCJ1cGRhdGVEb2MiLCJzaWduT3V0IiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbkRhdGEiLCJIZWFkZXIiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZXN0b3JlIiwiaGFuZGxlT25DbGlja09uTG9nb3V0IiwiY3VycmVudFVzZXIiLCJ1aWQiLCJpc09ubGluZSIsInJvdXRlciIsInB1c2giLCJDaGF0IiwidXNlciIsInNldFVzZXIiLCJ0aGVuIiwiZG9jU25hcCIsImV4aXN0cyIsImRhdGEiLCJTaWduSW4iLCJzaWduSW5XaXRoR29vZ2xlIiwicHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJTZWxlY3RVc2VyIiwiVXNlclJlZiIsImNvbGxlY3Rpb24iLCJDaGF0Um9vbSIsInV1aWQiLCJkdW1teSIsIm1lc3NhZ2VzUmVmIiwicXVlcnkiLCJ3aGVyZSIsInMiLCJpZEZpZWxkIiwibWVzc2FnZXMiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWUiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob3RvVVJMIiwiYWRkIiwidGV4dCIsImNyZWF0ZWRBdCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm1hcCIsIm1zZyIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJDaGF0TWVzc2FnZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9
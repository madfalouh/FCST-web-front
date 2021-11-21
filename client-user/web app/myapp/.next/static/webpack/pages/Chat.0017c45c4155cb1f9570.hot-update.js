"use strict";
self["webpackHotUpdate_N_E"]("pages/Chat",{

/***/ "./pages/Chat.js":
/*!***********************!*\
  !*** ./pages/Chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ "./node_modules/firebase/compat/firestore/dist/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/index.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\pages\\Chat.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();














firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.initializeApp({
  apiKey: "AIzaSyBCOsnTXv_-slD3V_EGJsQJNox9keCYihY",
  authDomain: "studied-biplane-288914.firebaseapp.com",
  databaseURL: "https://studied-biplane-288914-default-rtdb.firebaseio.com",
  projectId: "studied-biplane-288914",
  storageBucket: "studied-biplane-288914.appspot.com",
  messagingSenderId: "200125937769",
  appId: "1:200125937769:web:b7dd80653ea66fa3ad8af8",
  measurementId: "G-BPWS19HWJM"
});
var firestore = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.firestore();

var handleOnClickOnLogout = /*#__PURE__*/function () {
  var _ref = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_6__.auth.currentUser.uid), {
              isOnline: false
            });

          case 2:
            _context.next = 4;
            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth);

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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      user = _useState[0],
      setUser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_6__.auth.currentUser.uid)).then(function (docSnap) {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h1", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("section", {
      children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ChatRoom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 24
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(SignIn, {}, void 0, false, {
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
    var provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.auth.GoogleAuthProvider();
    _firebase__WEBPACK_IMPORTED_MODULE_6__.auth.signInWithPopup(provider);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
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
  var dummy = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var messagesRef = firestore.collection("messages");
  var query = messagesRef.where("uuid", "==", "njKfj9LCruaRr9DTrvBo9YBtU5c2", "||", "uid", "==", "9pPxdDNKq8Ppbzffwp4M598yVAK2")["const"][messages] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useCollectionData)(query, {
    idField: "id"
  });

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var _auth$currentUser, uid, photoURL;

      return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _auth$currentUser = _firebase__WEBPACK_IMPORTED_MODULE_6__.auth.currentUser, uid = _auth$currentUser.uid, photoURL = _auth$currentUser.photoURL;
              _context2.next = 4;
              return messagesRef.add({
                text: formValue,
                createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.firestore.FieldValue.serverTimestamp(),
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("main", {
      children: [messages && messages.map(function (msg) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ChatMessage, {
          message: msg
        }, msg.id, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 33
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("form", {
      onSubmit: sendMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("input", {
        value: formValue,
        onChange: function onChange(e) {
          return setFormValue(e.target.value);
        },
        placeholder: "type your message here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
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

_s2(ChatRoom, "79VIh3ht/x1U+BOYalMl0R+WzO0=", false, function () {
  return [react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useCollectionData];
});

_c4 = ChatRoom;

function ChatMessage(e) {
  var _e$message = e.message,
      text = _e$message.text,
      uid = _e$message.uid,
      photoURL = _e$message.photoURL;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("img", {
        src: photoURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC4wMDE3YzQ1YzQxNTVjYjFmOTU3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFJLHNFQUFBLENBQXVCO0FBQ3JCWSxFQUFBQSxNQUFNLEVBQUUseUNBRGE7QUFFckJDLEVBQUFBLFVBQVUsRUFBRSx3Q0FGUztBQUdyQkMsRUFBQUEsV0FBVyxFQUFFLDREQUhRO0FBSXJCQyxFQUFBQSxTQUFTLEVBQUUsd0JBSlU7QUFLckJDLEVBQUFBLGFBQWEsRUFBRSxvQ0FMTTtBQU1yQkMsRUFBQUEsaUJBQWlCLEVBQUUsY0FORTtBQU9yQkMsRUFBQUEsS0FBSyxFQUFFLDJDQVBjO0FBUXJCQyxFQUFBQSxhQUFhLEVBQUU7QUFSTSxDQUF2QjtBQVdBLElBQU1DLFNBQVMsR0FBR3BCLGtFQUFBLEVBQWxCOztBQUNBLElBQU1xQixxQkFBcUI7QUFBQSxxVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdEJmLDZEQUFTLENBQUNELHVEQUFHLENBQUNILHlDQUFELEVBQUssT0FBTCxFQUFjQywyREFBZCxDQUFKLEVBQXlDO0FBQ3REcUIsY0FBQUEsUUFBUSxFQUFFO0FBRDRDLGFBQXpDLENBRGE7O0FBQUE7QUFBQTtBQUFBLG1CQUt0QmpCLHNEQUFPLENBQUNKLDJDQUFELENBTGU7O0FBQUE7QUFPNUJzQixZQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaOztBQVA0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFyQkwscUJBQXFCO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQVVBLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDZCxrQkFBd0I3QiwrQ0FBUSxFQUFoQztBQUFBLE1BQU84QixJQUFQO0FBQUEs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QSxNQUFjbEMsR0FBZCxjQUFjQSxHQUFkO0FBQUEsTUFBbUJnQyxRQUFuQixjQUFtQkEsUUFBbkI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFRRDs7TUFWUVk7QUFZVCwrREFBZTFDLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSAgLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiO1xyXG5pbXBvcnQgeyBzdG9yYWdlLCBkYiwgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXREb2MsIGRvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbkRhdGEgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QkNPc25UWHZfLXNsRDNWX0VHSnNRSk5veDlrZUNZaWhZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc3R1ZGllZC1iaXBsYW5lLTI4ODkxNC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIwMDEyNTkzNzc2OVwiLFxyXG4gIGFwcElkOiBcIjE6MjAwMTI1OTM3NzY5OndlYjpiN2RkODA2NTNlYTY2ZmEzYWQ4YWY4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJQV1MxOUhXSk1cIixcclxufSk7XHJcblxyXG5jb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgaGFuZGxlT25DbGlja09uTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICBpc09ubGluZTogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcblxyXG4gIHJvdXRlci5wdXNoKFwiL0hvbWVcIik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKSkudGhlbigoZG9jU25hcCkgPT4ge1xyXG4gICAgICBpZiAoZG9jU25hcC5leGlzdHMpIHtcclxuICAgICAgICBzZXRVc2VyKGRvY1NuYXAuZGF0YSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT48L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPnt1c2VyID8gPENoYXRSb29tIC8+IDogPFNpZ25JbiAvPn08L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnbi1pblwiIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PlxyXG4gICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RVc2VyKCl7XHJcbiAgY29uc3QgVXNlclJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdFJvb20oKSB7XHJcbiAgY29uc3QgdXVpZD1cIm5qS2ZqOUxDcnVhUnI5RFRydkJvOVlCdFU1YzJcIiA7IFxyXG4gIGNvbnN0IGR1bW15ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbWVzc2FnZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gbWVzc2FnZXNSZWYud2hlcmUoXCJ1dWlkXCIsIFwiPT1cIiwgXCJuaktmajlMQ3J1YVJyOURUcnZCbzlZQnRVNWMyXCIgLCBcInx8XCIgLFwidWlkXCIsXCI9PVwiLFwiOXBQeGRETktxOFBwYnpmZndwNE01OTh5VkFLMlwiKS5cclxuXHJcbiAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZUNvbGxlY3Rpb25EYXRhKHF1ZXJ5LCB7IGlkRmllbGQ6IFwiaWRcIiB9KTtcclxuXHJcbiAgY29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyB1aWQsIHBob3RvVVJMIH0gPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgYXdhaXQgbWVzc2FnZXNSZWYuYWRkKHtcclxuICAgICAgdGV4dDogZm9ybVZhbHVlLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB1aWQsXHJcbiAgICAgIHBob3RvVVJMLFxyXG4gICAgICB1dWlkICxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZvcm1WYWx1ZShcIlwiKTtcclxuICAgIGR1bW15LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge21lc3NhZ2VzICYmXHJcbiAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1zZykgPT4gPENoYXRNZXNzYWdlIGtleT17bXNnLmlkfSBtZXNzYWdlPXttc2d9IC8+KX1cclxuXHJcbiAgICAgICAgPHNwYW4gcmVmPXtkdW1teX0+PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybVZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSB5b3VyIG1lc3NhZ2UgaGVyZSBcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybVZhbHVlfT5cclxuICAgICAgICAgIPCfkqxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhdE1lc3NhZ2UoZSkge1xyXG4gIGNvbnN0IHsgdGV4dCwgdWlkLCBwaG90b1VSTCB9ID0gZS5tZXNzYWdlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtwaG90b1VSTH0gLz5cclxuICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsInN0b3JhZ2UiLCJkYiIsImF1dGgiLCJnZXREb2MiLCJkb2MiLCJ1cGRhdGVEb2MiLCJzaWduT3V0IiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbkRhdGEiLCJIZWFkZXIiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZXN0b3JlIiwiaGFuZGxlT25DbGlja09uTG9nb3V0IiwiY3VycmVudFVzZXIiLCJ1aWQiLCJpc09ubGluZSIsInJvdXRlciIsInB1c2giLCJDaGF0IiwidXNlciIsInNldFVzZXIiLCJ0aGVuIiwiZG9jU25hcCIsImV4aXN0cyIsImRhdGEiLCJTaWduSW4iLCJzaWduSW5XaXRoR29vZ2xlIiwicHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJTZWxlY3RVc2VyIiwiVXNlclJlZiIsImNvbGxlY3Rpb24iLCJDaGF0Um9vbSIsInV1aWQiLCJkdW1teSIsIm1lc3NhZ2VzUmVmIiwicXVlcnkiLCJ3aGVyZSIsIm1lc3NhZ2VzIiwiaWRGaWVsZCIsImZvcm1WYWx1ZSIsInNldEZvcm1WYWx1ZSIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGhvdG9VUkwiLCJhZGQiLCJ0ZXh0IiwiY3JlYXRlZEF0IiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibWFwIiwibXNnIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNoYXRNZXNzYWdlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=
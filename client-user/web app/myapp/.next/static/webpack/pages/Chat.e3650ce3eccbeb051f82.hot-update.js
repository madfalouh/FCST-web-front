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
  var query = messagesRef.where("uuid", "==", "njKfj9LCruaRr9DTrvBo9YBtU5c2", "||", "uid", "=", "9pPxdDNKq8Ppbzffwp4M598yVAK2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC5lMzY1MGNlM2VjY2JlYjA1MWY4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUksc0VBQUEsQ0FBdUI7QUFDckJZLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLHdDQUZTO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsNERBSFE7QUFJckJDLEVBQUFBLFNBQVMsRUFBRSx3QkFKVTtBQUtyQkMsRUFBQUEsYUFBYSxFQUFFLG9DQUxNO0FBTXJCQyxFQUFBQSxpQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxFQUFBQSxLQUFLLEVBQUUsMkNBUGM7QUFRckJDLEVBQUFBLGFBQWEsRUFBRTtBQVJNLENBQXZCO0FBV0EsSUFBTUMsU0FBUyxHQUFHcEIsa0VBQUEsRUFBbEI7O0FBQ0EsSUFBTXFCLHFCQUFxQjtBQUFBLHFUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QmYsNkRBQVMsQ0FBQ0QsdURBQUcsQ0FBQ0gseUNBQUQsRUFBSyxPQUFMLEVBQWNDLDJEQUFkLENBQUosRUFBeUM7QUFDdERxQixjQUFBQSxRQUFRLEVBQUU7QUFENEMsYUFBekMsQ0FEYTs7QUFBQTtBQUFBO0FBQUEsbUJBS3RCakIsc0RBQU8sQ0FBQ0osMkNBQUQsQ0FMZTs7QUFBQTtBQU81QnNCLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVo7O0FBUDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXJCTCxxQkFBcUI7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBVUEsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUNkLGtCQUF3QjdCLCtDQUFRLEVBQWhDO0FBQUEsTUFBTzhCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBOUIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RLLElBQUFBLDBEQUFNLENBQUNDLHVEQUFHLENBQUNILHlDQUFELEVBQUssT0FBTCxFQUFjQywyREFBZCxDQUFKLENBQU4sQ0FBK0MyQixJQUEvQyxDQUFvRCxVQUFDQyxPQUFELEVBQWE7QUFDL0QsVUFBSUEsT0FBTyxDQUFDQyxNQUFaLEVBQW9CO0FBQ2xCSCxRQUFBQSxPQUFPLENBQUNFLE9BQU8sQ0FBQ0UsSUFBUixFQUFELENBQVA7QUFDRDtBQUNGLEtBSkQ7QUFPRCxHQVJRLENBQVQ7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSxnQkFBVUwsSUFBSSxnQkFBRywrREFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxnQkFBa0IsK0RBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXRCUUQ7O0tBQUFBOztBQXdCVCxTQUFTTyxNQUFULEdBQWtCO0FBQ2hCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFNQyxRQUFRLEdBQUcsSUFBSXBDLGdGQUFKLEVBQWpCO0FBQ0FHLElBQUFBLDJEQUFBLENBQXFCaUMsUUFBckI7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBUSxlQUFTLEVBQUMsU0FBbEI7QUFBNEIsYUFBTyxFQUFFRCxnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9EOztNQWJRRDs7QUFlVCxTQUFTSyxVQUFULEdBQXFCO0FBQ25CLE1BQU1DLE9BQU8sR0FBR3BCLFNBQVMsQ0FBQ3FCLFVBQVYsQ0FBcUIsT0FBckIsQ0FBaEI7QUFJRDs7TUFMUUY7O0FBU1QsU0FBU0csUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxJQUFJLEdBQUMsOEJBQVg7QUFDQSxNQUFNQyxLQUFLLEdBQUcvQyw2Q0FBTSxFQUFwQjtBQUNBLE1BQU1nRCxXQUFXLEdBQUd6QixTQUFTLENBQUNxQixVQUFWLENBQXFCLFVBQXJCLENBQXBCO0FBQ0EsTUFBTUssS0FBSyxHQUFHRCxXQUFXLENBQUNFLEtBQVosQ0FBa0IsTUFBbEIsRUFBMEIsSUFBMUIsRUFBZ0MsOEJBQWhDLEVBQWlFLElBQWpFLEVBQXVFLEtBQXZFLEVBQTZFLEdBQTdFLEVBQWlGLDhCQUFqRixDQUFkOztBQUVBLDJCQUFtQnRDLGtGQUFpQixDQUFDcUMsS0FBRCxFQUFRO0FBQUVFLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQVIsQ0FBcEM7QUFBQTtBQUFBLE1BQU9DLFFBQVA7O0FBRUEsbUJBQWtDbkQsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT29ELFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsV0FBVztBQUFBLHdUQUFHLGtCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQURrQixrQ0FHUW5ELHVEQUhSLEVBR1ZvQixHQUhVLHFCQUdWQSxHQUhVLEVBR0xnQyxRQUhLLHFCQUdMQSxRQUhLO0FBQUE7QUFBQSxxQkFJWlYsV0FBVyxDQUFDVyxHQUFaLENBQWdCO0FBQ3BCQyxnQkFBQUEsSUFBSSxFQUFFUCxTQURjO0FBRXBCUSxnQkFBQUEsU0FBUyxFQUFFMUQsNkZBQUEsRUFGUztBQUdwQnVCLGdCQUFBQSxHQUFHLEVBQUhBLEdBSG9CO0FBSXBCZ0MsZ0JBQUFBLFFBQVEsRUFBUkEsUUFKb0I7QUFLcEJaLGdCQUFBQSxJQUFJLEVBQUpBO0FBTG9CLGVBQWhCLENBSlk7O0FBQUE7QUFZbEJRLGNBQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7QUFDQVAsY0FBQUEsS0FBSyxDQUFDaUIsT0FBTixDQUFjQyxjQUFkLENBQTZCO0FBQUVDLGdCQUFBQSxRQUFRLEVBQUU7QUFBWixlQUE3Qjs7QUFia0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWFgsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFnQkEsc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRTtBQUFBLGlCQUNHSCxRQUFRLElBQ1BBLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLFVBQUNDLEdBQUQ7QUFBQSw0QkFBUywrREFBQyxXQUFEO0FBQTBCLGlCQUFPLEVBQUVBO0FBQW5DLFdBQWtCQSxHQUFHLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVQ7QUFBQSxPQUFiLENBRkosZUFJRTtBQUFNLFdBQUcsRUFBRXRCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBVUU7QUFBTSxjQUFRLEVBQUVRLFdBQWhCO0FBQUEsOEJBQ0U7QUFDRSxhQUFLLEVBQUVGLFNBRFQ7QUFFRSxnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9GLFlBQVksQ0FBQ0UsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxTQUZaO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZ0JBQVEsRUFBRSxDQUFDbEIsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBLGtCQURGO0FBd0JEOztJQWxEUVI7VUFNWWpDOzs7TUFOWmlDOztBQW9EVCxTQUFTMkIsV0FBVCxDQUFxQmhCLENBQXJCLEVBQXdCO0FBQ3RCLG1CQUFnQ0EsQ0FBQyxDQUFDaUIsT0FBbEM7QUFBQSxNQUFRYixJQUFSLGNBQVFBLElBQVI7QUFBQSxNQUFjbEMsR0FBZCxjQUFjQSxHQUFkO0FBQUEsTUFBbUJnQyxRQUFuQixjQUFtQkEsUUFBbkI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFRRDs7TUFWUVk7QUFZVCwrREFBZTFDLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSAgLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiO1xyXG5pbXBvcnQgeyBzdG9yYWdlLCBkYiwgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXREb2MsIGRvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbkRhdGEgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QkNPc25UWHZfLXNsRDNWX0VHSnNRSk5veDlrZUNZaWhZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc3R1ZGllZC1iaXBsYW5lLTI4ODkxNC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIwMDEyNTkzNzc2OVwiLFxyXG4gIGFwcElkOiBcIjE6MjAwMTI1OTM3NzY5OndlYjpiN2RkODA2NTNlYTY2ZmEzYWQ4YWY4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJQV1MxOUhXSk1cIixcclxufSk7XHJcblxyXG5jb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgaGFuZGxlT25DbGlja09uTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICBpc09ubGluZTogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcblxyXG4gIHJvdXRlci5wdXNoKFwiL0hvbWVcIik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKSkudGhlbigoZG9jU25hcCkgPT4ge1xyXG4gICAgICBpZiAoZG9jU25hcC5leGlzdHMpIHtcclxuICAgICAgICBzZXRVc2VyKGRvY1NuYXAuZGF0YSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT48L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPnt1c2VyID8gPENoYXRSb29tIC8+IDogPFNpZ25JbiAvPn08L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnbi1pblwiIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PlxyXG4gICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RVc2VyKCl7XHJcbiAgY29uc3QgVXNlclJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdFJvb20oKSB7XHJcbiAgY29uc3QgdXVpZD1cIm5qS2ZqOUxDcnVhUnI5RFRydkJvOVlCdFU1YzJcIiA7IFxyXG4gIGNvbnN0IGR1bW15ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbWVzc2FnZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gbWVzc2FnZXNSZWYud2hlcmUoXCJ1dWlkXCIsIFwiPT1cIiwgXCJuaktmajlMQ3J1YVJyOURUcnZCbzlZQnRVNWMyXCIgLCBcInx8XCIgLFwidWlkXCIsXCI9XCIsXCI5cFB4ZEROS3E4UHBiemZmd3A0TTU5OHlWQUsyXCIpXHJcblxyXG4gIGNvbnN0IFttZXNzYWdlc10gPSB1c2VDb2xsZWN0aW9uRGF0YShxdWVyeSwgeyBpZEZpZWxkOiBcImlkXCIgfSk7XHJcblxyXG4gIGNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdWlkLCBwaG90b1VSTCB9ID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGF3YWl0IG1lc3NhZ2VzUmVmLmFkZCh7XHJcbiAgICAgIHRleHQ6IGZvcm1WYWx1ZSxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgdWlkLFxyXG4gICAgICBwaG90b1VSTCxcclxuICAgICAgdXVpZCAsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRGb3JtVmFsdWUoXCJcIik7XHJcbiAgICBkdW1teS5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHttZXNzYWdlcyAmJlxyXG4gICAgICAgICAgbWVzc2FnZXMubWFwKChtc2cpID0+IDxDaGF0TWVzc2FnZSBrZXk9e21zZy5pZH0gbWVzc2FnZT17bXNnfSAvPil9XHJcblxyXG4gICAgICAgIDxzcGFuIHJlZj17ZHVtbXl9Pjwvc3Bhbj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1WYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgeW91ciBtZXNzYWdlIGhlcmUgXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWZvcm1WYWx1ZX0+XHJcbiAgICAgICAgICDwn5KsXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoYXRNZXNzYWdlKGUpIHtcclxuICBjb25zdCB7IHRleHQsIHVpZCwgcGhvdG9VUkwgfSA9IGUubWVzc2FnZTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz17cGhvdG9VUkx9IC8+XHJcbiAgICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJzdG9yYWdlIiwiZGIiLCJhdXRoIiwiZ2V0RG9jIiwiZG9jIiwidXBkYXRlRG9jIiwic2lnbk91dCIsInVzZUF1dGhTdGF0ZSIsInVzZUNvbGxlY3Rpb25EYXRhIiwiSGVhZGVyIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmVzdG9yZSIsImhhbmRsZU9uQ2xpY2tPbkxvZ291dCIsImN1cnJlbnRVc2VyIiwidWlkIiwiaXNPbmxpbmUiLCJyb3V0ZXIiLCJwdXNoIiwiQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwidGhlbiIsImRvY1NuYXAiLCJleGlzdHMiLCJkYXRhIiwiU2lnbkluIiwic2lnbkluV2l0aEdvb2dsZSIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiU2VsZWN0VXNlciIsIlVzZXJSZWYiLCJjb2xsZWN0aW9uIiwiQ2hhdFJvb20iLCJ1dWlkIiwiZHVtbXkiLCJtZXNzYWdlc1JlZiIsInF1ZXJ5Iiwid2hlcmUiLCJpZEZpZWxkIiwibWVzc2FnZXMiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWUiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob3RvVVJMIiwiYWRkIiwidGV4dCIsImNyZWF0ZWRBdCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm1hcCIsIm1zZyIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJDaGF0TWVzc2FnZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9
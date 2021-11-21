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
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h1", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("section", {
      children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ChatRoom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 24
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(SignIn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 39
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
      className: "sign-in",
      onClick: signInWithGoogle,
      children: "Sign in with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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

  var dummy = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var messagesRef = firestore.collection("messages");
  var query = messagesRef.where("uuid", "==", "njKfj9LCruaRr9DTrvBo9YBtU5c2", "||", "uid", "==", "9pPxdDNKq8Ppbzffwp4M598yVAK2");

  var _useCollectionData = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useCollectionData)(query, {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("main", {
      children: [messages && messages.map(function (msg) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ChatMessage, {
          message: msg
        }, msg.id, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 33
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
        ref: dummy
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
        type: "submit",
        disabled: !formValue,
        children: "\uD83D\uDCAC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(ChatRoom, "mjNEwEIb0WBSFyCyv/zX3AnHy9U=", false, function () {
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
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC4yZDQzY2JhNGI3Mjc3Y2Q5Yjc3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBd0M7QUFDeEM7OztBQUVBSSxzRUFBQSxDQUF1QjtBQUNyQlcsRUFBQUEsTUFBTSxFQUFFLHlDQURhO0FBRXJCQyxFQUFBQSxVQUFVLEVBQUUsd0NBRlM7QUFHckJDLEVBQUFBLFdBQVcsRUFBRSw0REFIUTtBQUlyQkMsRUFBQUEsU0FBUyxFQUFFLHdCQUpVO0FBS3JCQyxFQUFBQSxhQUFhLEVBQUUsb0NBTE07QUFNckJDLEVBQUFBLGlCQUFpQixFQUFFLGNBTkU7QUFPckJDLEVBQUFBLEtBQUssRUFBRSwyQ0FQYztBQVFyQkMsRUFBQUEsYUFBYSxFQUFFO0FBUk0sQ0FBdkI7QUFXQSxJQUFNQyxTQUFTLEdBQUduQixrRUFBQSxFQUFsQjs7QUFDQSxJQUFNb0IscUJBQXFCO0FBQUEscVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3RCZCw2REFBUyxDQUFDRCx1REFBRyxDQUFDSCx5Q0FBRCxFQUFLLE9BQUwsRUFBY0MsMkRBQWQsQ0FBSixFQUF5QztBQUN0RG9CLGNBQUFBLFFBQVEsRUFBRTtBQUQ0QyxhQUF6QyxDQURhOztBQUFBO0FBQUE7QUFBQSxtQkFLdEJoQixzREFBTyxDQUFDSiwyQ0FBRCxDQUxlOztBQUFBO0FBTzVCcUIsWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWjs7QUFQNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBckJMLHFCQUFxQjtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFVQSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQ2Qsa0JBQXdCNUIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPNkIsSUFBUDtBQUFBLE1B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R0FBZDtBQUFBLE1BQW1CK0IsUUFBbkIsY0FBbUJBLFFBQW5CO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQ7O01BVlFhO0FBWVQsK0RBQWUxQyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NoYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiO1xyXG5pbXBvcnQgeyBzdG9yYWdlLCBkYiwgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXREb2MsIGRvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtpbXBvcnQgeyB1c2VDb2xsZWN0aW9uRGF0YSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gIGFwaUtleTogXCJBSXphU3lCQ09zblRYdl8tc2xEM1ZfRUdKc1FKTm94OWtlQ1lpaFlcIixcclxuICBhdXRoRG9tYWluOiBcInN0dWRpZWQtYmlwbGFuZS0yODg5MTQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zdHVkaWVkLWJpcGxhbmUtMjg4OTE0LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjAwMTI1OTM3NzY5XCIsXHJcbiAgYXBwSWQ6IFwiMToyMDAxMjU5Mzc3Njk6d2ViOmI3ZGQ4MDY1M2VhNjZmYTNhZDhhZjhcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctQlBXUzE5SFdKTVwiLFxyXG59KTtcclxuXHJcbmNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBoYW5kbGVPbkNsaWNrT25Mb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgIGlzT25saW5lOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgc2lnbk91dChhdXRoKTtcclxuXHJcbiAgcm91dGVyLnB1c2goXCIvSG9tZVwiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpKS50aGVuKChkb2NTbmFwKSA9PiB7XHJcbiAgICAgIGlmIChkb2NTbmFwLmV4aXN0cykge1xyXG4gICAgICAgIHNldFVzZXIoZG9jU25hcC5kYXRhKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPjwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPHNlY3Rpb24+e3VzZXIgPyA8Q2hhdFJvb20gLz4gOiA8U2lnbkluIC8+fTwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWduLWluXCIgb25DbGljaz17c2lnbkluV2l0aEdvb2dsZX0+XHJcbiAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFVzZXIoKSB7XHJcbiAgY29uc3QgVXNlclJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoYXRSb29tKCkge1xyXG4gIGNvbnN0IGR1bW15ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbWVzc2FnZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gbWVzc2FnZXNSZWYud2hlcmUoXHJcbiAgICBcInV1aWRcIixcclxuICAgIFwiPT1cIixcclxuICAgIFwibmpLZmo5TENydWFScjlEVHJ2Qm85WUJ0VTVjMlwiLFxyXG4gICAgXCJ8fFwiLFxyXG4gICAgXCJ1aWRcIixcclxuICAgIFwiPT1cIixcclxuICAgIFwiOXBQeGRETktxOFBwYnpmZndwNE01OTh5VkFLMlwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZUNvbGxlY3Rpb25EYXRhKHF1ZXJ5LCB7IGlkRmllbGQ6IFwiaWRcIiB9KTtcclxuXHJcbiAgY29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyB1aWQsIHBob3RvVVJMIH0gPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgYXdhaXQgbWVzc2FnZXNSZWYuYWRkKHtcclxuICAgICAgdGV4dDogZm9ybVZhbHVlLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB1aWQsXHJcbiAgICAgIHBob3RvVVJMLFxyXG4gICAgICB1dWlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Rm9ybVZhbHVlKFwiXCIpO1xyXG4gICAgZHVtbXkuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7bWVzc2FnZXMgJiZcclxuICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobXNnKSA9PiA8Q2hhdE1lc3NhZ2Uga2V5PXttc2cuaWR9IG1lc3NhZ2U9e21zZ30gLz4pfVxyXG5cclxuICAgICAgICA8c3BhbiByZWY9e2R1bW15fT48L3NwYW4+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIHlvdXIgbWVzc2FnZSBoZXJlIFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFmb3JtVmFsdWV9PlxyXG4gICAgICAgICAg8J+SrFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGF0TWVzc2FnZShlKSB7XHJcbiAgY29uc3QgeyB0ZXh0LCB1aWQsIHBob3RvVVJMIH0gPSBlLm1lc3NhZ2U7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9e3Bob3RvVVJMfSAvPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwic3RvcmFnZSIsImRiIiwiYXV0aCIsImdldERvYyIsImRvYyIsInVwZGF0ZURvYyIsInNpZ25PdXQiLCJ1c2VDb2xsZWN0aW9uRGF0YSIsIkhlYWRlciIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJoYW5kbGVPbkNsaWNrT25Mb2dvdXQiLCJjdXJyZW50VXNlciIsInVpZCIsImlzT25saW5lIiwicm91dGVyIiwicHVzaCIsIkNoYXQiLCJ1c2VyIiwic2V0VXNlciIsInRoZW4iLCJkb2NTbmFwIiwiZXhpc3RzIiwiZGF0YSIsIlNpZ25JbiIsInNpZ25JbldpdGhHb29nbGUiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsIlNlbGVjdFVzZXIiLCJVc2VyUmVmIiwiY29sbGVjdGlvbiIsIkNoYXRSb29tIiwiZHVtbXkiLCJtZXNzYWdlc1JlZiIsInF1ZXJ5Iiwid2hlcmUiLCJpZEZpZWxkIiwibWVzc2FnZXMiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWUiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob3RvVVJMIiwiYWRkIiwidGV4dCIsImNyZWF0ZWRBdCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ1dWlkIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtYXAiLCJtc2ciLCJpZCIsInRhcmdldCIsInZhbHVlIiwiQ2hhdE1lc3NhZ2UiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
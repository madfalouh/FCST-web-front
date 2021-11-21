"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Login = function Login() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false
  }),
      data = _useState[0],
      setData = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var name = data.name,
      email = data.email,
      password = data.password,
      error = data.error,
      loading = data.loading;

  var handleChange = function handleChange(e) {
    setData(_objectSpread(_objectSpread({}, data), {}, (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var result;
      return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(data);
              setData(_objectSpread(_objectSpread({}, data), {}, {
                error: null,
                loading: true
              }));

              if (!name || !email || !password) {
                setData(_objectSpread(_objectSpread({}, data), {}, {
                  error: "All fields are required"
                }));
              }

              _context.prev = 4;
              _context.next = 7;
              return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, email, password);

            case 7:
              result = _context.sent;
              _context.next = 10;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, "users", result.user.uid), {
                isOnline: true
              });

            case 10:
              setData({
                name: "",
                email: "",
                password: "",
                error: null,
                loading: false
              });
              router.push("/Home");
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);
              setData(_objectSpread(_objectSpread({}, data), {}, {
                error: _context.t0.message,
                loading: false
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 14]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
      children: "Create An Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("form", {
      className: "form",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "input_container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
          type: "text",
          name: "email",
          value: email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "input_container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
          type: "password",
          name: "password",
          value: password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "error",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 18
      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "btn_container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "btn",
          disabled: loading,
          children: loading ? "Creating ..." : "click me "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Login, "B5UgOUsYCKplSC8Xpxoy/ZmIAxI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMThhNTgyYWVjZjA3OWE3Mzg2MDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixrQkFBd0JULCtDQUFRLENBQUM7QUFDL0JVLElBQUFBLElBQUksRUFBRSxFQUR5QjtBQUUvQkMsSUFBQUEsS0FBSyxFQUFFLEVBRndCO0FBRy9CQyxJQUFBQSxRQUFRLEVBQUUsRUFIcUI7QUFJL0JDLElBQUFBLEtBQUssRUFBRSxJQUp3QjtBQUsvQkMsSUFBQUEsT0FBTyxFQUFFO0FBTHNCLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFRQSxNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCO0FBRUEsTUFBUUUsSUFBUixHQUFrREssSUFBbEQsQ0FBUUwsSUFBUjtBQUFBLE1BQWNDLEtBQWQsR0FBa0RJLElBQWxELENBQWNKLEtBQWQ7QUFBQSxNQUFxQkMsUUFBckIsR0FBa0RHLElBQWxELENBQXFCSCxRQUFyQjtBQUFBLE1BQStCQyxLQUEvQixHQUFrREUsSUFBbEQsQ0FBK0JGLEtBQS9CO0FBQUEsTUFBc0NDLE9BQXRDLEdBQWtEQyxJQUFsRCxDQUFzQ0QsT0FBdEM7O0FBRUEsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCSCxJQUFBQSxPQUFPLGlDQUFNRCxJQUFOLDZKQUFhSSxDQUFDLENBQUNDLE1BQUYsQ0FBU1YsSUFBdEIsRUFBNkJTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF0QyxHQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxZQUFZO0FBQUEsdVRBQUcsaUJBQU9ILENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxj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QUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQXpFRDs7R0FBTUw7VUFTV0Q7OztLQVRYQztBQTJFTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBzZXREb2MsIHVwZGF0ZURvYywgZG9jLCBUaW1lc3RhbXAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nIH0gPSBkYXRhO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RGF0YSh7IC4uLmRhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgc2V0RGF0YSh7IC4uLmRhdGEsIGVycm9yOiBudWxsLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGVycm9yOiBcIkFsbCBmaWVsZHMgYXJlIHJlcXVpcmVkXCIgfSk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcInVzZXJzXCIsIHJlc3VsdC51c2VyLnVpZCksIHtcclxuICAgICAgICBpc09ubGluZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldERhdGEoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcm91dGVyLnB1c2goXCIvSG9tZVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZXJyb3I6IGVyci5tZXNzYWdlLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgzPkNyZWF0ZSBBbiBBY2NvdW50PC9oMz5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtlcnJvciA/IDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yfTwvcD4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJDcmVhdGluZyAuLi5cIiA6IFwiY2xpY2sgbWUgXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImF1dGgiLCJkYiIsInNldERvYyIsInVwZGF0ZURvYyIsImRvYyIsIlRpbWVzdGFtcCIsInVzZVJvdXRlciIsIkxvZ2luIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInVzZXIiLCJ1aWQiLCJpc09ubGluZSIsInB1c2giLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
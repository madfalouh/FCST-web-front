"use strict";
self["webpackHotUpdate_N_E"]("pages/Chat",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _circles_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circles.png */ "./components/circles.png");
/* harmony import */ var _images_cam_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/cam.png */ "./images/cam.png");
/* harmony import */ var _components_FirstPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FirstPage */ "./components/FirstPage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/auth */ "./context/auth.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\components\\Header.js",
    _s = $RefreshSig$();















function Header() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var handleOnClickOnRegister = function handleOnClickOnRegister() {
    return router.push("/register");
  };

  var handleOnClickOnLogin = function handleOnClickOnLogin() {
    return router.push("/login");
  };

  var handleOnClickOnProfile = function handleOnClickOnProfile() {
    return router.push("/profile");
  };

  var handleOnClickOnChat = function handleOnClickOnChat() {
    return router.push("/Chat");
  };

  var handleOnClickOnLogout = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_hp_Desktop_web_app_myapp_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser.uid), {
                isOnline: false
              });

            case 2:
              _context.next = 4;
              return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_7__.auth);

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_10__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "bg-bluenav",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _circles_png__WEBPACK_IMPORTED_MODULE_3__.default,
        width: 190,
        height: 70
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "flex justify-center  ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "flex space-x md:space-x-12 -mt-12  text-textcolor font-body ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            className: " text-xl cursor-pointer hover:text-textcolorhover \t",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            className: " text-xl cursor-pointer\thover:text-textcolorhover   \t",
            onClick: handleOnClickOnChat,
            children: "Chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
              className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
              onClick: handleOnClickOnProfile,
              children: "profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
              className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
              onClick: handleOnClickOnLogout,
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
              className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
              onClick: handleOnClickOnLogin,
              children: "Sign in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
              className: "text-xl cursor-pointer hover:text-textcolorhover  \t",
              onClick: handleOnClickOnRegister,
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, this)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            className: "text-xl cursor-pointer hover:text-textcolorhover  \t",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
        className: "bg-red-500 active:bg-red-700  rounded-md      float-right mx-8\t-mt-16  h-12 w-80  ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
          className: "text-white text-xl cursor-pointer font-body\t",
          children: "\uD83D\uDCE2 deposer une annonce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Header, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hhdC5lNmJlZGFlZTY2MTYyMzNhOGFlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsU0FBU1ksTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1TLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEI7QUFBQSxXQUFNRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaLENBQU47QUFBQSxHQUFoQzs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsV0FBTUgsTUFBTSxDQUFDRSxJQUFQLENBQVksUUFBWixDQUFOO0FBQUEsR0FBN0I7O0FBQ0EsTUFBTUUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLFdBQU1KLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFVBQVosQ0FBTjtBQUFBLEdBQS9COztBQUNBLE1BQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxXQUFNTCxNQUFNLENBQUNFLElBQVAsQ0FBWSxPQUFaLENBQU47QUFBQSxHQUE1Qjs7QUFDQSxNQUFNSSxxQkFBcUI7QUFBQSx1VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDdEJWLDZEQUFTLENBQUNDLHVEQUFHLENBQUNILHlDQUFELEVBQUssT0FBTCxFQUFjRCwyREFBZCxDQUFKLEVBQXlDO0FBQ3REZ0IsZ0JBQUFBLFFBQVEsRUFBRTtBQUQ0QyxlQUF6QyxDQURhOztBQUFBO0FBQUE7QUFBQSxxQkFLdEJkLHNEQUFPLENBQUNGLDJDQUFELENBTGU7O0FBQUE7QUFPNUJPLGNBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLE9BQVo7O0FBUDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXJCSSxxQkFBcUI7QUFBQTtBQUFBO0FBQUEsS0FBM0I7O0FBU0Esc0JBQ0UsK0RBQUMsbURBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0UsK0RBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVsQixpREFBWjtBQUF3QixhQUFLLEVBQUUsR0FBL0I7QUFBb0MsY0FBTSxFQUFFO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyw4REFBZjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQyxzREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQ0UscUJBQVMsRUFBQyx5REFEWjtBQUVFLG1CQUFPLEVBQUVpQixtQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixFQVVHWix1REFBQSxnQkFDQztBQUFBLG9DQUNFO0FBQ0UsdUJBQVMsRUFBQyxzREFEWjtBQUVFLHFCQUFPLEVBQUVXLHNCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBT0U7QUFDRSx1QkFBUyxFQUFDLHNEQURaO0FBRUUscUJBQU8sRUFBRUUscUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQSwwQkFERCxnQkFnQkM7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsc0RBRFo7QUFFRSxxQkFBTyxFQUFFSCxvQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU9FO0FBQ0UsdUJBQVMsRUFBQyxzREFEWjtBQUVFLHFCQUFPLEVBQUVGLHVCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUEsMEJBMUJKLGVBMENFO0FBQUcscUJBQVMsRUFBQyxzREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBb0RFO0FBQVEsaUJBQVMsRUFBQyxxRkFBbEI7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThERDs7R0E3RVFGO1VBQ1FQOzs7S0FEUk87QUErRVQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuL2NpcmNsZXMucG5nXCI7XHJcbmltcG9ydCBjYW1QaWMgZnJvbSBcIi4uL2ltYWdlcy9jYW0ucG5nXCI7XHJcbmltcG9ydCBGaXJzdFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlyc3RQYWdlXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXBkYXRlRG9jLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlT25DbGlja09uUmVnaXN0ZXIgPSAoKSA9PiByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKTtcclxuICBjb25zdCBoYW5kbGVPbkNsaWNrT25Mb2dpbiA9ICgpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tPblByb2ZpbGUgPSAoKSA9PiByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tPbkNoYXQgPSAoKSA9PiByb3V0ZXIucHVzaChcIi9DaGF0XCIpO1xyXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tPbkxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICAgIGlzT25saW5lOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcblxyXG4gICAgcm91dGVyLnB1c2goXCIvSG9tZVwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWVuYXZcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSB3aWR0aD17MTkwfSBoZWlnaHQ9ezcwfT48L0ltYWdlPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXggbWQ6c3BhY2UteC0xMiAtbXQtMTIgIHRleHQtdGV4dGNvbG9yIGZvbnQtYm9keSBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciBcdFwiPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcdGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgICBcdFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja09uQ2hhdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENoYXRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICB7YXV0aC5jdXJyZW50VXNlciA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcdGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgIFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tPblByb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHByb2ZpbGVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXHRob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrT25Mb2dvdXR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcdGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgIFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tPbkxvZ2lufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgIFx0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja09uUmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciAgXHRcIj5cclxuICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgYWN0aXZlOmJnLXJlZC03MDAgIHJvdW5kZWQtbWQgICAgICBmbG9hdC1yaWdodCBteC04XHQtbXQtMTYgIGgtMTIgdy04MCAgXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2R5XHRcIj5cclxuICAgICAgICAgICAg8J+ToiBkZXBvc2VyIHVuZSBhbm5vbmNlXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJwcm9maWxlUGljIiwiY2FtUGljIiwiRmlyc3RQYWdlIiwiUm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsImRiIiwic2lnbk91dCIsInVwZGF0ZURvYyIsImRvYyIsIkF1dGhQcm92aWRlciIsIkhlYWRlciIsInJvdXRlciIsImhhbmRsZU9uQ2xpY2tPblJlZ2lzdGVyIiwicHVzaCIsImhhbmRsZU9uQ2xpY2tPbkxvZ2luIiwiaGFuZGxlT25DbGlja09uUHJvZmlsZSIsImhhbmRsZU9uQ2xpY2tPbkNoYXQiLCJoYW5kbGVPbkNsaWNrT25Mb2dvdXQiLCJjdXJyZW50VXNlciIsInVpZCIsImlzT25saW5lIl0sInNvdXJjZVJvb3QiOiIifQ==
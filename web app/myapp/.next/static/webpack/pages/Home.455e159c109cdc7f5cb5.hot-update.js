"use strict";
self["webpackHotUpdate_N_E"]("pages/Home",{

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "bg-bluenav",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _circles_png__WEBPACK_IMPORTED_MODULE_3__.default,
      width: 190,
      height: 70
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "flex justify-center  ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "flex space-x md:space-x-12 -mt-12  text-textcolor font-body ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          className: " text-xl cursor-pointer hover:text-textcolorhover \t",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          className: " text-xl cursor-pointer\thover:text-textcolorhover   \t",
          children: "Chat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), _firebase__WEBPACK_IMPORTED_MODULE_7__.auth.currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
            onClick: handleOnClickOnLogin,
            children: "profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
            onClick: handleOnClickOnLogout,
            children: "Log Out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this)]
        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
            onClick: handleOnClickOnLogin,
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: "text-xl cursor-pointer hover:text-textcolorhover  \t",
            onClick: handleOnClickOnRegister,
            children: "Sign up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, this)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          className: "text-xl cursor-pointer hover:text-textcolorhover  \t",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
      className: "bg-red-500 active:bg-red-700  rounded-md      float-right mx-8\t-mt-16  h-12 w-80  ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        className: "text-white text-xl cursor-pointer font-body\t",
        children: "\uD83D\uDCE2 deposer une annonce"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvSG9tZS40NTVlMTU5YzEwOWNkYzdmNWNiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsU0FBU1csTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1RLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEI7QUFBQSxXQUFNRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaLENBQU47QUFBQSxHQUFoQzs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsV0FBTUgsTUFBTSxDQUFDRSxJQUFQLENBQVksUUFBWixDQUFOO0FBQUEsR0FBN0I7O0FBQ0EsTUFBTUUscUJBQXFCO0FBQUEsdVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3RCUCw2REFBUyxDQUFDQyx1REFBRyxDQUFDSCx5Q0FBRCxFQUFLLE9BQUwsRUFBY0QsMkRBQWQsQ0FBSixFQUF5QztBQUN0RGEsZ0JBQUFBLFFBQVEsRUFBRTtBQUQ0QyxlQUF6QyxDQURhOztBQUFBO0FBQUE7QUFBQSxxQkFLdEJYLHNEQUFPLENBQUNGLDJDQUFELENBTGU7O0FBQUE7QUFPNUJNLGNBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLE9BQVo7O0FBUDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXJCRSxxQkFBcUI7QUFBQTtBQUFBO0FBQUEsS0FBM0I7O0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNFLCtEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFZixpREFBWjtBQUF3QixXQUFLLEVBQUUsR0FBL0I7QUFBb0MsWUFBTSxFQUFFO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDhEQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBRyxtQkFBUyxFQUFDLHlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBT0dLLHVEQUFBLGdCQUNDO0FBQUEsa0NBQ0U7QUFDRSxxQkFBUyxFQUFDLHNEQURaO0FBRUUsbUJBQU8sRUFBRVMsb0JBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLHFCQUFTLEVBQUMsc0RBRFo7QUFFRSxtQkFBTyxFQUFFQyxxQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBLHdCQURELGdCQWdCQztBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBQyxzREFEWjtBQUVFLG1CQUFPLEVBQUVELG9CQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFDRSxxQkFBUyxFQUFDLHNEQURaO0FBRUUsbUJBQU8sRUFBRUYsdUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQSx3QkF2QkosZUF1Q0U7QUFBRyxtQkFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFpREU7QUFBUSxlQUFTLEVBQUMscUZBQWxCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLCtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlERDs7R0F0RVFGO1VBQ1FOOzs7S0FEUk07QUF3RVQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuL2NpcmNsZXMucG5nXCI7XHJcbmltcG9ydCBjYW1QaWMgZnJvbSBcIi4uL2ltYWdlcy9jYW0ucG5nXCI7XHJcbmltcG9ydCBGaXJzdFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlyc3RQYWdlXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXBkYXRlRG9jLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVPbkNsaWNrT25SZWdpc3RlciA9ICgpID0+IHJvdXRlci5wdXNoKFwiL3JlZ2lzdGVyXCIpO1xyXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tPbkxvZ2luID0gKCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgY29uc3QgaGFuZGxlT25DbGlja09uTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgICAgaXNPbmxpbmU6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgc2lnbk91dChhdXRoKTtcclxuXHJcbiAgICByb3V0ZXIucHVzaChcIi9Ib21lXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZW5hdlwiPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSB3aWR0aD17MTkwfSBoZWlnaHQ9ezcwfT48L0ltYWdlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyICBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteCBtZDpzcGFjZS14LTEyIC1tdC0xMiAgdGV4dC10ZXh0Y29sb3IgZm9udC1ib2R5IFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciBcdFwiPlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXHRob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICAgXHRcIj5cclxuICAgICAgICAgICAgQ2hhdFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAge2F1dGguY3VycmVudFVzZXIgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXHRob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICBcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja09uTG9naW59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcdGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgIFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrT25Mb2dvdXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdGV4dC14bCBjdXJzb3ItcG9pbnRlclx0aG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciAgXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tPbkxvZ2lufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciAgXHRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja09uUmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciAgXHRcIj5cclxuICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBhY3RpdmU6YmctcmVkLTcwMCAgcm91bmRlZC1tZCAgICAgIGZsb2F0LXJpZ2h0IG14LThcdC1tdC0xNiAgaC0xMiB3LTgwICBcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2R5XHRcIj5cclxuICAgICAgICAgIPCfk6IgZGVwb3NlciB1bmUgYW5ub25jZVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInByb2ZpbGVQaWMiLCJjYW1QaWMiLCJGaXJzdFBhZ2UiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiZGIiLCJzaWduT3V0IiwidXBkYXRlRG9jIiwiZG9jIiwiSGVhZGVyIiwicm91dGVyIiwiaGFuZGxlT25DbGlja09uUmVnaXN0ZXIiLCJwdXNoIiwiaGFuZGxlT25DbGlja09uTG9naW4iLCJoYW5kbGVPbkNsaWNrT25Mb2dvdXQiLCJjdXJyZW50VXNlciIsInVpZCIsImlzT25saW5lIl0sInNvdXJjZVJvb3QiOiIifQ==
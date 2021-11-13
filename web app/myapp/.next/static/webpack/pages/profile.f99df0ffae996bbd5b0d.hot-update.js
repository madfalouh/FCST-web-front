"use strict";
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();






var Profile = function Profile() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      img = _useState[0],
      setImg = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      user = _useState2[0],
      setUser = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_1__.auth.currentUser.uid)).then(function (docSnap) {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  });
  return user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "profile_container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "img_container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "overlay",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              htmlFor: "photo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "file",
              accept: "image/*",
              style: {
                display: "none"
              },
              id: "photo",
              onChange: function onChange(e) {
                return setImg(e.target.files[0]);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "text_container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("small", {
          children: ["Joined on: ", user.createdAt.toDate().toDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this) : null;
};

_s(Profile, "y46UMIK3PAoeI+K69oroF8pqVZ0=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mOTlkZjBmZmFlOTk2YmJkNWIwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixrQkFBc0JSLCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBLE1BQU9TLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUF3QlYsK0NBQVEsRUFBaEM7QUFBQSxNQUFPVyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQVgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RJLElBQUFBLDBEQUFNLENBQUNDLHVEQUFHLENBQUNILHlDQUFELEVBQUssT0FBTCxFQUFjQywyREFBZCxDQUFKLENBQU4sQ0FBK0NXLElBQS9DLENBQW9ELFVBQUNDLE9BQUQsRUFBYTtBQUMvRCxVQUFJQSxPQUFPLENBQUNDLE1BQVosRUFBb0I7QUFDbEJMLFFBQUFBLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDRSxJQUFSLEVBQUQsQ0FBUDtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBTlEsQ0FBVDtBQVFBLFNBQU9QLElBQUksZ0JBQ1Q7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQU8scUJBQU8sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLG9CQUFNLEVBQUMsU0FGVDtBQUdFLG1CQUFLLEVBQUU7QUFBRVEsZ0JBQUFBLE9BQU8sRUFBRTtBQUFYLGVBSFQ7QUFJRSxnQkFBRSxFQUFDLE9BSkw7QUFLRSxzQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsdUJBQU9WLE1BQU0sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBYjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS1gsSUFBSSxDQUFDWTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLG9CQUFJWixJQUFJLENBQUNhO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBLG9DQUFtQmIsSUFBSSxDQUFDYyxTQUFMLENBQWVDLE1BQWYsR0FBd0JDLFlBQXhCLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFMsR0F5QlAsSUF6Qko7QUEwQkQsQ0F0Q0Q7O0dBQU1uQjs7S0FBQUE7QUF3Q04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzdG9yYWdlLCBkYiwgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RG9jLCBkb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKSkudGhlbigoZG9jU25hcCkgPT4ge1xyXG4gICAgICBpZiAoZG9jU25hcC5leGlzdHMpIHtcclxuICAgICAgICBzZXRVc2VyKGRvY1NuYXAuZGF0YSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyID8gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvdG9cIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEltZyhlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDM+e3VzZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgPHA+e3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8c21hbGw+Sm9pbmVkIG9uOiB7dXNlci5jcmVhdGVkQXQudG9EYXRlKCkudG9EYXRlU3RyaW5nKCl9PC9zbWFsbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0b3JhZ2UiLCJkYiIsImF1dGgiLCJnZXREb2MiLCJkb2MiLCJ1cGRhdGVEb2MiLCJQcm9maWxlIiwiaW1nIiwic2V0SW1nIiwidXNlciIsInNldFVzZXIiLCJjdXJyZW50VXNlciIsInVpZCIsInRoZW4iLCJkb2NTbmFwIiwiZXhpc3RzIiwiZGF0YSIsImRpc3BsYXkiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiZW1haWwiLCJjcmVhdGVkQXQiLCJ0b0RhdGUiLCJ0b0RhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9
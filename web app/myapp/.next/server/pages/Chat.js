(() => {
var exports = {};
exports.id = "pages/Chat";
exports.ids = ["pages/Chat"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circles.png */ "./components/circles.png");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/auth */ "./context/auth.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\components\\Header.js";










function Header() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleOnClickOnRegister = () => router.push("/register");

  const handleOnClickOnLogin = () => router.push("/login");

  const handleOnClickOnProfile = () => router.push("/profile");

  const handleOnClickOnChat = () => router.push("/Chat");

  const handleOnClickOnLogout = async () => {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid), {
      isOnline: false
    });
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);
    router.push("/Home");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "bg-bluenav",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _circles_png__WEBPACK_IMPORTED_MODULE_1__.default,
        width: 190,
        height: 70
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "flex justify-center  ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "flex space-x md:space-x-12 -mt-12  text-textcolor font-body ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: " text-xl cursor-pointer hover:text-textcolorhover \t",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: " text-xl cursor-pointer\thover:text-textcolorhover   \t",
            onClick: handleOnClickOnChat,
            children: "Chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
              onClick: handleOnClickOnProfile,
              children: "profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
              onClick: handleOnClickOnLogout,
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: " text-xl cursor-pointer\thover:text-textcolorhover  ",
              onClick: handleOnClickOnLogin,
              children: "Sign in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "text-xl cursor-pointer hover:text-textcolorhover  \t",
              onClick: handleOnClickOnRegister,
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, this)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: "text-xl cursor-pointer hover:text-textcolorhover  \t",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        className: "bg-red-500 active:bg-red-700  rounded-md      float-right mx-8\t-mt-16  h-12 w-80  ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          className: "text-white text-xl cursor-pointer font-body\t",
          children: "\uD83D\uDCE2 deposer une annonce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\components\\Loading.js";



const Loading = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: {
      position: "relative"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      style: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      },
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "useAuth": () => (/* binding */ useAuth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\context\\auth.js";





const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const useAuth = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);

const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, user => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(AuthContext.Provider, {
    value: {
      user
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ "firebase/analytics");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
// Import the functions you need from the SDKs you need



 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBCOsnTXv_-slD3V_EGJsQJNox9keCYihY",
  authDomain: "studied-biplane-288914.firebaseapp.com",
  databaseURL: "https://studied-biplane-288914-default-rtdb.firebaseio.com",
  projectId: "studied-biplane-288914",
  storageBucket: "studied-biplane-288914.appspot.com",
  messagingSenderId: "200125937769",
  appId: "1:200125937769:web:b7dd80653ea66fa3ad8af8",
  measurementId: "G-BPWS19HWJM"
}; // Initialize Firebase

const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);



/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/Chat.js":
/*!***********************!*\
  !*** ./pages/Chat.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ "firebase/compat/app");
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ "firebase/compat/firestore");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ "firebase/compat/auth");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "react-firebase-hooks/firestore");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\web app\\myapp\\pages\\Chat.js";











firebase_compat_app__WEBPACK_IMPORTED_MODULE_1___default().initializeApp({
  apiKey: "AIzaSyBCOsnTXv_-slD3V_EGJsQJNox9keCYihY",
  authDomain: "studied-biplane-288914.firebaseapp.com",
  databaseURL: "https://studied-biplane-288914-default-rtdb.firebaseio.com",
  projectId: "studied-biplane-288914",
  storageBucket: "studied-biplane-288914.appspot.com",
  messagingSenderId: "200125937769",
  appId: "1:200125937769:web:b7dd80653ea66fa3ad8af8",
  measurementId: "G-BPWS19HWJM"
});
const firestore = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1___default().firestore();

const handleOnClickOnLogout = async () => {
  await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.uid), {
    isOnline: false
  });
  await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);
  router.push("/Home");
};

function Chat() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, "users", _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.uid)).then(docSnap => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ChatRoom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 24
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SignIn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 39
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new (firebase_compat_app__WEBPACK_IMPORTED_MODULE_1___default().auth.GoogleAuthProvider)();
    _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.signInWithPopup(provider);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
      className: "sign-in",
      onClick: signInWithGoogle,
      children: "Sign in with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

function SelectUser() {
  const UserRef = firestore.collection("users");
}

function ChatRoom() {
  const dummy = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.where("uuid", "==", "njKfj9LCruaRr9DTrvBo9YBtU5c2", "||", "uid", "==", "9pPxdDNKq8Ppbzffwp4M598yVAK2");
  const [messages] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useCollectionData)(query, {
    idField: "id"
  });
  const {
    0: formValue,
    1: setFormValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const sendMessage = async e => {
    e.preventDefault();
    const {
      uid,
      photoURL
    } = _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      uuid
    });
    setFormValue("");
    dummy.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("main", {
      children: [messages && messages.map(msg => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ChatMessage, {
        message: msg
      }, msg.id, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
        ref: dummy
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
      onSubmit: sendMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
        value: formValue,
        onChange: e => setFormValue(e.target.value),
        placeholder: "type your message here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
        type: "submit",
        disabled: !formValue,
        children: "\uD83D\uDCAC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

function ChatMessage(e) {
  const {
    text,
    uid,
    photoURL
  } = e.message;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
        src: photoURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

/***/ }),

/***/ "./components/circles.png":
/*!********************************!*\
  !*** ./components/circles.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/components/circles.95973162dbf7a48f076d4ce50d37b849.png","height":393,"width":969,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fcomponents%2Fcircles.95973162dbf7a48f076d4ce50d37b849.png&w=8&q=70"});

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/analytics");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/compat/app");

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/compat/auth");

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/compat/firestore");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Chat.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQU07QUFBRUcsSUFBQUEsSUFBRjtBQUFRcFUsSUFBQUEsR0FBUjtBQUFhbVUsSUFBQUE7QUFBYixNQUEwQkYsQ0FBQyxDQUFDWSxPQUFsQztBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRVY7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVFEOztBQUVELGlFQUFlekIsSUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBLGlFQUFlLENBQUMsNk9BQTZPOzs7Ozs7Ozs7O0FDQTdQLDJHQUErQzs7Ozs7Ozs7Ozs7O0FDQS9DOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2NvbnRleHQvYXV0aC5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215YXBwLy4vcGFnZXMvQ2hhdC5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2NvbXBvbmVudHMvY2lyY2xlcy5wbmciLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teWFwcC9leHRlcm5hbCBcImZpcmViYXNlL2FuYWx5dGljc1wiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9jb21wYXQvYXBwXCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9teWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly9teWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tIFwiLi9jaXJjbGVzLnBuZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIjtcclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tPblJlZ2lzdGVyID0gKCkgPT4gcm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIik7XHJcbiAgY29uc3QgaGFuZGxlT25DbGlja09uTG9naW4gPSAoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICBjb25zdCBoYW5kbGVPbkNsaWNrT25Qcm9maWxlID0gKCkgPT4gcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICBjb25zdCBoYW5kbGVPbkNsaWNrT25DaGF0ID0gKCkgPT4gcm91dGVyLnB1c2goXCIvQ2hhdFwiKTtcclxuICBjb25zdCBoYW5kbGVPbkNsaWNrT25Mb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgICBpc09ubGluZTogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xyXG5cclxuICAgIHJvdXRlci5wdXNoKFwiL0hvbWVcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlbmF2XCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY30gd2lkdGg9ezE5MH0gaGVpZ2h0PXs3MH0+PC9JbWFnZT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyICBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14IG1kOnNwYWNlLXgtMTIgLW10LTEyICB0ZXh0LXRleHRjb2xvciBmb250LWJvZHkgXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgXHRcIj5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXHRob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICAgXHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tPbkNoYXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDaGF0XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAge2F1dGguY3VycmVudFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXHRob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrT25Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBwcm9maWxlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdGV4dC14bCBjdXJzb3ItcG9pbnRlclx0aG92ZXI6dGV4dC10ZXh0Y29sb3Job3ZlciAgXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja09uTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXHRob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrT25Mb2dpbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXRleHRjb2xvcmhvdmVyICBcdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tPblJlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtdGV4dGNvbG9yaG92ZXIgIFx0XCI+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGFjdGl2ZTpiZy1yZWQtNzAwICByb3VuZGVkLW1kICAgICAgZmxvYXQtcmlnaHQgbXgtOFx0LW10LTE2ICBoLTEyIHctODAgIFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGZvbnQtYm9keVx0XCI+XHJcbiAgICAgICAgICAgIPCfk6IgZGVwb3NlciB1bmUgYW5ub25jZVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICA8aDJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIgfX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQcm92aWRlcjsiLCIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcclxuaW1wb3J0IHtnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQge2dldEZpcmVzdG9yZX0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QkNPc25UWHZfLXNsRDNWX0VHSnNRSk5veDlrZUNZaWhZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc3R1ZGllZC1iaXBsYW5lLTI4ODkxNC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIwMDEyNTkzNzc2OVwiLFxyXG4gIGFwcElkOiBcIjE6MjAwMTI1OTM3NzY5OndlYjpiN2RkODA2NTNlYTY2ZmEzYWQ4YWY4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJQV1MxOUhXSk1cIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3QgZGI9Z2V0RmlyZXN0b3JlKGFwcCkgOyBcclxuZXhwb3J0IHtkYn0gOyBcclxuZXhwb3J0IHthdXRofSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9hdXRoXCI7XHJcbmltcG9ydCB7ICBkYiwgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXREb2MsIGRvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbkRhdGEgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QkNPc25UWHZfLXNsRDNWX0VHSnNRSk5veDlrZUNZaWhZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJzdHVkaWVkLWJpcGxhbmUtMjg4OTE0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc3R1ZGllZC1iaXBsYW5lLTI4ODkxNC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3R1ZGllZC1iaXBsYW5lLTI4ODkxNC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIwMDEyNTkzNzc2OVwiLFxyXG4gIGFwcElkOiBcIjE6MjAwMTI1OTM3NzY5OndlYjpiN2RkODA2NTNlYTY2ZmEzYWQ4YWY4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJQV1MxOUhXSk1cIixcclxufSk7XHJcblxyXG5jb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgaGFuZGxlT25DbGlja09uTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICBpc09ubGluZTogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcblxyXG4gIHJvdXRlci5wdXNoKFwiL0hvbWVcIik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREb2MoZG9jKGRiLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKSkudGhlbigoZG9jU25hcCkgPT4ge1xyXG4gICAgICBpZiAoZG9jU25hcC5leGlzdHMpIHtcclxuICAgICAgICBzZXRVc2VyKGRvY1NuYXAuZGF0YSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT48L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPnt1c2VyID8gPENoYXRSb29tIC8+IDogPFNpZ25JbiAvPn08L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnbi1pblwiIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PlxyXG4gICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RVc2VyKCkge1xyXG4gIGNvbnN0IFVzZXJSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGF0Um9vbSgpIHtcclxuICBjb25zdCBkdW1teSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG1lc3NhZ2VzUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKTtcclxuICBjb25zdCBxdWVyeSA9IG1lc3NhZ2VzUmVmLndoZXJlKFxyXG4gICAgXCJ1dWlkXCIsXHJcbiAgICBcIj09XCIsXHJcbiAgICBcIm5qS2ZqOUxDcnVhUnI5RFRydkJvOVlCdFU1YzJcIixcclxuICAgIFwifHxcIixcclxuICAgIFwidWlkXCIsXHJcbiAgICBcIj09XCIsXHJcbiAgICBcIjlwUHhkRE5LcThQcGJ6ZmZ3cDRNNTk4eVZBSzJcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFttZXNzYWdlc10gPSB1c2VDb2xsZWN0aW9uRGF0YShxdWVyeSwgeyBpZEZpZWxkOiBcImlkXCIgfSk7XHJcblxyXG4gIGNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdWlkLCBwaG90b1VSTCB9ID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGF3YWl0IG1lc3NhZ2VzUmVmLmFkZCh7XHJcbiAgICAgIHRleHQ6IGZvcm1WYWx1ZSxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgdWlkLFxyXG4gICAgICBwaG90b1VSTCxcclxuICAgICAgdXVpZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZvcm1WYWx1ZShcIlwiKTtcclxuICAgIGR1bW15LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge21lc3NhZ2VzICYmXHJcbiAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1zZykgPT4gPENoYXRNZXNzYWdlIGtleT17bXNnLmlkfSBtZXNzYWdlPXttc2d9IC8+KX1cclxuXHJcbiAgICAgICAgPHNwYW4gcmVmPXtkdW1teX0+PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybVZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSB5b3VyIG1lc3NhZ2UgaGVyZSBcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybVZhbHVlfT5cclxuICAgICAgICAgIPCfkqxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhdE1lc3NhZ2UoZSkge1xyXG4gIGNvbnN0IHsgdGV4dCwgdWlkLCBwaG90b1VSTCB9ID0gZS5tZXNzYWdlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtwaG90b1VSTH0gLz5cclxuICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvY2lyY2xlcy45NTk3MzE2MmRiZjdhNDhmMDc2ZDRjZTUwZDM3Yjg0OS5wbmdcIixcImhlaWdodFwiOjM5MyxcIndpZHRoXCI6OTY5LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmNvbXBvbmVudHMlMkZjaXJjbGVzLjk1OTczMTYyZGJmN2E0OGYwNzZkNGNlNTBkMzdiODQ5LnBuZyZ3PTgmcT03MFwifTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYW5hbHl0aWNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2NvbXBhdC9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvY29tcGF0L2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkltYWdlIiwicHJvZmlsZVBpYyIsInVzZVJvdXRlciIsImF1dGgiLCJkYiIsInNpZ25PdXQiLCJ1cGRhdGVEb2MiLCJkb2MiLCJBdXRoUHJvdmlkZXIiLCJIZWFkZXIiLCJyb3V0ZXIiLCJoYW5kbGVPbkNsaWNrT25SZWdpc3RlciIsInB1c2giLCJoYW5kbGVPbkNsaWNrT25Mb2dpbiIsImhhbmRsZU9uQ2xpY2tPblByb2ZpbGUiLCJoYW5kbGVPbkNsaWNrT25DaGF0IiwiaGFuZGxlT25DbGlja09uTG9nb3V0IiwiY3VycmVudFVzZXIiLCJ1aWQiLCJpc09ubGluZSIsIlJlYWN0IiwiTG9hZGluZyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJBdXRoQ29udGV4dCIsInVzZUF1dGgiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwid2FybiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsImZpcmViYXNlIiwiZ2V0RG9jIiwidXNlQ29sbGVjdGlvbkRhdGEiLCJmaXJlc3RvcmUiLCJDaGF0IiwiZG9jU25hcCIsImV4aXN0cyIsImRhdGEiLCJTaWduSW4iLCJzaWduSW5XaXRoR29vZ2xlIiwicHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJTZWxlY3RVc2VyIiwiVXNlclJlZiIsImNvbGxlY3Rpb24iLCJDaGF0Um9vbSIsImR1bW15IiwibWVzc2FnZXNSZWYiLCJxdWVyeSIsIndoZXJlIiwibWVzc2FnZXMiLCJpZEZpZWxkIiwiZm9ybVZhbHVlIiwic2V0Rm9ybVZhbHVlIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJwaG90b1VSTCIsInRleHQiLCJjcmVhdGVkQXQiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwidXVpZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtc2ciLCJDaGF0TWVzc2FnZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/styles/main.scss */ \"./src/assets/styles/main.scss\");\n/* harmony import */ var _src_assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_default_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/default/header */ \"./pages/components/default/header/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_default_emuns_dontShowHeaderAndFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/default/emuns/dontShowHeaderAndFooter */ \"./pages/components/default/emuns/dontShowHeaderAndFooter.ts\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _components_default_menuMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/default/menuMobile */ \"./pages/components/default/menuMobile/index.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var showHeaderAndFooter = function() {\n        return !(_components_default_emuns_dontShowHeaderAndFooter__WEBPACK_IMPORTED_MODULE_4__.dontShowHeaderAndFooter.indexOf(router.asPath) > -1);\n    };\n    var activeMenuMobile = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            showHeaderAndFooter() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_default_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 33\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                maxWidth: \"xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/_app.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"hamburguer-icon\",\n                className: \"cursor-pointer\"\n            }, void 0, false, {\n                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_default_menuMobile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDUztBQUVUO0FBQ3FEO0FBQ25EO0FBQ087QUFDUTs7QUFFeEQsU0FBU00sS0FBSyxDQUFDLEtBQWlDLEVBQUU7UUFBakNDLFNBQVMsR0FBWCxLQUFpQyxDQUEvQkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQWlDLENBQXBCQSxTQUFTOztJQUVuQyxJQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFFMUIsSUFBTVMsbUJBQW1CLEdBQUcsV0FBTTtRQUNoQyxPQUFPLENBQUMsQ0FBQ1IsOEdBQStCLENBQUNPLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFNLEVBRTlCO0lBRUQscUJBQ0U7O1lBQ0dILG1CQUFtQixFQUFFLGtCQUFJLDhEQUFDVixrRUFBTTs7OztvQkFBRTswQkFDakMsOERBQUNHLG9EQUFTO2dCQUFDVyxRQUFRLEVBQUMsSUFBSTswQkFDdEIsNEVBQUNQLFNBQVMsb0JBQUtDLFNBQVM7Ozs7d0JBQUk7Ozs7O29CQUNsQjswQkFDWiw4REFBQ0osZ0VBQVE7Z0JBQUNXLEVBQUUsRUFBQyxpQkFBaUI7Z0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O29CQUFFOzBCQUMzRCw4REFBQ1gsc0VBQVU7Ozs7b0JBQUU7O29CQUVkLENBQ0Y7Q0FDSjtHQXZCUUMsS0FBSzs7UUFFR0wsa0RBQVM7OztBQUZqQkssS0FBQUEsS0FBSztBQXlCZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBcIi4uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2Nzc1wiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZGVmYXVsdC9oZWFkZXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2RlZmF1bHQvZm9vdGVyXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBkb250U2hvd0hlYWRlckFuZEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGVmYXVsdC9lbXVucy9kb250U2hvd0hlYWRlckFuZEZvb3RlclwiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCBNZW51TW9iaWxlIGZyb20gXCIuL2NvbXBvbmVudHMvZGVmYXVsdC9tZW51TW9iaWxlXCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OkFwcFByb3BzKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBzaG93SGVhZGVyQW5kRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAhKGRvbnRTaG93SGVhZGVyQW5kRm9vdGVyLmluZGV4T2Yocm91dGVyLmFzUGF0aCkgPiAtMSlcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZU1lbnVNb2JpbGUgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93SGVhZGVyQW5kRm9vdGVyKCkgJiYgPEhlYWRlci8+fVxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8TWVudUljb24gaWQ9XCJoYW1idXJndWVyLWljb25cIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiLz5cbiAgICAgICAgPE1lbnVNb2JpbGUvPlxuICAgICAgey8qIHtzaG93SGVhZGVyQW5kRm9vdGVyKCkgJiYgPEZvb3Rlci8+fSAqL31cbiAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlUm91dGVyIiwiZG9udFNob3dIZWFkZXJBbmRGb290ZXIiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIk1lbnVNb2JpbGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInNob3dIZWFkZXJBbmRGb290ZXIiLCJpbmRleE9mIiwiYXNQYXRoIiwiYWN0aXZlTWVudU1vYmlsZSIsIm1heFdpZHRoIiwiaWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/components/default/menuMobile/index.tsx":
/*!*******************************************************!*\
  !*** ./pages/components/default/menuMobile/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuMobile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _throw(e) {\n    throw e;\n}\n\n\nfunction MenuMobile(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"MenuMobile\"\n    }, void 0, false, {\n        fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/components/default/menuMobile/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = MenuMobile;\nvar _c;\n$RefreshReg$(_c, \"MenuMobile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2RlZmF1bHQvbWVudU1vYmlsZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUF5QjtBQUlWLFNBQVNDLFVBQVUsQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFTLEdBQVQsS0FBUyxZQUFULEtBQVM7SUFDMUMscUJBQ0UsOERBQUNDLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTSxDQUN0QjtDQUNGO0FBSnVCRCxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZGVmYXVsdC9tZW51TW9iaWxlL2luZGV4LnRzeD8xMzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVNb2JpbGUoe306IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5NZW51TW9iaWxlPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51TW9iaWxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/default/menuMobile/index.tsx\n");

/***/ })

});
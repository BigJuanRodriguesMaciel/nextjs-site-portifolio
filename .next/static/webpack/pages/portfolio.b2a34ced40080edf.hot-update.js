"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio.tsx":
/*!*****************************!*\
  !*** ./pages/portfolio.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_default_gap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/default/gap */ \"./pages/components/default/gap/index.tsx\");\n/* harmony import */ var _components_default_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/default/page-title */ \"./pages/components/default/page-title/index.tsx\");\n/* harmony import */ var _components_default_projets_worked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/default/projets-worked */ \"./pages/components/default/projets-worked/index.tsx\");\n/* harmony import */ var _datasInArrayToMap_datasProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datasInArrayToMap/datasProjects */ \"./pages/datasInArrayToMap/datasProjects.ts\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Portfolio() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_datasInArrayToMap_datasProjects__WEBPACK_IMPORTED_MODULE_6__.datasProjects), projects = ref[0], setProjects = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"all\"), functionSelected = ref1[0], setFunctionSelected = ref1[1];\n    var buttons = [\n        {\n            title: \"All\",\n            value: \"all\"\n        },\n        {\n            title: \"As Techlead\",\n            value: \"techlead\"\n        },\n        {\n            title: \"As Developer\",\n            value: \"developer\"\n        },\n        {\n            title: \"Web Sites\",\n            value: \"websites\"\n        },\n        {\n            title: \"Systems\",\n            value: \"systems\"\n        }, \n    ];\n    var getProjects = function() {\n        setProjects([]);\n        setTimeout(function() {\n            var filter = functionSelected == \"all\" ? _datasInArrayToMap_datasProjects__WEBPACK_IMPORTED_MODULE_6__.datasProjects : _datasInArrayToMap_datasProjects__WEBPACK_IMPORTED_MODULE_6__.datasProjects.filter(function(item) {\n                return item.function == functionSelected;\n            });\n            setProjects(filter);\n        }, 100);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getProjects();\n    }, [\n        functionSelected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Portf\\xf3lio\"\n                }, void 0, false, {\n                    fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                id: \"page-portifolio\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_default_gap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_default_page_title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                title: \"My Works\"\n                            }, void 0, false, {\n                                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"filter\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                    container: true,\n                                    children: buttons.map(function(item, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                            item: true,\n                                            md: 12,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                                                    fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                    variant: \"outlined\",\n                                                    onClick: function() {\n                                                        setFunctionSelected(item.value);\n                                                    },\n                                                    sx: {\n                                                        m: 1\n                                                    },\n                                                    className: \"outlined \".concat(functionSelected == item.value && \"active-button-with-background\"),\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 23\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_default_projets_worked__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                projects: projects\n                            }, void 0, false, {\n                                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juanrodriguesmaciel/Desktop/projetos/pessoal/portifolio/nextjs-site-portifolio/pages/portfolio.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_s(Portfolio, \"+Z+LgoWkBHpkbtZ76RM96xhQ3CY=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFHOztvQ0FDcEM7Ozs7O3dCQUNDOzs7OztvQkFDRDs7Ozs7O1lBQ0MsQ0FDWDtDQUNGO0dBcER1QkQsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby50c3g/ZGFlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENhcmQsIENoaXAsIERpdmlkZXIsIEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHYXAgZnJvbSAnLi9jb21wb25lbnRzL2RlZmF1bHQvZ2FwJ1xuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdlLXRpdGxlJ1xuaW1wb3J0IFByb2plY3RzV29ya2VkIGZyb20gJy4vY29tcG9uZW50cy9kZWZhdWx0L3Byb2pldHMtd29ya2VkJ1xuaW1wb3J0IHsgZGF0YXNQcm9qZWN0cyB9IGZyb20gJy4vZGF0YXNJbkFycmF5VG9NYXAvZGF0YXNQcm9qZWN0cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKGRhdGFzUHJvamVjdHMpXG4gIGNvbnN0IFtmdW5jdGlvblNlbGVjdGVkLCBzZXRGdW5jdGlvblNlbGVjdGVkXSA9IHVzZVN0YXRlKFwiYWxsXCIpXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAge3RpdGxlOiBcIkFsbFwiLHZhbHVlOiBcImFsbFwifSxcbiAgICB7dGl0bGU6IFwiQXMgVGVjaGxlYWRcIix2YWx1ZTogXCJ0ZWNobGVhZFwifSxcbiAgICB7dGl0bGU6IFwiQXMgRGV2ZWxvcGVyXCIsdmFsdWU6IFwiZGV2ZWxvcGVyXCJ9LFxuICAgIHt0aXRsZTogXCJXZWIgU2l0ZXNcIix2YWx1ZTogXCJ3ZWJzaXRlc1wifSxcbiAgICB7dGl0bGU6IFwiU3lzdGVtc1wiLHZhbHVlOiBcInN5c3RlbXNcIn0sXG4gIF1cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgc2V0UHJvamVjdHMoW10pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmdW5jdGlvblNlbGVjdGVkID09ICdhbGwnID8gZGF0YXNQcm9qZWN0cyA6IGRhdGFzUHJvamVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5mdW5jdGlvbiA9PSBmdW5jdGlvblNlbGVjdGVkKVxuICAgIHNldFByb2plY3RzKGZpbHRlcilcbiAgICB9LCAxMDApO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvamVjdHMoKVxuICB9LCBbZnVuY3Rpb25TZWxlY3RlZF0pXG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0ZsOzbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGlkPVwicGFnZS1wb3J0aWZvbGlvXCI+XG4gICAgICAgIDxHYXA+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9XCJNeSBXb3Jrc1wiLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQga2V5PXtpbmRleH0gaXRlbSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZ1bmN0aW9uU2VsZWN0ZWQoaXRlbS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHN4PXt7IG06IDEgfX0gY2xhc3NOYW1lPXtgb3V0bGluZWQgJHtmdW5jdGlvblNlbGVjdGVkID09IGl0ZW0udmFsdWUgJiYgJ2FjdGl2ZS1idXR0b24td2l0aC1iYWNrZ3JvdW5kJ31gfT57aXRlbS50aXRsZX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQcm9qZWN0c1dvcmtlZCBwcm9qZWN0cz17cHJvamVjdHN9Lz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9HYXA+XG4gICAgICA8L21haW4+XG4gICAgPC9zZWN0aW9uPlxuICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkRpdmlkZXIiLCJHcmlkIiwiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHYXAiLCJQYWdlVGl0bGUiLCJQcm9qZWN0c1dvcmtlZCIsImRhdGFzUHJvamVjdHMiLCJQb3J0Zm9saW8iLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiZnVuY3Rpb25TZWxlY3RlZCIsInNldEZ1bmN0aW9uU2VsZWN0ZWQiLCJidXR0b25zIiwidGl0bGUiLCJ2YWx1ZSIsImdldFByb2plY3RzIiwic2V0VGltZW91dCIsImZpbHRlciIsIml0ZW0iLCJmdW5jdGlvbiIsInNlY3Rpb24iLCJtYWluIiwiaWQiLCJkaXYiLCJjb250YWluZXIiLCJtYXAiLCJpbmRleCIsIm1kIiwidmFyaWFudCIsIm9uQ2xpY2siLCJzeCIsIm0iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.tsx\n");

/***/ })

});
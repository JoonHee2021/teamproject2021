"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/wiki";
exports.ids = ["pages/wiki"];
exports.modules = {

/***/ "./pages/wiki/index.tsx":
/*!******************************!*\
  !*** ./pages/wiki/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//const searchBar = document.getElementById(\"searchBar\");\nconst getTimeString = (unixtime)=>{\n    const day = 24 * 60 * 60 * 1000;\n    const dateTime = new Date(unixtime);\n    return unixtime - new Date().getTime() >= day ? dateTime.toLocaleDateString() : dateTime.toLocaleTimeString();\n};\nconst Wiki = ()=>{\n    const wiki = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.wiki\n    );\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        style: {\n            width: \"70vw\"\n        },\n        className: \"mx-auto\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n            lineNumber: 22\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"wiki\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                lineNumber: 23\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                        lineNumber: 24\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        className: `text-center`,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                            lineNumber: 25\n                        },\n                        __self: undefined,\n                        children: \"📔Wiki\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"features\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                        lineNumber: 27\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"search_wiki\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                lineNumber: 28\n                            },\n                            __self: undefined,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"🔍Search...\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                    lineNumber: 29\n                                },\n                                __self: undefined\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"d-grid gap-2 d-md-flex justify-content-md-end\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                lineNumber: 31\n                            },\n                            __self: undefined,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"btn btn-success\",\n                                onClick: ()=>{\n                                    router.push(\"/wiki/WikiCreate\");\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                    lineNumber: 32\n                                },\n                                __self: undefined,\n                                children: \"+ 글 작성\"\n                            })\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"table\", {\n                    className: \"table table-hover my-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                        lineNumber: 42\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"thead\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                lineNumber: 43\n                            },\n                            __self: undefined,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"tr\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                    lineNumber: 44\n                                },\n                                __self: undefined,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                            lineNumber: 45\n                                        },\n                                        __self: undefined,\n                                        children: \"#\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                            lineNumber: 46\n                                        },\n                                        __self: undefined,\n                                        children: \"제목\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                            lineNumber: 47\n                                        },\n                                        __self: undefined,\n                                        children: \"이름\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                            lineNumber: 48\n                                        },\n                                        __self: undefined,\n                                        children: \"작성일시\"\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"tbody\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                lineNumber: 51\n                            },\n                            __self: undefined,\n                            children: wiki.data.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"tr\", {\n                                    className: \"wikiList\",\n                                    onClick: ()=>{\n                                        router.push(`/wiki/detail/${item.id}`);\n                                    },\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                        lineNumber: 53\n                                    },\n                                    __self: undefined,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                                lineNumber: 61\n                                            },\n                                            __self: undefined,\n                                            children: item.id\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                                lineNumber: 62\n                                            },\n                                            __self: undefined,\n                                            children: item.title\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                                lineNumber: 63\n                                            },\n                                            __self: undefined,\n                                            children: item.name\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\teamproject\\\\DouJo(client)\\\\pages\\\\wiki\\\\index.tsx\",\n                                                lineNumber: 64\n                                            },\n                                            __self: undefined,\n                                            children: getTimeString(item.createdTime)\n                                        })\n                                    ]\n                                }, item.id)\n                            )\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wiki);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93aWtpL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNGO0FBR3ZDLEVBQXlEO0FBRXpELEtBQUssQ0FBQ0UsYUFBYSxJQUFJQyxRQUFnQixHQUFLLENBQUM7SUFDM0MsS0FBSyxDQUFDQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUUvQixLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNDLElBQUksQ0FBQ0gsUUFBUTtJQUVsQyxNQUFNLENBQUNBLFFBQVEsR0FBRyxHQUFHLENBQUNHLElBQUksR0FBR0MsT0FBTyxNQUFNSCxHQUFHLEdBQ3pDQyxRQUFRLENBQUNHLGtCQUFrQixLQUMzQkgsUUFBUSxDQUFDSSxrQkFBa0I7QUFDakMsQ0FBQztBQUVELEtBQUssQ0FBQ0MsSUFBSSxPQUFTLENBQUM7SUFDbEIsS0FBSyxDQUFDQyxJQUFJLEdBQUdYLHdEQUFXLEVBQUVZLEtBQWdCLEdBQUtBLEtBQUssQ0FBQ0QsSUFBSTs7SUFDekQsS0FBSyxDQUFDRSxNQUFNLEdBQUdaLHNEQUFTO0lBRXhCLE1BQU0sc0VBQ0hhLENBQU87UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0MsS0FBSyxFQUFFLENBQU07UUFBQyxDQUFDO1FBQUVDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7d0ZBQ25EQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFNOzs7Ozs7O3FGQUNsQkMsQ0FBRzs7Ozs7O21HQUNEQyxDQUFFO3dCQUFDRixTQUFTLEdBQUcsV0FBVzs7Ozs7O2tDQUFHLENBQUs7OztzRkFFakNDLENBQUE7b0JBQUNELFNBQVMsRUFBQyxDQUFVOzs7Ozs7OzZGQUN0QkMsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQWE7Ozs7OzsyR0FDekJHLENBQUs7Z0NBQUNDLElBQUksRUFBQyxDQUFNO2dDQUFDQyxXQUFXLEVBQUMsQ0FBWTs7Ozs7Ozs7NkZBRXpDSixDQUFBOzRCQUFDRCxTQUFTLEVBQUMsQ0FBK0M7Ozs7OzsyR0FDM0RNLENBQU07Z0NBQ0xOLFNBQVMsRUFBQyxDQUFpQjtnQ0FDM0JPLE9BQU8sTUFBUSxDQUFDO29DQUNkWCxNQUFNLENBQUNZLElBQUksQ0FBQyxDQUFrQjtnQ0FDaEMsQ0FBQzs7Ozs7OzBDQUNGLENBRUQ7Ozs7O3NGQUdIQyxDQUFLO29CQUFDVCxTQUFTLEVBQUMsQ0FBd0I7Ozs7Ozs7NkZBQ3RDVSxDQUFLOzs7Ozs7NEdBQ0hDLENBQUU7Ozs7Ozs7eUdBQ0FDLENBQUU7Ozs7OztrREFBQyxDQUFDOzt5R0FDSkEsQ0FBRTs7Ozs7O2tEQUFDLENBQUU7O3lHQUNEQSxDQUFGOzs7Ozs7a0RBQUMsQ0FBRTs7eUdBQ0RBLENBQUY7Ozs7OztrREFBQyxDQUFJOzs7Ozs2RkFHWEMsQ0FBSzs7Ozs7O3NDQUNIbkIsSUFBSSxDQUFDb0IsSUFBSSxDQUFDQyxHQUFHLEVBQUVDLElBQUkseUVBQ2pCTCxDQUFFO29DQUNEWCxTQUFTLEVBQUMsQ0FBVTtvQ0FFcEJPLE9BQU8sTUFBUSxDQUFDO3dDQUNkWCxNQUFNLENBQUNZLElBQUksRUFBRSxhQUFhLEVBQUVRLElBQUksQ0FBQ0MsRUFBRTtvQ0FDckMsQ0FBQztvQ0FDRG5CLEtBQUssRUFBRSxDQUFDO3dDQUFDb0IsTUFBTSxFQUFFLENBQVM7b0NBQUMsQ0FBQzs7Ozs7Ozs2R0FFM0JDLENBQUU7Ozs7OztzREFBRUgsSUFBSSxDQUFDQyxFQUFFOzs2R0FDWEUsQ0FBRTs7Ozs7O3NEQUFFSCxJQUFJLENBQUNJLEtBQUs7OzZHQUNkRCxDQUFFOzs7Ozs7c0RBQUVILElBQUksQ0FBQ0ssSUFBSTs7NkdBQ2JGLENBQUU7Ozs7OztzREFBRWxDLGFBQWEsQ0FBQytCLElBQUksQ0FBQ00sV0FBVzs7O21DQVQ5Qk4sSUFBSSxDQUFDQyxFQUFFOzs7Ozs7OztBQWlCNUIsQ0FBQztBQUVELGlFQUFleEIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVhbXByb2plY3QvLi9wYWdlcy93aWtpL2luZGV4LnRzeD83YTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlci9pbmRleFwiO1xuXG4vL2NvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpO1xuXG5jb25zdCBnZXRUaW1lU3RyaW5nID0gKHVuaXh0aW1lOiBudW1iZXIpID0+IHtcbiAgY29uc3QgZGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHVuaXh0aW1lKTtcblxuICByZXR1cm4gdW5peHRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+PSBkYXlcbiAgICA/IGRhdGVUaW1lLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgOiBkYXRlVGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbn07XG5cbmNvbnN0IFdpa2kgPSAoKSA9PiB7XG4gIGNvbnN0IHdpa2kgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUud2lraSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6IFwiNzB2d1wiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lraVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlcmB9PvCfk5RXaWtpPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF93aWtpXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIvCflI1TZWFyY2guLi5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkIGdhcC0yIGQtbWQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbWQtZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi93aWtpL1dpa2lDcmVhdGVcIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsg6riAIOyekeyEsVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgbXktNVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICA8dGg+7KCc66qpPC90aD5cbiAgICAgICAgICAgICAgPHRoPuydtOumhDwvdGg+XG4gICAgICAgICAgICAgIDx0aD7snpHshLHsnbzsi5w8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt3aWtpLmRhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpa2lMaXN0XCJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC93aWtpL2RldGFpbC8ke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uaWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57Z2V0VGltZVN0cmluZyhpdGVtLmNyZWF0ZWRUaW1lKX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpa2k7XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJnZXRUaW1lU3RyaW5nIiwidW5peHRpbWUiLCJkYXkiLCJkYXRlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiV2lraSIsIndpa2kiLCJzdGF0ZSIsInJvdXRlciIsInNlY3Rpb24iLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJjdXJzb3IiLCJ0ZCIsInRpdGxlIiwibmFtZSIsImNyZWF0ZWRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/wiki/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/wiki/index.tsx"));
module.exports = __webpack_exports__;

})();
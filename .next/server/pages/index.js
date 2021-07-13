/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var shiki__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shiki */ \"shiki\");\n/* harmony import */ var shiki__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shiki__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/adriaanmarain/projects/ignition-shiki-test/pages/index.js\";\n\n\nfunction Home(props) {\n  const {\n    0: code,\n    1: setCode\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => `/* import React, { useEffect } from 'react';\n    function a(asdf) {\n      let b = 1;\n      console.log(a + b);\n      console.log(asdf);\n    }\n    a();\n    \n    const classes = [];\n    const checkCondition = () => {};\n    \n    function $initHighlight(block, cls) {\n      try {\n        if (cls.search(/\\\\bno\\\\-highlight\\\\b/) != -1) */\n          return process(block, true, 0x0f) + \\` class=\"\\${cls}\"\\`;\n      } catch (e) {\n        /* handle exception */\n      }\n      for (var i = 0 / 2; i < classes.length; i++) {\n        if (checkCondition(classes[i]) === undefined) console.log('undefined');\n      }\n    \n      return (\n        <div className=\"page-title\">\n          <Label />\n          <web-component>{block}</web-component>\n        </div>\n      );\n    }\n    \n    class Expire extends React.Component {\n      constructor(props) {\n        super(props);\n        this.state = { component: props.children };\n      }\n      componentDidMount() {\n        setTimeout(() => {\n          this.setState({\n            component: null,\n          });\n        }, this.props.time || this.props.seconds * 1000);\n      }\n      render() {\n        return this.state.component;\n      }\n    }\n    \n    export { Expire, $initHighlight };`);\n\n  async function highlight() {\n    const highlighter = await shiki__WEBPACK_IMPORTED_MODULE_2___default().getHighlighter({\n      theme: 'dark-plus'\n    });\n    setCode(highlighter.codeToHtml(code, 'js'));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: highlight,\n      children: \"format\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n      dangerouslySetInnerHTML: {\n        __html: code\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 9\n  }, this);\n}\nasync function getServerSideProps() {\n  const shiki = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! shiki */ \"shiki\", 23));\n  const highlighter = await shiki.getHighlighter({\n    theme: 'dark-plus'\n  });\n  return {\n    props: {\n      code: highlighter.codeToHtml(`/* import React, { useEffect } from 'react';\nfunction a(asdf) {\n  let b = 1;\n  console.log(a + b);\n  console.log(asdf);\n}\na();\n\nconst classes = [];\nconst checkCondition = () => {};\n\nfunction $initHighlight(block, cls) {\n  try {\n    if (cls.search(/\\\\bno\\\\-highlight\\\\b/) != -1) */\n      return process(block, true, 0x0f) + \\` class=\"\\${cls}\"\\`;\n  } catch (e) {\n    /* handle exception */\n  }\n  for (var i = 0 / 2; i < classes.length; i++) {\n    if (checkCondition(classes[i]) === undefined) console.log('undefined');\n  }\n\n  return (\n    <div className=\"page-title\">\n      <Label />\n      <web-component>{block}</web-component>\n    </div>\n  );\n}\n\nclass Expire extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { component: props.children };\n  }\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({\n        component: null,\n      });\n    }, this.props.time || this.props.seconds * 1000);\n  }\n  render() {\n    return this.state.component;\n  }\n}\n\nexport { Expire, $initHighlight };`, 'js')\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pdGlvbi1zaGlraS10ZXN0Ly4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJjb2RlIiwic2V0Q29kZSIsInVzZVN0YXRlIiwiaGlnaGxpZ2h0IiwiaGlnaGxpZ2h0ZXIiLCJzaGlraSIsInRoZW1lIiwiY29kZVRvSHRtbCIsIl9faHRtbCIsImdldFNlcnZlclNpZGVQcm9wcyIsImdldEhpZ2hsaWdodGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNoQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQzVCLE1BQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQWhEb0MsQ0FBaEM7O0FBbURBLGlCQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCLFVBQU1DLFdBQVcsR0FBRyxNQUFNQywyREFBQSxDQUFxQjtBQUMzQ0MsV0FBSyxFQUFFO0FBRG9DLEtBQXJCLENBQTFCO0FBSUFMLFdBQU8sQ0FBQ0csV0FBVyxDQUFDRyxVQUFaLENBQXVCUCxJQUF2QixFQUE2QixJQUE3QixDQUFELENBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJO0FBQVEsYUFBTyxFQUFFRyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyw2QkFBdUIsRUFBRTtBQUFFSyxjQUFNLEVBQUVSO0FBQVY7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7QUFFTSxlQUFlUyxrQkFBZixHQUFvQztBQUN2QyxRQUFNSixLQUFLLEdBQUcsTUFBTSxnSEFBcEI7QUFDQSxRQUFNRCxXQUFXLEdBQUcsTUFBTUMsS0FBSyxDQUFDSyxjQUFOLENBQXFCO0FBQzNDSixTQUFLLEVBQUU7QUFEb0MsR0FBckIsQ0FBMUI7QUFHQSxTQUFPO0FBQ0hQLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVJLFdBQVcsQ0FBQ0csVUFBWixDQUNEO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBaERrQixFQWlERixJQWpERTtBQURIO0FBREosR0FBUDtBQXVESCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNoaWtpIGZyb20gJ3NoaWtpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFxuICAgICAgICAoKSA9PiBgLyogaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbiAgICBmdW5jdGlvbiBhKGFzZGYpIHtcbiAgICAgIGxldCBiID0gMTtcbiAgICAgIGNvbnNvbGUubG9nKGEgKyBiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFzZGYpO1xuICAgIH1cbiAgICBhKCk7XG4gICAgXG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGNvbnN0IGNoZWNrQ29uZGl0aW9uID0gKCkgPT4ge307XG4gICAgXG4gICAgZnVuY3Rpb24gJGluaXRIaWdobGlnaHQoYmxvY2ssIGNscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGNscy5zZWFyY2goL1xcXFxibm9cXFxcLWhpZ2hsaWdodFxcXFxiLykgIT0gLTEpICovXG4gICAgICAgICAgcmV0dXJuIHByb2Nlc3MoYmxvY2ssIHRydWUsIDB4MGYpICsgXFxgIGNsYXNzPVwiXFwke2Nsc31cIlxcYDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogaGFuZGxlIGV4Y2VwdGlvbiAqL1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDAgLyAyOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hlY2tDb25kaXRpb24oY2xhc3Nlc1tpXSkgPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coJ3VuZGVmaW5lZCcpO1xuICAgICAgfVxuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XG4gICAgICAgICAgPExhYmVsIC8+XG4gICAgICAgICAgPHdlYi1jb21wb25lbnQ+e2Jsb2NrfTwvd2ViLWNvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICBjbGFzcyBFeHBpcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBjb21wb25lbnQ6IHByb3BzLmNoaWxkcmVuIH07XG4gICAgICB9XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMucHJvcHMudGltZSB8fCB0aGlzLnByb3BzLnNlY29uZHMgKiAxMDAwKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29tcG9uZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgeyBFeHBpcmUsICRpbml0SGlnaGxpZ2h0IH07YFxuICAgICk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoaWdobGlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodGVyID0gYXdhaXQgc2hpa2kuZ2V0SGlnaGxpZ2h0ZXIoe1xuICAgICAgICAgICAgdGhlbWU6ICdkYXJrLXBsdXMnLFxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRDb2RlKGhpZ2hsaWdodGVyLmNvZGVUb0h0bWwoY29kZSwgJ2pzJykpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpZ2hsaWdodH0+Zm9ybWF0PC9idXR0b24+XG4gICAgICAgICAgICA8cHJlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29kZSB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHNoaWtpID0gYXdhaXQgaW1wb3J0KCdzaGlraScpO1xuICAgIGNvbnN0IGhpZ2hsaWdodGVyID0gYXdhaXQgc2hpa2kuZ2V0SGlnaGxpZ2h0ZXIoe1xuICAgICAgICB0aGVtZTogJ2RhcmstcGx1cycsXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvZGU6IGhpZ2hsaWdodGVyLmNvZGVUb0h0bWwoXG4gICAgICAgICAgICAgICAgYC8qIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBhKGFzZGYpIHtcbiAgbGV0IGIgPSAxO1xuICBjb25zb2xlLmxvZyhhICsgYik7XG4gIGNvbnNvbGUubG9nKGFzZGYpO1xufVxuYSgpO1xuXG5jb25zdCBjbGFzc2VzID0gW107XG5jb25zdCBjaGVja0NvbmRpdGlvbiA9ICgpID0+IHt9O1xuXG5mdW5jdGlvbiAkaW5pdEhpZ2hsaWdodChibG9jaywgY2xzKSB7XG4gIHRyeSB7XG4gICAgaWYgKGNscy5zZWFyY2goL1xcXFxibm9cXFxcLWhpZ2hsaWdodFxcXFxiLykgIT0gLTEpICovXG4gICAgICByZXR1cm4gcHJvY2VzcyhibG9jaywgdHJ1ZSwgMHgwZikgKyBcXGAgY2xhc3M9XCJcXCR7Y2xzfVwiXFxgO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLyogaGFuZGxlIGV4Y2VwdGlvbiAqL1xuICB9XG4gIGZvciAodmFyIGkgPSAwIC8gMjsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2hlY2tDb25kaXRpb24oY2xhc3Nlc1tpXSkgPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coJ3VuZGVmaW5lZCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cbiAgICAgIDxMYWJlbCAvPlxuICAgICAgPHdlYi1jb21wb25lbnQ+e2Jsb2NrfTwvd2ViLWNvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY2xhc3MgRXhwaXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgY29tcG9uZW50OiBwcm9wcy5jaGlsZHJlbiB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICAgIH0pO1xuICAgIH0sIHRoaXMucHJvcHMudGltZSB8fCB0aGlzLnByb3BzLnNlY29uZHMgKiAxMDAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY29tcG9uZW50O1xuICB9XG59XG5cbmV4cG9ydCB7IEV4cGlyZSwgJGluaXRIaWdobGlnaHQgfTtgLFxuICAgICAgICAgICAgICAgICdqcydcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "shiki":
/*!************************!*\
  !*** external "shiki" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("shiki");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
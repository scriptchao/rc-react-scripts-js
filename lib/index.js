"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by tony on 2019-12-16
 */
var Main = function Main(props) {
  function onClick() {
    props.onChange && props.onChange();
  }

  return _react.default.createElement("div", {
    className: "main",
    onClick: onClick
  }, "Main");
};

var _default = Main;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsIm9uQ2xpY2siLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOzs7O0FBSkE7OztBQU1BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUV0QixXQUFTQyxPQUFULEdBQW1CO0FBQ2pCRCxJQUFBQSxLQUFLLENBQUNFLFFBQU4sSUFBa0JGLEtBQUssQ0FBQ0UsUUFBTixFQUFsQjtBQUNEOztBQUVELFNBQU87QUFBSyxJQUFBLFNBQVMsRUFBQyxNQUFmO0FBQXNCLElBQUEsT0FBTyxFQUFFRDtBQUEvQixZQUFQO0FBQ0QsQ0FQRDs7ZUFTZUYsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB0b255IG9uIDIwMTktMTItMTZcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnXG5cbmNvbnN0IE1haW4gPSAocHJvcHMpID0+IHtcblxuICBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgIHByb3BzLm9uQ2hhbmdlICYmIHByb3BzLm9uQ2hhbmdlKClcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBvbkNsaWNrPXtvbkNsaWNrfT5NYWluPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5cbiJdfQ==
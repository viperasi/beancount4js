"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beancount4js = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 主入口
 *
 * @export
 * @class Beancount4js
 */
var Beancount4js = /*#__PURE__*/function () {
  function Beancount4js() {
    _classCallCheck(this, Beancount4js);
  }

  /**
   * 测试方法1
   *
   * @param {string} file 文件路径
   * @return {string} 文件内容
   * @memberOf Beancount4js
   */
  _createClass(Beancount4js, [{
    key: "testOne",
    value: function testOne(file) {
      console.log(file);
    }

    /**
     * 解析内容
     *
     * @param {string} content 文本内容
     * @return {*} 解析后的对象
     * @memberOf Beancount4js
     */
  }, {
    key: "testTwo",
    value: function testTwo(content) {
      console.log(content);
    }
  }]);
  return Beancount4js;
}();
exports.Beancount4js = Beancount4js;
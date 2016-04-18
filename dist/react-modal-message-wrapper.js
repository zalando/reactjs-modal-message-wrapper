!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-bootstrap")):"function"==typeof define&&define.amd?define(["react","react-bootstrap"],n):"object"==typeof exports?exports["react-modal-message-wrapper.js"]=n(require("react"),require("react-bootstrap")):e["react-modal-message-wrapper.js"]=n(e.react,e["react-bootstrap"])}(this,function(__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_3__){return function(e){function n(r){if(t[r])return t[r].exports;var s=t[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * A modal displaying messages.\n */\n\nvar ModalMessage = function (_Component) {\n    _inherits(ModalMessage, _Component);\n\n    function ModalMessage(props) {\n        _classCallCheck(this, ModalMessage);\n\n        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalMessage).call(this, props));\n\n        _this.state = {\n            show: true\n        };\n        _this.close = _this.close.bind(_this);\n        return _this;\n    }\n\n    /**\n     * Handles key events.\n     *\n     * If return is pressed, the modal will close, performing the primary function. If escape is\n     * pressed, the secondary function is performed if provided, else the primary function.\n     *\n     * @param event The keyup event\n     */\n\n\n    _createClass(ModalMessage, [{\n        key: 'close',\n        value: function close(event) {\n            var KEYCODE_ENTER = 13;\n            var KEYCODE_ESC = 27;\n\n            switch (event.which) {\n                case KEYCODE_ENTER:\n                    this.props.primaryButtonClicked();\n                    break;\n                case KEYCODE_ESC:\n                    this.props.secondaryButtonClicked ? this.props.secondaryButtonClicked() : this.props.primaryButtonClicked();\n                    break;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var cancelButton = this.props.secondaryButtonClicked ? _react2.default.createElement(\n                'button',\n                { className: 'btn btn-default',\n                    onClick: this.props.secondaryButtonClicked },\n                'Cancel'\n            ) : null;\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Modal,\n                    { onKeyUp: this.close, show: this.state.show },\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Modal.Title,\n                            null,\n                            this.props.message.title\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Body,\n                        null,\n                        this.props.message.message\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Footer,\n                        null,\n                        _react2.default.createElement(\n                            'button',\n                            { className: 'btn btn-primary',\n                                onClick: this.props.primaryButtonClicked },\n                            this.props.primaryButton\n                        ),\n                        cancelButton\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ModalMessage;\n}(_react.Component);\n\nModalMessage.displayName = 'ModalMessage';\nModalMessage.propTypes = {\n    message: _react2.default.PropTypes.object.isRequired,\n    primaryButton: _react2.default.PropTypes.string.isRequired,\n    primaryButtonClicked: _react2.default.PropTypes.func.isRequired,\n    secondaryButtonClicked: _react2.default.PropTypes.func\n};\n\nexports.default = ModalMessage;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/jsx/modal.jsx\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/jsx/modal.jsx?")},function(module,exports){eval('module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external "react"\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react%22?')},function(module,exports){eval('module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external "react-bootstrap"\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react-bootstrap%22?')}])});
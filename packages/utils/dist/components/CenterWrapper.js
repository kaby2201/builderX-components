var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _jsxFileName="/Users/himanshusatija/projects/builderX-components/packages/utils/components/CenterWrapper.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var CenterWrapper=function(_React$Component){(0,_inherits2.default)(CenterWrapper,_React$Component);var _super=_createSuper(CenterWrapper);function CenterWrapper(){(0,_classCallCheck2.default)(this,CenterWrapper);return _super.apply(this,arguments);}(0,_createClass2.default)(CenterWrapper,[{key:"render",value:function render(){var horizontal,vertical;horizontal=this.props.vertical&&!this.props.horizontal?false:true;vertical=this.props.horizontal&&!this.props.vertical?false:true;return _react.default.createElement(_reactNative.View,{style:{top:0,left:0,right:0,bottom:0,position:"absolute",alignItems:horizontal?"center":undefined,justifyContent:vertical?"center":undefined},pointerEvents:"box-none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12,columnNumber:7}},this.props.children);}}]);return CenterWrapper;}(_react.default.Component);exports.default=CenterWrapper;
//# sourceMappingURL=CenterWrapper.js.map
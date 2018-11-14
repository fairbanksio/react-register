'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.photoPropType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgWithClick = { cursor: 'pointer' };

var Photo = function Photo(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left;

  var imgStyle = { margin: margin };
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  var handleClick = function handleClick(event) {
    onClick(event, { photo: photo, index: index });
  };

  return _react2.default.createElement('img', _extends({
    style: onClick ? _extends({}, imgStyle, imgWithClick) : imgStyle
  }, photo, {
    onClick: onClick ? handleClick : null
  }));
};

var photoPropType = exports.photoPropType = _propTypes2.default.shape({
  src: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  alt: _propTypes2.default.string,
  title: _propTypes2.default.string,
  srcSet: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  sizes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
});

Photo.propTypes = {
  index: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func,
  photo: photoPropType.isRequired,
  margin: _propTypes2.default.number,
  top: function top(props) {
    if (props.direction === 'column' && typeof props.top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
  },
  left: function left(props) {
    if (props.direction === 'column' && typeof props.left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
  },
  direction: _propTypes2.default.string
};

exports.default = Photo;
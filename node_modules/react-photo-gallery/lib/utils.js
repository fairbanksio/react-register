'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.round = round;
exports.ratio = ratio;
exports.computeSizes = computeSizes;
exports.computeSizesColumns = computeSizesColumns;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function round(value, decimals) {
  if (!decimals) decimals = 0;
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// return two decimal places rounded number
function ratio(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return round(width / height, 2);
}

// takes the Gallery's photos array, width of the container,
// margin between photos Gallery prop, and columns Gallery prop.
// calculates, sizes based on columns and returns the photos array
// with new height/width props in each object
function computeSizes(_ref2) {
  var photos = _ref2.photos,
      columns = _ref2.columns,
      width = _ref2.width,
      margin = _ref2.margin;

  if (!width) {
    return [];
  }
  // divide photos over rows, max cells based on `columns`
  // effectively resulting in [[0, 1, 2], [3, 4, 5], [6, 7]]
  var rows = photos.reduce(function (acc, cell, idx) {
    var row = Math.floor(idx / columns);
    acc[row] = acc[row] ? [].concat(_toConsumableArray(acc[row]), [cell]) : [cell]; // eslint-disable-line no-param-reassign
    return acc;
  }, []);
  // calculate total ratio of each row, and adjust each cell height and width
  // accordingly.
  var ratios = [];
  var rowsWithSizes = rows.map(function (row, rowIndex) {
    var totalRatio = row.reduce(function (result, photo) {
      return result + ratio(photo);
    }, 0);
    var rowWidth = width - row.length * (margin * 2);

    // save total ratio of each row
    if (rowIndex !== rows.length - 1) ratios.push(totalRatio);

    // assign height
    // 3 scenarios...
    //  if its a regular row where row.length === columns
    //    rowWidth / totalRatio
    //  if columns > row.length
    //    if !lastRow
    //      use the average aspect ratio of previous rows
    //    else (all photos are on a single row)
    //      ...
    var height = row.length === columns ? rowWidth / totalRatio : photos.length < columns ? rowWidth / totalRatio * (row.length / columns) : rowWidth / (ratios.reduce(function (acc, item) {
      return acc + item;
    }, 0) / (rows.length - 1));

    return row.map(function (photo) {
      return _extends({}, photo, {
        height: round(height, 1),
        width: round(height * ratio(photo), 1)
      });
    });
  });
  return rowsWithSizes.reduce(function (acc, row) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(row));
  }, []);
}
function computeSizesColumns(_ref3) {
  var photos = _ref3.photos,
      columns = _ref3.columns,
      width = _ref3.width,
      margin = _ref3.margin;

  // calculate each colWidth based on total width and column amount
  var colWidth = (width - margin * 2 * columns) / columns;

  // map through each photo to assign adjusted height and width based on colWidth
  var photosWithSizes = photos.map(function (photo) {
    var newHeight = photo.height / photo.width * colWidth;
    return _extends({}, photo, {
      width: round(colWidth, 1),
      height: round(newHeight, 1)
    });
  });

  // store all possible left positions
  // and current top positions for each column
  var colLeftPositions = [];
  var colCurrTopPositions = [];
  for (var i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
    colCurrTopPositions[i] = 0;
  }

  // map through each photo, then reduce thru each "column"
  // find column with the smallest height and assign to photo's 'top'
  // update that column's height with this photo's height
  var photosPositioned = photosWithSizes.map(function (photo) {
    var smallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item < colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);

    photo.top = colCurrTopPositions[smallestCol];
    photo.left = colLeftPositions[smallestCol];
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2;

    // store the tallest col to use for gallery height because of abs positioned elements
    var tallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item > colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.containerHeight = colCurrTopPositions[tallestCol];
    return photo;
  });
  return photosPositioned;
}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
        key: 'getDate',
        value: function getDate(date) {
            if (!((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === 'object')) return 'Invalid Date';
            if (isNaN(date.getDate())) return 'Invalid Date';

            var newDate = date.getDate();
            var newMonth = date.getMonth();
            var newYear = date.getFullYear();

            if (newDate < 10) {
                newDate = '0' + newDate;
            }

            if (newMonth < 10) {
                newMonth = '0' + newMonth;
            }

            return newDate + '/' + newMonth + '/' + newYear;
        }
    }, {
        key: 'getFilename',
        value: function getFilename() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (typeof path !== 'string') {
                return 'Not a string';
            }

            return path.split('/').pop();
        }
    }]);

    return Utils;
}();

exports.default = Utils;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBcUIsSzs7Ozs7OztnQ0FFVCxJLEVBQU07QUFDVixnQkFBSSxFQUFFLFFBQVEsSUFBUix5Q0FBUSxJQUFSLE9BQWtCLFFBQXBCLENBQUosRUFBbUMsT0FBTyxjQUFQO0FBQ25DLGdCQUFJLE1BQU0sS0FBSyxPQUFMLEVBQU4sQ0FBSixFQUEyQixPQUFPLGNBQVA7O0FBRTNCLGdCQUFJLFVBQVUsS0FBSyxPQUFMLEVBQWQ7QUFDQSxnQkFBSSxXQUFXLEtBQUssUUFBTCxFQUFmO0FBQ0EsZ0JBQUksVUFBVSxLQUFLLFdBQUwsRUFBZDs7QUFFQSxnQkFBSSxVQUFVLEVBQWQsRUFBa0I7QUFDZCwwQkFBVSxNQUFNLE9BQWhCO0FBQ0g7O0FBRUQsZ0JBQUksV0FBVyxFQUFmLEVBQW1CO0FBQ2YsMkJBQVcsTUFBTSxRQUFqQjtBQUNIOztBQUVELG1CQUFVLE9BQVYsU0FBcUIsUUFBckIsU0FBaUMsT0FBakM7QUFDSDs7O3NDQUVzQjtBQUFBLGdCQUFYLElBQVcsdUVBQUosRUFBSTs7QUFDbkIsZ0JBQUksT0FBTyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLHVCQUFPLGNBQVA7QUFDSDs7QUFFRCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQVA7QUFDSDs7Ozs7O2tCQTNCZ0IsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG5cbiAgICBnZXREYXRlKGRhdGUpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIChkYXRlKSA9PT0gJ29iamVjdCcpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgICAgIGlmIChpc05hTihkYXRlLmdldERhdGUoKSkpIHJldHVybiAnSW52YWxpZCBEYXRlJztcblxuICAgICAgICBsZXQgbmV3RGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbmV3TW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGxldCBuZXdZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmIChuZXdEYXRlIDwgMTApIHtcbiAgICAgICAgICAgIG5ld0RhdGUgPSAnMCcgKyBuZXdEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld01vbnRoIDwgMTApIHtcbiAgICAgICAgICAgIG5ld01vbnRoID0gJzAnICsgbmV3TW9udGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bmV3RGF0ZX0vJHtuZXdNb250aH0vJHtuZXdZZWFyfWA7XG4gICAgfVxuXG4gICAgZ2V0RmlsZW5hbWUocGF0aCA9ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiAnTm90IGEgc3RyaW5nJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoLnNwbGl0KCcvJykucG9wKCk7XG4gICAgfVxuXG59XG4iXX0=

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

            if (typeof path !== 'string' || !path.match(/\.\w+$/g)) {
                return 'Not a string';
            }

            return path.split('/').pop();
        }
    }]);

    return Utils;
}();

exports.default = Utils;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBcUIsSzs7Ozs7OztnQ0FFVCxJLEVBQU07QUFDVixnQkFBSSxFQUFFLFFBQVEsSUFBUix5Q0FBUSxJQUFSLE9BQWtCLFFBQXBCLENBQUosRUFBbUMsT0FBTyxjQUFQO0FBQ25DLGdCQUFJLE1BQU0sS0FBSyxPQUFMLEVBQU4sQ0FBSixFQUEyQixPQUFPLGNBQVA7O0FBRTNCLGdCQUFJLFVBQVUsS0FBSyxPQUFMLEVBQWQ7QUFDQSxnQkFBSSxXQUFXLEtBQUssUUFBTCxFQUFmO0FBQ0EsZ0JBQUksVUFBVSxLQUFLLFdBQUwsRUFBZDs7QUFFQSxnQkFBSSxVQUFVLEVBQWQsRUFBa0I7QUFDZCwwQkFBVSxNQUFNLE9BQWhCO0FBQ0g7O0FBRUQsZ0JBQUksV0FBVyxFQUFmLEVBQW1CO0FBQ2YsMkJBQVcsTUFBTSxRQUFqQjtBQUNIOztBQUVELG1CQUFVLE9BQVYsU0FBcUIsUUFBckIsU0FBaUMsT0FBakM7QUFDSDs7O3NDQUVzQjtBQUFBLGdCQUFYLElBQVcsdUVBQUosRUFBSTs7QUFDbkIsZ0JBQUksT0FBTyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCLENBQUMsS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFqQyxFQUF3RDtBQUNwRCx1QkFBTyxjQUFQO0FBQ0g7O0FBRUQsbUJBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFQO0FBQ0g7Ozs7OztrQkEzQmdCLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gICAgZ2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIGlmICghKHR5cGVvZiAoZGF0ZSkgPT09ICdvYmplY3QnKSkgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgICAgICBpZiAoaXNOYU4oZGF0ZS5nZXREYXRlKCkpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG5cbiAgICAgICAgbGV0IG5ld0RhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IG5ld01vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgbmV3WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBpZiAobmV3RGF0ZSA8IDEwKSB7XG4gICAgICAgICAgICBuZXdEYXRlID0gJzAnICsgbmV3RGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdNb250aCA8IDEwKSB7XG4gICAgICAgICAgICBuZXdNb250aCA9ICcwJyArIG5ld01vbnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke25ld0RhdGV9LyR7bmV3TW9udGh9LyR7bmV3WWVhcn1gO1xuICAgIH1cblxuICAgIGdldEZpbGVuYW1lKHBhdGggPSAnJykge1xuICAgICAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8ICFwYXRoLm1hdGNoKC9cXC5cXHcrJC9nKSkge1xuICAgICAgICAgICAgcmV0dXJuICdOb3QgYSBzdHJpbmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy8nKS5wb3AoKTtcbiAgICB9XG5cbn1cbiJdfQ==

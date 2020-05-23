define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function test(x, y) {
        return x + y;
    }
    function duan(x) {
        var y = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            y[_i - 1] = arguments[_i];
        }
        return x.cancat(y);
    }
    duan([1, 2, 3], [4, 5, 6]);
    function yan(x, y) {
        if (x.length) {
            return x.length;
        }
        else {
            return x.toString().length;
        }
    }
    var ar = function name(x, y) {
        return x + y;
    };
    var getData = function (value) {
        return value;
    };
    getData('lin');
    function fan(x) {
        return x;
    }
    fan(1);
});

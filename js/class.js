var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var add = new Animal('老虎');
console.log(add.name);
// 继承
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Cat;
}(Animal));
// 抽象
var chouxiang = /** @class */ (function () {
    function chouxiang() {
        this.name = 'lin';
    }
    return chouxiang;
}());
var dd = /** @class */ (function (_super) {
    __extends(dd, _super);
    function dd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dd.prototype.Fn = function () {
        return toStrings(this.name);
    };
    return dd;
}(chouxiang));
//接口继承
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());

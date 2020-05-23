function fan(length, value) {
    return value[length];
}
fan(1, '20');
// 多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([1, '2']);
function yue(age) {
    return age;
}
var myserach;
myserach = function (a, b) {
    return true;
};
var createarrya;
createarrya = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createarrya(3, [1, 2, 3, 4]);

interface arr{
    readonly id: number;
    name:string;
    age:number;
    [propName:string]:any
}
let brr:arr = {
    id:2020,
    name:'lin',
    age:21,
    top:12
}
// 接口函数
interface SearchFunc{
    (a:string,b:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function (a:string,b:string) {
    return false
}
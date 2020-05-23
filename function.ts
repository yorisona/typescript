function test(x:string,y:number):string|number{
    return x+y
}

function duan(x:any,...y:any[]){
    return x.cancat(y)
}
duan([1,2,3],[4,5,6])
function yan(x:string|number,y:any){
    if((<string>x).length){
        return (<string>x).length
    }else{
        return x.toString().length
    }
}
let ar:(x,y)=>number = function name(x,y):number {
    return x+y
}
// 声明
declare namespace jQuerys{
    interface get {
        methodes:'get'|'post';
        data:any;
    }
    function ajax(url:string,set?:get):void;
}
export {jQuerys}
// 泛型
interface ConfigFn{
    <T>(value:T):T
}
var getData:ConfigFn = function <T>(value:T):T {
    return value
}
getData<string>('lin')
function fan<T>(x:T):T{
    return x
}
fan<number>(1)
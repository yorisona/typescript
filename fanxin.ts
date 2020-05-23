function fan<T>(length:number,value:T):Array<T>{
    return value[length]
}
fan(1,'20')
// 多个类型参数
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
swap([1,'2'])

// 泛型约束
interface yueshu{
    length:number;
}
function yue<T extends yueshu>(age:T):T{
    return age
}

// 泛型接口
interface SerachFunc{
    (a:string,b:string):boolean;
}
let myserach:SerachFunc
myserach = function (a:string,b:string){
    return true
}
interface createArray{
    <T>(length:number,value:T):Array<T>
}
let createarrya:createArray
createarrya = function<T>(length:number,value:T):Array<T>{
    let result:T[] = []
    for(let i = 0;i<length;i++){
        result[i] = value
    }
    return result
}
createarrya(3, [1,2,3,4]);
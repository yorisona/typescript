class Animal {
    public name;
    public constructor(name){
        this.name = name
    }
}
let add = new Animal('老虎')
console.log(add.name)

// 继承
class Cat extends Animal {
    constructor (name){
        super(name)
        console.log(this.name)
    }
}

// 抽象
abstract class chouxiang{
    public name='lin';
    abstract Fn()
}

class dd extends chouxiang {
    Fn(){
        return toStrings(this.name)
    }
}

//接口继承
class Point{
    x:number;
    y:number;
}
interface Point3d extends Point{
    z:number;
}
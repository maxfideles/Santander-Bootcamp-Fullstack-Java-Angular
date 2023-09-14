function apiVersion(version:string){
    return (target:any) => {
        Object.assign(target.prototype,{__version: version})
    }
}

function minLength(length:number){
    return(target:any, key:string)=>{
       let _value = target[key]

       const getter = () => _value
       const setter = (value: string) => {
        if (value.length < length){
            throw new Error(`Length smaller than ${length}`)
        }else{
            _value = value
        }

        Object.defineProperty(target,key, {
            get: getter,
            set: setter
        })

       }
        
    }
}

@apiVersion("1.10")
class Api{
    @minLength(4)
    name:string
    
    constructor(name:string){
        this.name = name
    }


}



const api = new Api("asda")
console.log(api.name)
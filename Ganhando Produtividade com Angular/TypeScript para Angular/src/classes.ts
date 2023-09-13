 class Character {
    private "name": string
    private "strength": number
    private "skill": number
 
    constructor(name:string,strength:number,skill:number){
        this.name = name
        this.strength = strength
        this.skill = skill
    }

    attack(): void{
         console.log(`Attack with ${this.strength} points`)
    }
 }


 const p1 = new Character("Ken",20,1)

 p1.attack()
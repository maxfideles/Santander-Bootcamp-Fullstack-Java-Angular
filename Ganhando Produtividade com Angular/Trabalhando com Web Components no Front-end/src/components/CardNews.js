 class CardNews extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode:"open"})
        
    }

    build(){
        shadow.innerHTML = 'Max'

    }

    style(){

    }

 }

 customElements.define('card-news',CardNews)
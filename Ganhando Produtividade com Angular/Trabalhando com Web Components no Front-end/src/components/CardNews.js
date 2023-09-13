 class CardNews extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class","card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class","card__left")

        const author = document.createElement("span")
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)
        
        const cardRight  = document.createElement("div")
        cardRight.setAttribute("class","card__right")

        const imgNews = document.createElement("img")

        cardRight.appendChild(imgNews)


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        return componentRoot

    }

    styles(){

    }

 }

 customElements.define('card-news',CardNews)
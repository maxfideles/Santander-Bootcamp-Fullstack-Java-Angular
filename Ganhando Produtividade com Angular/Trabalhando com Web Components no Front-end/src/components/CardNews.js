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
        linkTitle.href = this.getAttribute("link")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)
        
        const cardRight  = document.createElement("div")
        cardRight.setAttribute("class","card__right")

        const imgNews = document.createElement("img")
        imgNews.src = this.getAttribute("photo") || "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=170667a&w=0&k=20&c=qDvsvfQdmm_cvI_BQH4PdIt8-P-VDAq7ufOobicPBu0="
        imgNews.alt = "News Image"
        cardRight.appendChild(imgNews)


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        
        return componentRoot

    }

    styles(){

    }

 }

 customElements.define('card-news',CardNews)
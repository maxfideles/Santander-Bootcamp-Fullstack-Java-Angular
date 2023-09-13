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
        cardLeft.setAttribute("class","cardLeft")

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
        cardRight.setAttribute("class","cardRight")

        const imgNews = document.createElement("img")
        imgNews.src = this.getAttribute("photo") || "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=170667a&w=0&k=20&c=qDvsvfQdmm_cvI_BQH4PdIt8-P-VDAq7ufOobicPBu0="
        imgNews.alt = "News Image"
        cardRight.appendChild(imgNews)


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        
        return componentRoot

    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
            .card{
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                -webkit-box-shadow: 4px 8px 11px 2px rgba(0,0,0,0.42); 
                box-shadow: 4px 8px 11px 2px rgba(0,0,0,0.42);
            }

            .cardLeft{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            .cardLeft span{
                font-weight: 500;
            }

            .cardLeft a{
                margin-top: 15px;
                font-size: 30px;
                color: black;
                text-decoration: none;
            }

            .cardLeft p{
                color: gray;
            }             
        `



        return style
    }

 }

 customElements.define('card-news',CardNews)
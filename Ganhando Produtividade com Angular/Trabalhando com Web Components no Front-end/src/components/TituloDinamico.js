class TituloDinamico extends HTMLElement{

    constructor(){
        super()

        const shadow =this.attachShadow({mode:"open"})
       
        //base component
        // <h1>Max</h1>
        const componentRoot = document.createElement('h1')
        componentRoot.textContent = 'Max'
        
        //component style
        const style = document.createElement('style')
        style.textContent = `
            h1 {
                color: red;
            }
            `
        //send to the shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)

    }

}

customElements.define('titulo-dinamico',TituloDinamico)

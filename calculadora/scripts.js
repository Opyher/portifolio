let button = document.querySelectorAll("button[name='num']")

let num
let opr = document.querySelectorAll("button[name='opr']")
let resVisor = document.querySelector("span#res")


verificaOpr(opr)


button.forEach((numero) => {
    numero.addEventListener("click", () => {
        if(resVisor.innerHTML == '0'){
            resVisor.innerHTML = ''
        }
        resVisor.innerHTML += numero.textContent 
        let num = parseInt(numero.value)
        
    })
})



function verificaOpr(opr){
    opr.forEach((element) => {
        
        if(element.id == "opr-porc"){
            element.classList.add("opr-alt")
        } else {
            element.classList.add("opr")
        }

        element.addEventListener("click", () => {
           
            if(element.value == '='){
                resVisor.innerHTML = eval(resVisor.textContent)

            } else {
                resVisor.innerHTML += element.value
                
               
            }
        })

    })

}

function limpar(){
    resVisor.innerHTML = '0'
}



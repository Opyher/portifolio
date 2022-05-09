function clicar(){
    var valor = document.getElementsByClassName('btn')
    var num = Number.parseInt(valor.value)
    document.getElementById('visor').innerHTML = num
}
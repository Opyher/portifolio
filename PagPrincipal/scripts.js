let posImg = 0
carrossel(posImg)

function antesImg(){
    posImg = posImg - 1
    carrossel(posImg)
}

function depoisImg(){
    posImg = posImg + 1
    carrossel(posImg)
}

function carrossel(posicao){
    let imagem = document.getElementsByClassName('fotos')

    if(posicao >= imagem.length){
        posicao = 0;
        posImg = 0;
    }
    if(posicao < 0){
        posicao = imagem.length - 1
        posImg = imagem.length - 1
    }
    for(let i = 0; i<imagem.length; i++){
        imagem[i].style.display = 'none'
    }
    imagem[posicao].style.display = 'block'
}


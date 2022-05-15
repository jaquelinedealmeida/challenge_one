const inputText = document.querySelector(".input-text");
const mensage = document.querySelector(".mensage");

function btnEncriptar() {
    const textoEncriptado =  encriptar(inputText.value)
    mensage.value = textoEncriptado
    mensage.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let  matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
    
}

//criar funcao descriptgrafar
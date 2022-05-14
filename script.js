const  inputText = document.querySelector(".input-text");
const mensagem = document.querySelector("mensage");

function btnEncriptor() {
    const textoEncriptado =  encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let  matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
    
}

//criar funcao descriptgrafar
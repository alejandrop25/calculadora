function soma(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let tela = document.getElementById("tela");
    
    tela.innerText = n1 + n2;
    console.log("hello");
    if(isNaN(tela.innerText)){
        tela.innerText = 0;
    }
}

function sub(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let tela = document.getElementById("tela");
    tela.innerHTML = n1 - n2;
    if(isNaN(tela.innerText)){
        tela.innerText = 0;
    }

}

function divisao(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let tela = document.getElementById("tela");
    tela.innerHTML = n1 / n2;
    if(isNaN(tela.innerText)){
        tela.innerText = 0;
    }
}

function mult(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let tela = document.getElementById("tela");
    tela.innerHTML = n1 * n2;
    if(isNaN(tela.innerText)){
        tela.innerText = 0;
    }
}

function pot(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let tela = document.getElementById("tela");
    tela.innerHTML = Math.pow(n1, n2);
    if(isNaN(tela.innerText)){
        tela.innerText = 0;
    }
}


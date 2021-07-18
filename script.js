let num  = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function getNumero (n){
    if (Number(n)<=100 && Number(n)>=0){
        return true;
    } else {
        return false;
    }
}

function inLista (n, lis){
    if (lis.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if (getNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na Lista')
    }
    num.value = ''
    num.focus() //coloca o cursor direto pra digitar novamente
}

function calcular (){
    if (valores.length == 0) {
        window.alert('Adicione valores para finalizar')
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${valores.length} valores adicionados. </p>`

        let maior = valores[0], menor = valores[0]
        let soma=0, media=0

        for (let i in valores){
            soma += valores[i]
            media = soma/valores.length

            if (valores[i] > maior){
                maior = valores[i]
            } 
            if (valores[i]< menor){
                menor = valores[i]
            }
        }
        res.innerHTML += `<p> O maior valor adicionado é ${maior}, e o menor é ${menor}. </p>`
        res.innerHTML += `<p> A soma dos valores adiconado é ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores adicionado é ${media}. </p>`

    }

}
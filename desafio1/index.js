function calcularimc(){
    var inputPeso = document.getElementById('peso');
    var inputAltura = document.getElementById('altura');       

    var resultado = ( inputPeso.value * inputAltura.value) / 2
    

    console.log(`O IMC é:${resultado}`)
    
    var h1 = document.getElementById("resultado")
         h1.innerHTML = `O Seu IMC é: ${resultado}`;
}

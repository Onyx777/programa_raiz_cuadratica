'use strict'
let numeroIngresado = 0;
let contadorDivisores = 0;
let totalPrimos = [];
let i = 1;


function calcularPrimos(){

    //Valor ingresado por el usuario
    numeroIngresado = document.getElementById('arrayPri').value;


    for (let x=0;x<=numeroIngresado;x++) {
        if(esPrimo(x)){
            totalPrimos.push(x); 
            console.log(totalPrimos);

            if(totalPrimos.find(t => t == numeroIngresado) && numeroIngresado>2){
                document.getElementById('esPrimo').classList.toggle('hidden');
                document.getElementById('esPrimo').innerHTML = `<strong>El número ingresado ${numeroIngresado}</strong>: ES un numero primo`;

                document.getElementById('posicionNumero').classList.toggle('hidden');
                document.getElementById('posicionNumero').innerHTML = `<strong>Posición del número dentro de los primos:</strong> ${totalPrimos.length}`;
                
                console.log(numeroIngresado>9);

                if(numeroIngresado>9){
                    let numeroXDigito =  numeroIngresado.split("");
                    let multiXDigito = numeroXDigito[0] * numeroXDigito[1];
                    
                    document.getElementById('multiXDigi').classList.toggle('hidden');
                    document.getElementById('multiXDigi').innerHTML = `<strong>El digito ingresado, descompuesto en digitos individuales es:</strong> ${numeroXDigito} y el producto es <strong>${multiXDigito}</strong>`;
                }
                numeroIngresado  = 0;
                
            }else{
                console.log(totalPrimos.find(t => t == numeroIngresado));
                document.getElementById('noEsPrimo').classList.toggle('hidden');
                document.getElementById('noEsPrimo').innerHTML = `<strong>El número ingresado ${numeroIngresado}</strong>: NO es un numero primo`;

            }
        }
    }


}

function esPrimo(numero) {
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  
// Ejemplo 1

// function saludar(algo){
//    alert(algo);
// }
// saludar({"hola":'hola'});

// Ejamplo 2
// function principal(callback){
//     console.log('Se ejecuto principal');
//     callback('Se ejecuto callback');
// }

// principal(function(value){
//     console.log(value);
// });

// Ejemplo 3
// function principal(callbackUno, callbackDos, callbackTres){
//     console.log('Se ejcuto principal');
//     callbackUno();
//     callbackDos();
//     callbackTres();
// }

// principal(
//     function (){
//         console.log('Callback Uno');
//     },
//     function (){
//         console.log('Callback Dos');
//     },
//     function (){
//         console.log('Callback Tres');
//     }
// );

// 1.- Evento click con el boton
$('#calcular').click(function(){
    // 2.- Obtener valor de inputs #numUno, #numDos
    let numUno = $('#numUno').val();
    let numDos = $('#numDos').val();
    // alert(numUno);
    // alert(numDos);

     // 3.- Funcion principal
    function calculadora(sumar, restar, dividir, multiplicar){
        // 4.- Pasar los numeros a cada callback(sumar, restar, multiplicar y dividir)
        sumar(numUno, numDos);
        restar(numUno, numDos);
        dividir(numUno, numDos);
        multiplicar(numUno, numDos);
    }

   // 5.- Realizar la operacion en cada callback
    calculadora(
        // 6.- Mostrar el resultado de cada callback en #result  
        function(uno, dos){
            let result = parseInt(uno) + parseInt(dos);
            $('#result').append('<p>La suma es: '+ result);
        },
        function(uno, dos){
            let result = uno - dos;
            $('#result').append('<p>La resta es: '+ result);
        },
        function(uno, dos){
            let result = uno / dos;
            $('#result').append('<p>La divición es: '+ result);
        },
        function(uno, dos){
            let result = uno * dos;
            $('#result').append('<p>La multiplicación es: '+ result);
        }
    );
    
});



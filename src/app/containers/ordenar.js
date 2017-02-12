angular
        .module('app')
        .component('principal', {
            templateUrl: 'app/containers/ordenar.html',
            controller: principalCtrl
        });

function principalCtrl($timeout) {

    var $ctrl = this;
    $ctrl.numero; // VALOR DEL INPUT
    $ctrl.text = "";
    $ctrl.cargando = false;

    $ctrl.verificar = function () {
        var repetido = false; // llave que permite saber si el numero nuevo sera permitido o no
        var array = $ctrl.numero.toString();
        var ultimo = array[array.length - 1]; // ESTE ES EL ULTIMO NUMERO INGRESADO
        var nuevo = ""; // VALOR QUE VA A SUSTITUIR EL VALOR DEL INPUT
        array = array.split("");
        array.splice(array.length - 1, 1);
        for (var i = 0; i < array.length; i++) {
            nuevo = nuevo + array[i];
            if (array[i] === ultimo) {
                console.log("repetido");
                repetido = true; // EL NUMERO SE ENCUENTRA PRESENTE EN LA CADENA
                $ctrl.numero = parseInt(nuevo);
            }
        }
        if (array.length > 1) {
            if (repetido === false) {// COMO NO ESTA PRESENTE EL NUMERO NUEVO EN LA LISTA SE QUEDA DE ULTIMO
                nuevo = nuevo + ultimo;
            } else {// SI EL NUMERO NUEVO ESTA PRESENTE SE MUESTRA UN MENSAJE Y NO SE AGREGA EN LA LISTA
                $ctrl.text = "El numero: " + ultimo + " esta repetido";
                $ctrl.ocultarTexto();
            }
            $ctrl.numero = parseInt(nuevo);
        }
    };

    $ctrl.ocultarTexto = function () {
        $timeout(function () {// DESPUES DE DOS SEGUNDOS SE QUITA EL MENSAJE
            $ctrl.text = "";
        }, 2000);
    };

    $ctrl.preOrdenar = function () {
        if ($ctrl.numero !== undefined && $ctrl.numero !== false && $ctrl.numero !== null) {
            $ctrl.cargando = true;
            $ctrl.cadenaOrganizada = $ctrl.numero.toString().split().sort();
            var array = $ctrl.numero.toString().split("");
            var numero = 0; // comienza a comparar desde la posición 0 del array
            $ctrl.ordenar(array, numero);
        } else {
            $ctrl.text = "Debe ingresar más de un numero";
            $ctrl.ocultarTexto();
        }
    };

    $ctrl.ordenar = function (array, numero) {
        var size = array.length;
        $ctrl.ordenarBurbuja(array, numero);
        $timeout(function () { // SE UTILIZA EL TIMEOUT PARA IR MOSTRANDO COMO VAN ACOMODANDOSE LOS NUMEROS
            if (numero <= size && array.toString() !== $ctrl.cadenaOrganizada.toString()) {
                // AUN NO ESTA ORGANIZADO EL ARRAY SE PROCEDE A COMPARAR EL SIGUIENTE INDICE DEL ARRAY Y REPETIR LA FUNCION
                numero = numero + 1;
                $ctrl.numero = parseInt(array.join(''));
                $ctrl.ordenar(array, numero);
            } else { // YA SE ORGANIZO EL ARRAY
                $ctrl.cargando = false;
                $ctrl.numero = parseInt(array.join(''));
            }
        }, 500);
    };

    $ctrl.cambio = function (array, primero, segundo) { // FUNCION QUE CAMBIA VALORES ENTRE DOS INDICES DE UN ARRAY
        var temporal = array[primero];
        array[primero] = array[segundo];
        array[segundo] = temporal;
        return array;
    };

    $ctrl.ordenarBurbuja = function (array, paso) { // SE COMPARA EL VALOR DE UN IDICE DEL ARRAY CON EL DE SU DERECHA
        var size = array.length;
        for (var izquierda = 0; izquierda < (size - paso); izquierda++) {
            var derecha = izquierda + 1;
            if (array[izquierda] > array[derecha]) { // SI EL VALOR DE LA IZQUIERDA ES MAYOR SE CAMMBIA DE POSICIÓN
                $ctrl.cambio(array, izquierda, derecha);
            }
        }
    };
}

var num1 = parseInt(prompt("introduce el primer numero"));
var num2 = parseInt(prompt("introduce el segundo numero numero"));

const multiFuncion = function (num1, num2){
    let resuma = num1 + num2;
    let reresta = num1 - num2;
    let remulti = num1 * num2;
    let redivi = num1 / num2;
    let remodu = num1 % num2;
    return {
        suma: resuma,
        resta: reresta,
        multi: remulti,
        divi: redivi,
        modu: remodu
    };
}

console.log(`Con los numeros ${num1} y ${num2} podemos obtener lo siguiente \n` +
            `Sumandolos dan ${multiFuncion(num1,num2).suma} \n` +
            `Restandolos dan ${multiFuncion(num1,num2).resta}\n` +
            `Multiplicandolos dan ${multiFuncion(num1,num2).multi}\n` +
            `Dividiendolos dan ${multiFuncion(num1,num2).divi}\n` +
            `Su restos dan ${multiFuncion(num1,num2).modu}`);

document.write(`Con los numeros ${num1} y ${num2} podemos obtener lo siguiente \n` +
`Sumandolos dan ${multiFuncion(num1,num2).suma} \n` +
`Restandolos dan ${multiFuncion(num1,num2).resta}\n` +
`Multiplicandolos dan ${multiFuncion(num1,num2).multi}\n` +
`Dividiendolos dan ${multiFuncion(num1,num2).divi}\n` +
`Su restos dan ${multiFuncion(num1,num2).modu} `);

//---------------------------------------------------------------------------------------

var temc = parseInt(prompt("introduce temperatura en grados celcius"));

const temf = function (temc) {
    let retemf = (temc * (9 / 5)) + 32;
    return retemf;
}

const temk = function (temc) {
    let retemk = temc + 273.15;
    return retemk;
}

console.log(`${temc}°c equivalen a ${temf(temc)}°F o a ${temk(temc)}°k`);

document.write(`${temc}°c equivalen a ${temf(temc)}°F o a ${temk(temc)}°k `);

//----------------------------------------------------------------------------------------

var dias = parseInt(prompt("introduce el numero de dias"));

const asd = function (dias) {
    
    let a = Math.trunc(dias / 365);
    let s = Math.trunc((dias % 365) / 7);
    let d = ((dias % 365) % 7)

    return reasd = {
        anio: a,
        semana: s,
        dia: d
    };
}

console.log(`${dias} dias son equivalentes a ${asd(dias).anio} años ${asd(dias).semana} semanas y ${asd(dias).dia} dias`);
document.write(`${dias} dias son equivalentes a ${asd(dias).anio} años ${asd(dias).semana} semanas y ${asd(dias).dia} dias `);

//----------------------------------------------------------------------------------------
let arrayDeCaracteres = prompt("introduce los numeros separados por comas").split(",");

let arrayDeNumeros = function (arrayDeCaracteres) {

    sumaArray = 0;

    for (var i = 0; i < arrayDeCaracteres.length; i++) {
        sumaArray += parseInt(arrayDeCaracteres[i]);
    }
    
    cantidadNumeros = arrayDeCaracteres.length;

    promediArray = (sumaArray / cantidadNumeros);

    return {
        suma: sumaArray,
        terminos: cantidadNumeros,
        promedio: promediArray
    }
}

console.log(`La suma de ${arrayDeCaracteres} es igual a ${arrayDeNumeros(arrayDeCaracteres).suma} y el promedio estos ${arrayDeNumeros(arrayDeCaracteres).terminos} numeros es igual a ${arrayDeNumeros(arrayDeCaracteres).promedio}`);
document.write(`La suma de ${arrayDeCaracteres} es igual a ${arrayDeNumeros(arrayDeCaracteres).suma} y el promedio estos ${arrayDeNumeros(arrayDeCaracteres).terminos} numeros es igual a ${arrayDeNumeros(arrayDeCaracteres).promedio}`)

//console.log(typeof(arrayDeNumeros(arrayDeCaracteres).terminos));
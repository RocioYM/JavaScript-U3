const a = true && true;
const b = false && true;
const c = true && false;
const d = false && (3==4);
const f = "cat" && "dog";
const g = false && "cat";
const h = "cat" && false;

const a1 = !true;
const b1 = !false;
const c1 = !"cat";

const tiempo = 14;
let saludo;
if (tiempo<12) {
    saludo = "buenos dias"
} else if (tiempo>=12 && tiempo<=19){
    saludo = "buenas tardes"
} else if = 

const dia = 5;
let texto;
switch (dia) {
    case 0:
        texto = "domingo"
        break;
    case 1:
        texto = "lunes"
        break;
    case 2:
        texto = "martes"
        break;
    case 3:
        texto = "miercoles"
        break;
    case 4:
        texto = "jueves"
        break;
    case 5:
        texto = "viernes"
        break;    
    default:
        texto = "dia no valido";
        break;
}

console.log(texto);
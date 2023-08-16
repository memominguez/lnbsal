// Simulación de la lotería nacional de El Salvador LNB 

var i, j, k;

/* Generar los array de premios */
/* Total, 620 premios de urna */
var premio1 = []; premio1[0] = 100000;
var premio2 = []; premio2[0] = 20000;
var premio3 = []; premio3[0] = 10000;
var premio4 = []; premio4[0] = 2000;
var premios1000 = [];
var premios500 = [];
var premios200 = [];
var premios100 = [];
var premios75 = [];
var premios50 = [];
var losPremios = [];

var premio

 /* Generar 5 premios de $1000 */
for(i = 0; i < 5; i++) {
	premio = 1000;
	premios1000.push(premio);
}

 /* Generar 15 premios de $500 */
 for(i = 0; i < 15; i++) {
	premio = 500;
	premios500.push(premio);
 }

/* Generar 20 premios de $200 */
for(i = 0; i < 20; i++) {
	premio = 200;
	premios200.push(premio);
 }

/* Generar 40 premios de $100 */
for(i = 0; i < 40; i++) {
	premio = 100;
	premios100.push(premio);
 }

 /* Generar 100 premios de $75 */
for(i = 0; i < 100; i++) {
	premio = 75;
	premios75.push(premio);
 }

 /* Generar 436 premios de $50 */
 for(i = 0; i < 436; i++) {
	premio = 50;
	premios50.push(premio);
 }

// Concatenar el array de premios. Resulta un total de 620 premios de urna 
losPremios = premio1.concat(premio2, premio3, premio4, premios1000, premios500,
	premios200, premios100, premios75, premios50);

// Barajar el array losPremios
function barajar() {
var com, swap; 
for (i = 0; i < 620; i++) {
swap = Math.floor(Math.random()*620);
com = losPremios[i];
losPremios[i] = losPremios[swap];
losPremios[swap] = com;
    }	
}

// Declarar la variable billetes, casillas en blanco 
var serieBilletes = ["", "", "", "", "", "", "", "", "", ""];
var sorteo = "";

// Generar los billetes, serie de 10, con terminación del 0 al 9 
function comprarBilletes() {  // *************** Funcion comprar billetes
clearfields();
sorteo = false;
for (i = 0; i < 10; i++) {
serieBilletes[i] = Math.floor(Math.random() * 5000);
serieBilletes[i] = serieBilletes[i] * 10 + i;
serieBilletes[i] = (serieBilletes[i]).toString();
    while (serieBilletes[i].length < 5) {
       serieBilletes[i] = "0" + serieBilletes[i]; // Agregar ceros a la izquierda
    }	
}

// Mostrar los billetes 
document.getElementById("billete1").innerHTML = serieBilletes[0];
document.getElementById("billete2").innerHTML = serieBilletes[1];
document.getElementById("billete3").innerHTML = serieBilletes[2];
document.getElementById("billete4").innerHTML = serieBilletes[3];
document.getElementById("billete5").innerHTML = serieBilletes[4];
document.getElementById("billete6").innerHTML = serieBilletes[5];
document.getElementById("billete7").innerHTML = serieBilletes[6];
document.getElementById("billete8").innerHTML = serieBilletes[7];
document.getElementById("billete9").innerHTML = serieBilletes[8];
document.getElementById("billete10").innerHTML = serieBilletes[9];
}
// Final de la función comprarBilletes
// ***********************************************************************

// Crear "la lista", matriz 929 x 3
// para almacenar los números con premio, y el valor de los premios
var laLista = [];
var maxX = 929; var maxY = 3;
// creating two dimensional array
for (i = 0; i < maxX; i++) {
	for(j = 0; j < maxY; j++) {
		laLista[i] = [];
	}
}
// Poblar la matriz, con elementos provisionales, 0,1,2
for (i = 0; i< maxX; i++) {
	for(j = 0; j < maxY; j++) {
		laLista[i][j] = j;
	}
}
// Matriz creada

// **************************************************************************

var premioGrande = []; premioGrande[0] = [""]  // Para guardar los premios grandes, en numérico

function correrSorteo() {  // ******************* AQUI VA EL SORTEO!! *******

	if(serieBilletes[0] == "") {  // Favor comprar billetes, para poder jugar
		alert("Se le invita a comprar billetes, para poder participar");
		return;
	}
	if(sorteo == true) {  //  Si ya corrió el sorteo, favor comprar nuevos billetes
		alert("Se le invita a comprar nuevos billetes")
		return;
	}
	
animate(); // Rotar la tómbola

var tombola = [];
var numDigit = "";

// Generar 620 premios de urna, por el sistema de tómbolas
for (i = 0; i < 620; i++) {
    tombola[1] = Math.floor(Math.random() * 5);
    for (j = 2; j < 6; j++) {
        tombola[j] = Math.floor(Math.random() * 10);
}
numDigit = "";
    for (j = 1; j < 6; j++) {
        numDigit = numDigit + (tombola[j]);
}

//laLista[i][1] = numDigit;
laLista[i][0] = parseInt(numDigit, 10);
laLista[i][2] = losPremios[i];
}

/*
	for(i = 0; i < 620; i++) {   // Generar 620 números premiados, de urna
		numPremio = Math.floor(Math.random() * 50000);			
		laLista[i][0] = numPremio; // Poblar el array laLista con los números premiados
		laLista[i][2] = losPremios[i];	// Poblar el array laLista con los premios en $	
	}
*/


/* Buscar los tres números con los premios grandes */
for (i = 0; i < 620; i++) {	
	if(laLista[i][2] > 90000) {
		premioGrande[0] = laLista[i][0];		
	}
	if((laLista[i][2] > 19000) && (laLista[i][2] < 21000)) {
		premioGrande[1] = laLista[i][0];		
	}
	if((laLista[i][2] > 9000) && (laLista[i][2] < 11000)) {
		premioGrande[2] = laLista[i][0];		
	}	
}

// *********************** Agregar premios por aproximación
// Aproximaciones al primer premio... dos anteriores, dos posteriores
for (i = 1; i < 3; i++) {		
		j = 622 - i;	
		laLista[j][0] = (premioGrande[0] - i);
		laLista[j][2] = 140;				
}

for (i = 1; i < 3; i++) {		
	j = i + 621;	
	laLista[j][0] = (premioGrande[0] + i);
	laLista[j][2] = 140;				
}

// Aproximaciones al segundo premio... dos anteriores, dos posteriores
for (i = 1; i < 3; i++) {		
	j = 626 - i;	
	laLista[j][0] = (premioGrande[1] - i);
	laLista[j][2] = 120;				
}

for (i = 1; i < 3; i++) {		
j = i + 625;	
laLista[j][0] = (premioGrande[1] + i);
laLista[j][2] = 120;				
}

// Aproximaciones al tercer premio... dos anteriores, dos posteriores
for (i = 1; i < 3; i++) {		
	j = 630 - i;	
	laLista[j][0] = (premioGrande[2] - i);
	laLista[j][2] = 100;				
}

for (i = 1; i < 3; i++) {		
j = i + 629;	
laLista[j][0] = (premioGrande[2] + i);
laLista[j][2] = 100;				
}

// Crear lista de los números, en forma de strings con ceros a la izquierda
// En preparación para el siguiente paso
for (i = 0; i < 632; i++) {
laLista[i][1] = (laLista[i][0]).toString();
	while (laLista[i][1].length < 5) {
		laLista[i][1] = "0" + laLista[i][1];
	}
}
// **********************************************************************

// Generar los números con las primeras 4 cifras del primer premio
var cut4Str, cut3Str;
var decena = [];
var centena = [];
var iStr;
// 
for (i = 0; i < 1; i++) {
	cut4Str = premioGrande[0].toString();
		while (cut4Str.length < 5) {
			cut4Str = "0" + cut4Str;
		}
	}
// Generar la decena que incluye el primer premio
	cut4 = cut4Str.substr(0,4);
for (i = 0; i < 10; i++) {
	iStr = i.toString();
	decena[i] = cut4 + iStr;
}

// Identificar posición del primer premio en el array decena[]
for (i = 0; i < 10; i++) {
	if (decena[i] == cut4Str) {
		k = i;
		break;
	}
}

decena.splice(k, 1);  // Eliminar primer premio del array decena[]

// Poblar la lista con los 9 nuevos números, con las primeras 4 cifras del primer premio
for (i = 632; i < 641; i++ ) {  
	laLista[i][1] = decena[(i-632)];
	laLista[i][2] = 100;
}

// Generar los números con las primeras 4 cifras del segundo premio 
for (i = 0; i < 1; i++) {
	cut4Str = premioGrande[1].toString();
		while (cut4Str.length < 5) {
			cut4Str = "0" + cut4Str;
		}
	}
// Generar la decena que incluye el segundo premio
	cut4 = cut4Str.substr(0,4);
for (i = 0; i < 10; i++) {
	iStr = i.toString();
	decena[i] = cut4 + iStr;
}

// Identificar posición del segundo premio en el array decena[]
for (i = 0; i < 10; i++) {
	if (decena[i] == cut4Str) {
		k = i;
		break;
	}
}

decena.splice(k, 1);  // Eliminar segundo premio del array decena[]

// Poblar la lista con los 9 nuevos números, con las primeras 4 cifras del segundo premio
for (i = 641; i < 650; i++ ) {
	laLista[i][1] = decena[(i-641)];
	laLista[i][2] = 90;
}

// Generar los números con las primeras 4 cifras del tercer premio
// 
for (i = 0; i < 1; i++) {
	cut4Str = premioGrande[2].toString();
		while (cut4Str.length < 5) {
			cut4Str = "0" + cut4Str;
		}
	}
// Generar la decena que incluye el tercer premio
	cut4 = cut4Str.substr(0,4);
for (i = 0; i < 10; i++) {
	iStr = i.toString();
	decena[i] = cut4 + iStr;
}

// Identificar posición del tercer premio, en el array decena[]
for (i = 0; i < 10; i++) {
	if (decena[i] == cut4Str) {
		k = i;
		break;
	}
}

decena.splice(k, 1);  // Eliminar tercer premio del array decena[]

// Poblar la lista con los 9 nuevos números, con las primeras 4 cifras del tercer premio
for (i = 650; i < 659; i++ ) {  
	laLista[i][1] = decena[(i-650)];
	laLista[i][2] = 90;
}

// ************************ Ya agregados los premios por 4 primeras cifras

// Generar lista de números con primeras 3 cifras del primer premio, 90 números
//
for (i = 0; i < 1; i++) {
	cut3Str = premioGrande[0].toString();
		while (cut3Str.length < 5) {
			cut3Str = "0" + cut3Str;
		}
	}

// Generar la centena que incluye el primer premio
cut3 = cut3Str.substr(0,3);
for (i = 0; i < 100; i++) {
	iStr = i.toString();
		while (iStr.length < 2) {
			iStr = "0" + iStr;
		}
	centena[i] = cut3 + iStr;
}

// Identificar posición del primer premio, en el array centena[]
for (i = 0; i < 100; i++) {
	if (centena[i] == cut3Str) {
		k = i;
		break;
	}
}
centena.splice(k, 1);  // Eliminar el primer premio del array centena[]

// Remover los premios ya otorgados (de 4 cifras) del array centena[]
for (i = 0; i < 100; i++) {
		if (centena[i] == laLista[632][1]) {
			k = i;
			break;		
			}
	}		
	
centena.splice(k, 9); // Premios ya otorgados son removidos del array centena[]

// Poblar la lista con los 90 nuevos números, con las primeras 3 cifras del primer premio
for (i = 659; i < 749; i++ ) {  
	laLista[i][1] = centena[(i-659)];
	laLista[i][2] = 80;
}

// Generar lista de números con primeras 3 cifras del segundo premio, 90 números
//
for (i = 0; i < 1; i++) {
	cut3Str = premioGrande[1].toString();
		while (cut3Str.length < 5) {
			cut3Str = "0" + cut3Str;
		}
	}

// Generar la centena que incluye el segundo premio
cut3 = cut3Str.substr(0,3);
for (i = 0; i < 100; i++) {
	iStr = i.toString();
		while (iStr.length < 2) {
			iStr = "0" + iStr;
		}
	centena[i] = cut3 + iStr;
}

// Identificar posición del segundo premio en el array centena[]
for (i = 0; i < 100; i++) {
	if (centena[i] == cut3Str) {
		k = i;
		break;
	}
}
centena.splice(k, 1);  // Eliminar el segundo premio del array centena[]

// Remover los premios ya otorgados (de 4 cifras) del array centena[]
for (i = 0; i < 100; i++) {
		if (centena[i] == laLista[641][1]) {
			k = i;
			break;		
			}
	}

	centena.splice(k, 9); // Premios ya otorgados son removidos del array centena[]

// Poblar la lista con los 90 nuevos números, con las primeras 3 cifras del segundo premio
for (i = 749; i < 839; i++ ) {  
	laLista[i][1] = centena[(i-749)];
	laLista[i][2] = 70;
}

// Generar lista de números con primeras 3 cifras del tercer premio, 90 números
//
for (i = 0; i < 1; i++) {
	cut3Str = premioGrande[2].toString();
		while (cut3Str.length < 5) {
			cut3Str = "0" + cut3Str;
		}
	}

// Generar la centena que incluye el tercer premio
cut3 = cut3Str.substr(0,3);
for (i = 0; i < 100; i++) {
	iStr = i.toString();
		while (iStr.length < 2) {
			iStr = "0" + iStr;
		}
	centena[i] = cut3 + iStr;
}

// Identificar posición del tercer premio en el array centena[]
for (i = 0; i < 100; i++) {
	if (centena[i] == cut3Str) {
		k = i;
		break;
	}
}
centena.splice(k, 1);  // Eliminar el tercer premio del array centena[]

// Remover los premios ya otorgados (de 4 cifras) del array centena[]
for (i = 0; i < 100; i++) {
		if (centena[i] == laLista[650][1]) {
			k = i;
			break;		
			}
	}

	centena.splice(k, 9); // Premios ya otorgados son removidos del array centena[]

// Poblar la lista con los 90 nuevos números, con las primeras 3 cifras del tercer premio
for (i = 839; i < 929; i++ ) {  
	laLista[i][1] = centena[(i-839)];
	laLista[i][2] = 60;
}
// ************************ Ya agregados los premios por las 3 primeras cifras

// Completar la segunda columna del array laLista[]
for (i = 632; i < 929; i++) {
	laLista[i][0] = parseInt(laLista[i][1]);
}


//Ordenar el array laLista[] en forma ascendente 
laLista.sort(function(a, b) {return a[0] - b[0]});


// Chequear por repeticiones, y re-asignar premios 
// Aplicar el algoritmo en tres pasadas 
var repetition = 0;  // Variable provisional, creada durante los tests del programa
for (j = 0; j < 3; j++) {
for (i = 0; i < 928; i++) {	
	if (laLista[i][0] == laLista[i+1][0]) {
		laLista[i][2] = laLista[i][2]+ laLista[i+1][2];
		laLista[i+1][2] = 0;	
		repetition++
		}
	}	
	}
//  Los números repetidos quedan con premio = 0, 
//	y los premios fueron consolidados en un solo número

//console.log("números repetidos  " + repetition/3); ... Provisional 
	
// Marcar los números con cero premio como "repetidos"
for (i = 0; i < 929; i++) {
	if (laLista[i][2] < 1) {
		laLista[i][2] = "repetido";
	}
}

// **************** OTORGAR PREMIOS POR TERMIACIONES *******************
var term4, term3, term2, term4, elPremio, laTerminacion, elNumero;
var otorgado = [];
var primerPremio, segundoPremio, tercerPremio;

// ************************* Otorgar por terminaciones del primer premio
elPremio = premioGrande[0].toString();
for (i = 0; i < 2; i++) {
	while (elPremio.length < 5) {
		elPremio = "0" + elPremio	}
}
primerPremio = elPremio;
term4 = elPremio.substr(1, 4);
term3 = elPremio.substr(2, 3);
term2 = elPremio.substr(3, 2);
term1 = elPremio.substr(4, 1);

for (i = 0; i < 929; i++) { 	// chequear números de la lista, uno por uno
	if (laLista[i][2] == "repetido") {   // excluir números repetidos
		continue;
	}
	elNumero = laLista[i][1];  
	if(elNumero == elPremio) {  
		continue;				// excluir premio grande
	}
	laTerminacion = elNumero.substr(1, 4);  // Sumar al premio por terminación de 4 cifras
	if (laTerminacion == term4) {
		laLista[i][2] = laLista[i][2] + 100;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(2, 3); // Sumar al premio por terminación de 3 cifras
	if (laTerminacion == term3) {
		laLista[i][2] = laLista[i][2] + 80;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(3, 2); // Sumar al premio por terminación de 2 cifras
	if (laTerminacion == term2) {
		laLista[i][2] = laLista[i][2] + 40;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(4, 1); // Sumar al premio por terminación de 1 cifra
	if (laTerminacion == term1) {
		laLista[i][2] = laLista[i][2] + 35;
		otorgado.push(elNumero);  // provisional	
	}
}

// ***************************** Otorgar por terminaciones del segundo premio
elPremio = premioGrande[1].toString();
for (i = 0; i < 2; i++) {
	while (elPremio.length < 5) {
		elPremio = "0" + elPremio	}
}
segundoPremio = elPremio;
term4 = elPremio.substr(1, 4);
term3 = elPremio.substr(2, 3);
term2 = elPremio.substr(3, 2);
term1 = elPremio.substr(4, 1);

for (i = 0; i < 929; i++) {		// chequear números de la lista, uno por uno
	if (laLista[i][2] == "repetido") {  // excluir números repetidos
		continue;
	}
	elNumero = laLista[i][1];  
	if(elNumero == elPremio) {  
		continue;				// excluir premio grande
	}
	laTerminacion = elNumero.substr(1, 4);  // Sumar al premio por terminación de 4 cifras
	if (laTerminacion == term4) {
		laLista[i][2] = laLista[i][2] + 90;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(2, 3); // Sumar al premio por terminación de 3 cifras
	if (laTerminacion == term3) {
		laLista[i][2] = laLista[i][2] + 70;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(3, 2); // Sumar al premio por terminación de 2 cifras
	if (laTerminacion == term2) {
		laLista[i][2] = laLista[i][2] + 30;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(4, 1); // Sumar al premio por terminación de 1 cifra
	if (laTerminacion == term1) {
		laLista[i][2] = laLista[i][2] + 25;
		otorgado.push(elNumero);  // provisional	
	}
}

// ***************************** Otorgar por terminaciones del tercer premio
elPremio = premioGrande[2].toString();
for (i = 0; i < 2; i++) {
	while (elPremio.length < 5) {
		elPremio = "0" + elPremio	}
}
tercerPremio = elPremio;
term4 = elPremio.substr(1, 4);
term3 = elPremio.substr(2, 3);
term2 = elPremio.substr(3, 2);
term1 = elPremio.substr(4, 1);

for (i = 0; i < 929; i++) {		// chequear números de la lista, uno por uno
	if (laLista[i][2] == "repetido") {  // excluir números repetidos
		continue;
	}
	elNumero = laLista[i][1];  
	if(elNumero == elPremio) {  
		continue;				// excluir premio grande
	}
	laTerminacion = elNumero.substr(1, 4);  // Sumar al premio por terminación de 4 cifras
	if (laTerminacion == term4) {
		laLista[i][2] = laLista[i][2] + 90;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(2, 3); // Sumar al premio por terminación de 3 cifras
	if (laTerminacion == term3) {
		laLista[i][2] = laLista[i][2] + 60;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(3, 2); // Sumar al premio por terminación de 2 cifras
	if (laTerminacion == term2) {
		laLista[i][2] = laLista[i][2] + 30;
		otorgado.push(elNumero);  // provisional
		continue;
	}
	laTerminacion = elNumero.substr(4, 1); // Sumar al premio por terminación de 1 cifra
	if (laTerminacion == term1) {
		laLista[i][2] = laLista[i][2] + 25;
		otorgado.push(elNumero);  // provisional	
	}
}
//  *************************** LISTA COMPLETADA ****************************

//  *********************** REVISAR LOS BILLETES ****************************
// Buscar en la lista
var miPremio = [];
var enLista = [];
var k0=0, k1=0, k2=0;
var k3=0, k4=0, k5=0;

// Inicializar los premios por billete
for (i = 0; i < 10; i++) {
	miPremio[i] = 0;
	enLista[i] = false;
}

// Buscar en la lista los números de los billetes
// Hay mensaje y felicitación y sonido cuando hay premios de lista
for (i in serieBilletes) {
for (j = 0; j < 929; j++ ) {
	if (laLista[j][2] == "repetido") {
		continue;
	}
	if (serieBilletes[i] == laLista[j][1]) {
		miPremio[i] = laLista[j][2];
		enLista[i] = true;
		if((miPremio[i] > 499) && (miPremio[i] <= 1998)) {			// al ganar $500 o mas, hasta $1998
			k5 = miPremio[i];
			medioAudio();
			//chicoAudio();						
		} else if ((miPremio[i] >= 1999) && (miPremio[i] <= 9998)) { // al ganar el de $2000
			k4 = miPremio[i];
			grandeAudio();
			//chicoAudio();							
		} else if ((miPremio[i] >= 9999) && (miPremio[i] <= 19998)) { // al ganar el de $10000
			k3 = miPremio[i];
			grandeAudio();
			//chicoAudio();							
		} else if ((miPremio[i] >= 19999) && (miPremio[i] <= 99998)) { // al ganar el de $20000
			k2 = miPremio[i];
			grandeAudio();
			//chicoAudio();								
		} else if (miPremio[i] >= 99999) {							// al ganar el premio mayor
			k1 = miPremio[i];
			grandeAudio();
			//chicoAudio();							
		} else { 
			k0 = miPremio[i];
			//grandeAudio();
			//medioAudio();
			chicoAudio();				
			}
		} //close the if
	} // close the j loop
} // close the i loop

// ************* Hay premio de lista!!... Display mensajes  *************
setTimeout(displayAlerts, 800);
function displayAlerts() {
	if (k0 > 0 ) {
		alert("Premio de lista  " + k0);
	}
	if (k5 > 0 ) {
		alert("Felicitaciones, buen premio de lista:  " + k5);	
	}
	if (k4 > 0 ) {
		alert("Bravo!! Felicitaciones!! Cuarto premio:  " + k4);
	}
	if (k3 > 0 ) {
		alert("Bravo!! Felicitaciones!! Tercer premio:  " + k3);	
	}
	if (k2 > 0 ) {
		alert("Bravo!! Bravo!! Felicitaciones!! Segundo premio:  " + k2);		
	}
	if (k1 > 0 ) {
		alert("Bravo!! Bravo!! Felicitaciones!! PREMIO GORDO!!  " + k1);		
	}
	clearTimeout(displayAlerts);
	}

// ***********************  Chequear por terminaciones del primer premio
var miTerminacion;
elPremio = premioGrande[0].toString();
for (i = 0; i < 2; i++) {
	while (elPremio.length < 5) {
		elPremio = "0" + elPremio	}
}
term4 = elPremio.substr(1, 4);
term3 = elPremio.substr(2, 3);
term2 = elPremio.substr(3, 2);
term1 = elPremio.substr(4, 1);

for (i in serieBilletes) {
	if (enLista[i] == true) {  // Si el billete está en lista, ya no se le agrega mas premio
		continue;
	}	
	miTerminacion = serieBilletes[i].substr(1,4); // Chequear por terminación de 4 cifras
	if (miTerminacion == term4) {
		miPremio[i] = miPremio[i] + 100;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(2,3); // chequear por terminación de 3 cifras
	if (miTerminacion == term3) {
		miPremio[i] = miPremio[i] + 80;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(3,2); // chequear por terminación de 2 cifras
	if (miTerminacion == term2) {
		miPremio[i] = miPremio[i] + 40;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(4,1); // chequear por terminación de UNA cifra
	if (miTerminacion == term1) {
		miPremio[i] = miPremio[i] + 35;		
	}
}

/*  Bloque provisional, creado durante los tests del programa
 console.log(otorgado);
 console.log("Enlista?  " + enLista);
 console.log("miTerminacion  " + miTerminacion)
 console.log("Terminación 4 cifras  " + term4);
 console.log("Terminación 3 cifras  " + term3);
 console.log("Terminación 2 cifras  " + term2);
 console.log("Terminación 1 cifras  " + term1);
 console.log(laLista);
 console.log(premioGrande);
*/

// ***********************  Chequear por terminaciones del segundo premio
elPremio = premioGrande[1].toString();
for (i = 0; i < 2; i++) {
	while (elPremio.length < 5) {
		elPremio = "0" + elPremio	}
}
term4 = elPremio.substr(1, 4);
term3 = elPremio.substr(2, 3);
term2 = elPremio.substr(3, 2);
term1 = elPremio.substr(4, 1);

for (i in serieBilletes) {
	if (enLista[i] == true) {  // Si el billete está en lista, ya no se le agrega mas premio
		continue;
	}
	miTerminacion = serieBilletes[i].substr(1,4); // Chequear por terminación de 4 cifras
	if (miTerminacion == term4) {
		miPremio[i] = miPremio[i] + 90;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(2,3); // Chequear por terminación de 3 cifras
	if (miTerminacion == term3) {
		miPremio[i] = miPremio[i] + 70;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(3,2); // Chequear por terminación de 2 cifras
	if (miTerminacion == term2) {
		miPremio[i] = miPremio[i] + 30;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(4,1); // chequear por terminación de UNA cifra
	if (miTerminacion == term1) {
		miPremio[i] = miPremio[i] + 25;		
	}
}

// ***********************  Chequear por terminaciones del tercer premio
elPremio = premioGrande[2].toString();
for (i = 0; i < 2; i++) {
	while (elPremio.length < 5) {
		elPremio = "0" + elPremio	}
}
term4 = elPremio.substr(1, 4);
term3 = elPremio.substr(2, 3);
term2 = elPremio.substr(3, 2);
term1 = elPremio.substr(4, 1);

for (i in serieBilletes) {
	if (enLista[i] == true) {  // Si el billete está en lista, ya no se le agrega mas premio
		continue;
	}
	miTerminacion = serieBilletes[i].substr(1,4); // Chequear por terminación de 4 cifras
	if (miTerminacion == term4) {
		miPremio[i] = miPremio[i] + 90;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(2,3); // Chequear por terminación de 3 cifras
	if (miTerminacion == term3) {
		miPremio[i] = miPremio[i] + 60;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(3,2); // Chequear por terminación de 2 cifras
	if (miTerminacion == term2) {
		miPremio[i] = miPremio[i] + 30;
		continue;
	}
	miTerminacion = serieBilletes[i].substr(4,1); // Chequear por terminación de UNA cifra
	if (miTerminacion == term1) {
		miPremio[i] = miPremio[i] + 25;
		continue;
	}
}

// ********************* Premios por terminación han sido otorgados

/* Bloque provisional, creado durante los tests del programa
console.log("Primer premio  " + primerPremio);
console.log("Segundo premio  " + segundoPremio);
console.log("Tercer premio  " + tercerPremio);
*/

// Display de los resultados del sorteo
document.getElementById("premiobillete1").innerHTML = miPremio[0];
document.getElementById("premiobillete2").innerHTML = miPremio[1];
document.getElementById("premiobillete3").innerHTML = miPremio[2];
document.getElementById("premiobillete4").innerHTML = miPremio[3];
document.getElementById("premiobillete5").innerHTML = miPremio[4];
document.getElementById("premiobillete6").innerHTML = miPremio[5];
document.getElementById("premiobillete7").innerHTML = miPremio[6];
document.getElementById("premiobillete8").innerHTML = miPremio[7];
document.getElementById("premiobillete9").innerHTML = miPremio[8];
document.getElementById("premiobillete10").innerHTML = miPremio[9];

document.getElementById("primerP").innerHTML = primerPremio;
document.getElementById("segundoP").innerHTML = segundoPremio;
document.getElementById("tercerP").innerHTML = tercerPremio;

var total = 0;
for (i = 0; i < 10; i++) {
	total = total + miPremio[i];
}
document.getElementById("balanceCuenta").innerHTML = total;

sorteo = true;  // Bloquear la función correrSorteo() hasta comprar nuevos billetes	
}
//  ************************** Final de la función correrSorteo() ***********	
// **************************************************************************

//Mostrar la lista de premios 
function myFunction() {
	if(sorteo == false) {  //  Si ya corrió el sorteo, favor comprar nuevos billetes
		alert("La nueva lista saldrá después del siguiente sorteo")
		return;
	}
	
	var myWindow = window.open("", "MyWindow", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=300,height=400");
	  myWindow.document.writeln("Habiendo consultado la lista:");
	  myWindow.document.writeln("<br>");
	  myWindow.document.writeln("PC favor cierre esta ventana.");
	  myWindow.document.writeln("<br>");
	  myWindow.document.writeln("Celular, nomás retroceda página.");
	  myWindow.document.writeln("<br>");
	  myWindow.document.writeln("<br>");
	  myWindow.document.writeln("NUMEROS --- PREMIOS");
	  myWindow.document.writeln("<br>");
	for(i = 0; i < 929; i++) {
	  myWindow.document.writeln(laLista[i][1] + " ---------- " + laLista[i][2]);
	  myWindow.document.writeln("<br>");
	  }  	
  }

// Para borrar información del sorteo anterior
function clearfields() {
	document.getElementById("premiobillete1").innerHTML = "";
	document.getElementById("premiobillete2").innerHTML = "";
	document.getElementById("premiobillete3").innerHTML = "";
	document.getElementById("premiobillete4").innerHTML = "";
	document.getElementById("premiobillete5").innerHTML = "";
	document.getElementById("premiobillete6").innerHTML = "";
	document.getElementById("premiobillete7").innerHTML = "";
	document.getElementById("premiobillete8").innerHTML = "";
	document.getElementById("premiobillete9").innerHTML = "";
	document.getElementById("premiobillete10").innerHTML = "";
	
	document.getElementById("primerP").innerHTML = "";
	document.getElementById("segundoP").innerHTML = "";
	document.getElementById("tercerP").innerHTML = "";	
	document.getElementById("balanceCuenta").innerHTML = "";	
}
// Final de función clearfields()

// Función animate() para rotar la tómbola

var img0 = new Image();
	img0.src = "tombola1.jpg";
	
var img1 = new Image();
	img1.src = "tombola2.jpg";
	
var img2 = new Image();
	img2.src = "tombola3.jpg";
	
var img3 = new Image();
	img3.src = "tombola4.jpg";	
	
var nbImg = 4; // change to the number of different images you have
var r = 0;
var s = 0;	

function animate() {
	
	document.images[0].src = eval("img" + r).src;
	r++;
	s++;	
	if (r == nbImg) r=0;		
		junk = setTimeout("animate();", 200); // in milliseconds
		
	if (s >= 7){
		clearTimeout(junk);
			s=0;
		} 
}

function chicoAudio() { 
	var x = document.getElementById("chicoAudio");
	x.volume = 0.5;	
	x.play();  
}

function medioAudio() { 
	var x = document.getElementById("medioAudio");
	x.volume = 0.5;	
	x.play();  
}

function grandeAudio() { 
	var x = document.getElementById("grandeAudio");		
	x.play();  
}
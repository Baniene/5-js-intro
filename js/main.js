"use strict";
//vienos eilutes komentaras

/*
keletos
eiluciu
komentaras
*/


//jei noresime ka nors atsispausdintinti naudojame console.log()
console.log(2021);
console.log('Labas rytas');


/*
reksmiu tipai:
    number
    string (tekstas)
    boolean (logine reiksme)
    array (sarasas)
    object (objektas)
*/

/*
Kintamuju iniciavimo budai:
const (pagrindinis, kuri reikia rinktis bu defalt (pagal nutylejima))
left (jei info keiciais)
var (nenaudoti)
*/

//inicijuoti kintamaji, kuris niekada nesikeis ir bus skaiciuas 2021
const metai = 2021;

//inicijuoti kintamaji, kuris niekada nesikeis ir bus tekstas Petras
const vardas = 'Petras';

console.log(metai);
console.log(vardas);

console.log(metai, vardas);
console.log('Metai:', metai);
console.log('Asmens vardas:',vardas)
console.log('Asmens vardas:', vardas, 'ir jis gyveno:', metai, 'metais.');

const pirmasSkaicius = 13;
const antrasSkaicius = 2;

const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma);
console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);


let adresas ='Vilnius';
console.log(adresas);

adresas = 'Kaunas';
console.log(adresas);

adresas = 'Klaipedos svyturys';
console.log(adresas);


let pinigine = 0;
console.log('Turiu pinigu:', pinigine);

const pirmaAlga = 100;
pinigine = pinigine + pirmaAlga;
console.log('Turiu pinigu:', pinigine);


const antraAlga = 250;
pinigine = pinigine + antraAlga;
console.log('Turiu pinigu:', pinigine);

const treciaAlga = 650;
pinigine = pinigine + treciaAlga;
console.log('Turiu pinigu:', pinigine);

console.log('......');

// matematines operacijos
const s1 = 5;
const s2 = 8;

console.log(s1 + s2);
console.log(s1 - s2);
console.log(s1 * s2);
console.log(s1 / s2);
console.log(s1 ** s2); //kelimas laipsniu

console.log('.......');

//tekstines operacjos

const hi = 'Labas';
const morning = 'rytas';

const sayHi = hi + ' ' + morning;
console.log(sayHi); 

/*
teksto reksme gali buti inicijuojama:
    viengubose kabutese ' '
    dvigubose kabutese ""
    back tick kabutes ' '
    */
    
    //tekste naudojamos dvigubos kabutes
    const dvigubosTekste = 'Tekste naudojamos dvigubos (") kabutes.';
    console.log(dvigubosTekste);

    //tekste naudojamos viengubos kabutes
    const viengubosTekste = "Tekste naudojamos viengubos (') kabutes.";
    console.log(viengubosTekste);

    //tekste naudojamos dvigubos kabutes ir viengubos kabutes
    const abiTekste1 = 'Tekste yra abi kabutes 1 (\') ir 2 (").';
    console.log(abiTekste1);

    const abiTekste2 = "Tekste yra abi kabutes 1 (') ir 2 (\").";
    console.log(abiTekste2);

    const abiTekste12 = 'Tekste yra abi kabutes 1 (\') ir 2 (\").';
    console.log(abiTekste12);

    const abiTekste21 = "Tekste yra abi kabutes 1 (\') ir 2 (\").";
    console.log(abiTekste21);

    const imgSrc = './img/doggo.jpg';
    const h1 = 'Labas rytas';
    const p = 'myliu labai';

            const html = '<main>\n\
                <img src = "'+ imgSrc + '">\n\
                <div>\
                <h1>'+ h1 +'</h1>\n\
                <p>'+ p +'</p>\n\
                </div>\
    </main>';

    
    
    console.log(html);

            const beautifulHTML = '<main>\n\
                <img src = "'+ imgSrc + '">\n\
                <div>\
                <h1>'+ h1 +'</h1>\n\
                <p>'+ p +'</p>\n\
                </div>\n\
    </main>';

    
    console.log(beautifulHTML);

    console.log('------------');

    const person = 'Johnny Boy';
    const candy = 'lolly pop';

    const sentence = '${person} do you want a ${candy}?';
    console.log(sentence);
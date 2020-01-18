// function test() {
 //   document.getElementById("parag") . innerHTML = "NAUCIO SAM JAVASCRIPT";
//}
 

function dugme() {

var ime = document.getElementById("name").value;
var mojePrezime = document.getElementById("surname").value;


document.getElementById("parag") . innerHTML = ime + " " + mojePrezime;
// document.getElementById("parag") . innerHTML = write(sum);
}


function submit() {
var prviBroj = document.getElementById("prviBroj").value;
var drugiBroj = document.getElementById("drugiBroj").value;
var racunanje = document.getElementById("opcije").value;

if(!isNaN(prviBroj&&drugiBroj)){

 
    switch(racunanje){
    case ("+") : racunanje = parseInt(prviBroj)+parseInt(drugiBroj); document.getElementById("rezultat") . innerHTML = racunanje;
    break;

    case "-" : document.getElementById("rezultat") . innerHTML = prviBroj - drugiBroj;
break;

case "*" : document.getElementById("rezultat") . innerHTML = prviBroj * drugiBroj;
break;

case "/" : document.getElementById("rezultat") . innerHTML = prviBroj / drugiBroj;
break;
    
}
} else {
    document.getElementById("rezultat") . innerHTML = "Samo brojevi";
}
}

//case "-" : document.getElementById("rezultat") . innerHTML = prviBroj - drugiBroj;
//break;

//case "*" : document.getElementById("rezultat") . innerHTML = prviBroj * drugiBroj;
//break;

//case "/" : document.getElementById("rezultat") . innerHTML = prviBroj / drugiBroj;
//break;
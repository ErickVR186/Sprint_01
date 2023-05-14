console.log(getTime);
//Carga de Archivos Dinamicamente CSS
document.head.innerHTML +=  `
<link rel="stylesheet" href="./style.css${getTime}">`;
document.head.innerHTML +=  `
<link rel="stylesheet" href="./normalize.css${getTime}">`;





//Accion del boton encriptar
var encriptar = document.getElementById('encriptar');
encriptar.addEventListener('click', function(e){      
    e.preventDefault();
    var textarea = document.getElementById("textbox");
    var datosTextarea = textarea.value;
    
    
    //Mostrar y ocultar texto en div lateral
    var contenidoInicial = document.getElementById("contenidoInicial");
    contenidoInicial.style.display = "none";
    var contenidoFinal = document.getElementById("contenidoFinal");
    contenidoFinal.style.display = "block";

    //Verificacion y codificación del mensaje
    let letras = datosTextarea.split('');
    for(var i=0; i < datosTextarea.length; i++){
        if(letras[i]=='a'){
            letras[i]='ai';
        }else if(letras[i]=='e'){
            letras[i]='enter';
        }
        else if(letras[i]=='i'){
            letras[i]='imes';
        }
        else if(letras[i]=='o'){
            letras[i]='ober';
        }
        else if(letras[i]=='u'){
            letras[i]='ufat';
        }
        
    }
    let union = letras.join('');
    var textoConte = document.getElementById("texto-contenido");
    textoConte.innerHTML=union;
    textarea.value = "";
});

//Acción del boton desencriptar
var desencriptar = document.getElementById('desencriptar');
desencriptar.addEventListener('click', function(e){      
    e.preventDefault();
    var textarea = document.getElementById("textbox");
    var datosTextarea = textarea.value;
    
    //Mostrar y ocultar texto en div lateral
    var contenidoInicial = document.getElementById("contenidoInicial");
    contenidoInicial.style.display = "none";
    var contenidoFinal = document.getElementById("contenidoFinal");
    contenidoFinal.style.display = "block";

    let letras = datosTextarea.split('');
    for(var i=0; i < datosTextarea.length; i++){
        if(letras[i]=='a'){
            letras[i+1]='';
        }else if(letras[i]=='e'){
            letras[i+1]='';
            letras[i+2]='';
            letras[i+3]='';
            letras[i+4]='';
        }
        else if(letras[i]=='i'){
            letras[i+1]='';
            letras[i+2]='';
            letras[i+3]='';
        }
        else if(letras[i]=='o'){
            letras[i+1]='';
            letras[i+2]='';
            letras[i+3]='';
        }
        else if(letras[i]=='u'){
            letras[i+1]='';
            letras[i+2]='';
            letras[i+3]='';
        }
    }
    let union = letras.join('');
    var textoConte = document.getElementById("texto-contenido");
    textoConte.innerHTML=union;
    textarea.value = "";
});

//Acción del boton copiar
var copiar = document.getElementById('copiar-texto');
copiar.addEventListener('click', function(e){      
    e.preventDefault();

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");

    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById("texto-contenido").innerHTML);

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
    document.body.removeChild(aux);
});
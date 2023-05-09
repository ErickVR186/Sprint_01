console.log(getTime);
//Carga de Archivos Dinamicamente CSS
document.head.innerHTML +=  `
<link rel="stylesheet" href="./style.css${getTime}">`;
document.head.innerHTML +=  `
<link rel="stylesheet" href="./normalize.css${getTime}">`;
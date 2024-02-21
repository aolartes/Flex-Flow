const numeros = (a) =>{
    const arreglo = [];
    for(i=1;i<=a;i++){        
        arreglo.push(i);
    }
    return arreglo;
}

const resultadoMostrar = numeros(10);

const contenedoresResultados = document.querySelectorAll('.prue, .prue-row-nowrap, .prue-row-wrap, .prue-wrap-reverse, .prue-reverse-wrap-reverse')

for (var i = 0;i<resultadoMostrar.length;i++){
    console.log(resultadoMostrar[i]);
}


contenedoresResultados.forEach((contenedor) => {
    resultadoMostrar.forEach((resultado)=> {
        const divResultado =  document.createElement("div");
        divResultado.textContent= `${resultado}`;
        divResultado.classList.add("numers");        
        contenedor.appendChild(divResultado);
    });    
});
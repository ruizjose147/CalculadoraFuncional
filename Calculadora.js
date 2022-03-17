const sumar = (x, y) => x + y;


const restar = (x, y) => x - y;


const multiplicar = (x, y) =>{
    if(y==0){
        return 0
    }
    let array = new Array(y);
    return array.fill(x).reduce(sumar)
}


const dividir = (x, y, cociente) => {
    if(x < 0){return restar(cociente, 1);}
    if(y==0){ return "No se puede dividir por cero"}
    return dividir(restar(x, y), y, sumar(cociente,1));
}

function calculadora(){
    const x = +document.getElementById('numx').value;
    const y = +document.getElementById('numy').value;

    let suma = sumar(x, y);
    let resta = restar(x, y);

    const validacionX = (x < 0 ? -1*(x) : x);
    const validacionY = (y < 0 ? -1*(y) : y);

    let multiplicacion = multiplicar(x, validacionY);
    multiplicacion = (y < 0 ? -1*(multiplicacion) : multiplicacion);

    let division = dividir(validacionX, validacionY, 0);
    division = (x*y < 0? -1*(division) : division);   

   
    alert("Suma: " + suma +  "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division); 
}
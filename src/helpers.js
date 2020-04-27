
export function calcularTotal(cantidad, plazo){
    //cantidades
    //0 - 1000 = 25%
    //1001-5000 = 20%
    //5001-10000 = 15%
    // 10000 = 10%    

    let totalcantidad;
   
    if(cantidad<=1000){
        totalcantidad = cantidad * 1.25;
    }else if(cantidad > 1000 && cantidad  <= 5000){
        totalcantidad = cantidad * .20;
    }else if(cantidad > 5000 && cantidad  <= 10000){
        totalcantidad = cantidad * .15;
    }else{
        totalcantidad = cantidad * .10 ;
    }

    console.log(totalcantidad);

    //calcular el plazo
    // 3 = 5%
    //6 = 10%
    //12 = 15%
    //24 = 20%

    let totalPlazo = 0;

    switch(plazo)   {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        
        case 6:
            totalPlazo = cantidad * .10;
            break;
            
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24: 
            totalPlazo = cantidad * .20;
            break;
        default:
            break;
    }
    console.log(totalPlazo);

    return totalPlazo + totalcantidad + cantidad;
}


import React, {Fragment, useState} from 'react';
import {calcularTotal} from '../helpers';

const Formulario = (prosp) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando} = prosp;
    //Definir state
    const [ error, guardarError] = useState(false);
    //Cuando el usuario hace submit
    const calcularPrestamo = e  =>{
        e.preventDefault();

        // Validar
          if( cantidad === 0 ||  plazo === '' ||  !cantidad ){
              //console.log('por favor llena  el  formulario');
              guardarError(true);
              return;
          }else{
              console.log('formulario enviado')
          }

          //eliminar error se corrige
              guardarError(false);
          //habilitar spinner
           guardarCargando(true);

          // cargando spinner
          setTimeout(()=>{

          //realizar cotizacion
          const total = calcularTotal(cantidad , plazo);
       
       
          guardarTotal(total);
          //Desabilitar spinner
          guardarCargando(false);
          },3000);

          
            
        
          

          //console.log(total);
          //una vez calculado, guardarTotal
          
    }    


    return ( 
        <Fragment>
        <form onSubmit ={calcularPrestamo}>
          
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange = {e => guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange = {e => guardarPlazo(parseInt(e.target.value))}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
  
  { (error) ? <p className = "error">Por favor rellena el formulario</p> : null }
  
 </Fragment>
    
    );
}
 
export default Formulario;
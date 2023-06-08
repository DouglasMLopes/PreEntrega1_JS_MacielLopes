// 1 - Calcular el costo total de productos y/o servicios seleccionados por el usuario

function calcularCostoTotal(productos) {
    let costoTotal = 0;
  
    for (let i = 0; i < productos.length; i++) {
      costoTotal += productos[i].precio;
    }
  
    return costoTotal;
}
  
  // Ejemplo de uso
  const productosSeleccionados = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 20 },
    { nombre: "Producto 3", precio: 15 }
  ];
  
  const costoTotal = calcularCostoTotal(productosSeleccionados);
  console.log("Costo Total:", costoTotal);

//   2 - Calcular pagos

function calcularCuotas(monto, cuotas) {
    const montoPorCuota = monto / cuotas;
    return montoPorCuota;
}
  
  // Ejemplo de uso
  const montoTotal = 1000;
  const numeroDeCuotas = 5;
  
  const montoPorCuota = calcularCuotas(montoTotal, numeroDeCuotas);
  console.log("Monto por cuota:", montoPorCuota);
  
//   3 - Calcular el valor final de un producto seleccionado en función de impuestos y descuentos

function calcularValorFinal(precioInicial, impuestos, descuentos) {
    const precioConImpuestos = precioInicial * (1 + impuestos);
    const precioConDescuentos = precioConImpuestos * (1 - descuentos);
    return precioConDescuentos;
}
  
  // Ejemplo de uso
  const precioInicial = 100;
  const impuestos = 0.1;
  const descuentos = 0.2;
  
  const valorFinal = calcularValorFinal(precioInicial, impuestos, descuentos);
  console.log("Valor final:", valorFinal);

//   4 - Calcular el tiempo de espera promedio en relación con la cantidad de turnos registrados:

function calcularTiempoPromedio(tiempoTotal, cantidadTurnos) {
    const tiempoPromedio = tiempoTotal / cantidadTurnos;
    return tiempoPromedio;
}
  
  // Ejemplo de uso
  const tiempoTotal = 120; // en minutos
  const cantidadTurnos = 10;
  
  const tiempoPromedio = calcularTiempoPromedio(tiempoTotal, cantidadTurnos);
  console.log("Tiempo promedio:", tiempoPromedio);

// 5 - Calcular la edad promedio de personas registradas

function calcularEdadPromedio(edades) {
    let sumaEdades = 0;
  
    for (let i = 0; i < edades.length; i++) {
      sumaEdades += edades[i];
    }
  
    const edadPromedio = sumaEdades / edades.length;
    return edadPromedio;
}
  
  // Ejemplo de uso
  const edadesRegistradas = [25, 30, 35, 40, 45];
  
  const edadPromedio = calcularEdadPromedio(edadesRegistradas);
  console.log("Edad promedio:", edadPromedio);

// 6 - Calcular la nota final de alumnos ingresados

function calcularNotaFinal(notas) {
    let sumaNotas = 0;
  
    for (let i = 0; i < notas.length; i++) {
      sumaNotas += notas[i];
    }

    const notaFinal = sumaNotas / notas.length;
    return notaFinal;
}
 // Ejemplo de uso
const notasAlumnos = [85, 90, 75, 95, 80];

const notaFinal = calcularNotaFinal(notasAlumnos);
console.log("Nota final promedio:", notaFinal); 
  
  
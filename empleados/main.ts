import { Empleado } from "./empleados";

let emps = new Array<Empleado>();

emps.push(new Empleado("Pepe",500,"Perez"));
emps.push(new Empleado("Juan",300,"Sanchez"));

for(let emp of emps){
    console.log(emp.toString());
}

emps.forEach(emp=>{console.log(emp.toString());})
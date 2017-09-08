"use strict";
exports.__esModule = true;
var empleados_1 = require("./empleados");
var emps = new Array();
emps.push(new empleados_1.Empleado("Pepe", 500, "Perez"));
emps.push(new empleados_1.Empleado("Juan", 300, "Sanchez"));
for (var _i = 0, emps_1 = emps; _i < emps_1.length; _i++) {
    var emp = emps_1[_i];
    console.log(emp.toString());
}
emps.forEach(function (emp) { console.log(emp.toString()); });

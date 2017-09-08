"use strict";
exports.__esModule = true;
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario, apellido) {
        this.nombre = nombre;
        this.salario = salario;
        this.apellido = apellido;
    }
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.getApellido = function () {
        return this.apellido;
    };
    Empleado.prototype.getSalario = function () {
        return this.salario;
    };
    Empleado.prototype.toString = function () {
        //return "Nombre"+this.nombre+
        //"Apellido"+this.apellido+
        //"Salario"+this.salario;
        //Interpolacion.....
        return "Nombre " + this.nombre + "\n                Apellido " + this.apellido + "\n                Salario " + this.salario + "\n                ";
    };
    return Empleado;
}());
exports.Empleado = Empleado;

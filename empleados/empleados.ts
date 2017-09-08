export class Empleado{
    private nombre:string;
    private apellido:string;
    private salario:number;

    constructor(nombre:string,salario:number,apellido?:string){ //el apellido es opcional con ?
        this.nombre=nombre;
        this.salario=salario;
        this.apellido=apellido;
    }
    getNombre():string{
        return this.nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    getSalario():number{
        return this.salario;
    }
    toString(){
        //return "Nombre"+this.nombre+
        //"Apellido"+this.apellido+
        //"Salario"+this.salario;

        //Interpolacion.....
        return `Nombre ${this.nombre}
                Apellido ${this.apellido}
                Salario ${this.salario}
                `;
    }

}
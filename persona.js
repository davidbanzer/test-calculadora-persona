class Persona {
    constructor() {
        this.nombre = "";
        this.peso = 0.0;
        this.altura = 0.0;
        this.imc = 0.0;
    }

    retornarPeso(){
        return this.peso + " kg";
    }

    retornarAltura(){
        return this.altura + " m";
    }
}

module.exports = Persona;
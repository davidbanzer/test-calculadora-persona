class Calculadora {
    
    calcularIMC(altura, peso){
        return (peso/altura  ** 2 );
    }

    retornarRango(imc){
        let resultado = "";
        if(imc < 18.5){
            resultado = "BAJO PESO";
        } else if(imc >= 18.5 && imc < 24.9){
            resultado = "SALUDABLE";
        } else if(imc >= 25.0 && imc <29.9){
            resultado = "SOBREPESO";
        } else if(imc >= 30.0){
            resultado = "OBESIDAD";
        } else {
            resultado = "INGRESE UN NÚMERO VÁLIDO";
        }

        return resultado;
    }
}
module.exports = Calculadora;
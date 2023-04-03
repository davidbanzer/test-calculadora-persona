const Calculadora = require("./Calculadora");
const Persona = require("./persona");
let calculadoraIMC = new Calculadora();
let persona = new Persona();


describe("Métodos de la calculadora IMC", function () {
    test("El método calcularIMC() debe retornar el IMC", function () {
        // Ejemplo del word
        persona.altura = "1.65";
        persona.peso = "68"
        expect(calculadoraIMC.calcularIMC(persona.altura, persona.peso)).toBeCloseTo(24.98);

        persona.altura = "1.70";
        persona.peso = "50";
        expect(calculadoraIMC.calcularIMC(persona.altura, persona.peso)).toBeCloseTo(17.3);

        persona.altura = "1.70";
        persona.peso = "70";
        expect(calculadoraIMC.calcularIMC(persona.altura, persona.peso)).toBeCloseTo(24.22);

        persona.altura = "1.70";
        persona.peso = "85";
        expect(calculadoraIMC.calcularIMC(persona.altura, persona.peso)).toBeCloseTo(29.41);

        persona.altura = "1.70";
        persona.peso = "100";
        expect(calculadoraIMC.calcularIMC(persona.altura, persona.peso)).toBeCloseTo(34.6);

        
    });

    test("El método retornarRango() debe retornar el rango del IMC", function () {
        expect(calculadoraIMC.retornarRango(17)).toBe("BAJO PESO");
        expect(calculadoraIMC.retornarRango(18.5)).toBe("SALUDABLE");
        expect(calculadoraIMC.retornarRango(25)).toBe("SOBREPESO");
        expect(calculadoraIMC.retornarRango(30)).toBe("OBESIDAD");
        expect(calculadoraIMC.retornarRango("hola")).toBe("INGRESE UN NÚMERO VÁLIDO");
    });
});

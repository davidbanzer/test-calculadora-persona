const Persona = require("./Persona");
let persona = new Persona();

describe("Propiedades inciales de persona:", function () {
  test("La propiedad nombre debe ser una cadena vacía", function () {
    expect(persona.nombre).toBe("");
  });

  test("Las propiedades altura, peso e imc deben ser 0.0", function () {
    expect(persona.altura).toBe(0.0);
    expect(persona.peso).toBe(0.0);
    expect(persona.imc).toBe(0.0);
  });
});

describe("Métodos de persona:", function () {
  test("El método retornarPeso() debe retornar el peso de la persona", function () {
    persona.peso = 50.0;
    expect(persona.retornarPeso()).toBe("50 kg");
  });

  test("El método retornarAltura() debe retornar la altura de la persona", function () {
    persona.altura = 1.70;
    expect(persona.retornarAltura()).toBe("1.7 m");
  });
});
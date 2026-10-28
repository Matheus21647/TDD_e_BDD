const CalculadoraDescontoTDD = require("../js/CalculadoraDescontoTDD");

describe("Regra 1: desconto de 10% acima de R$ 500", () => {
  test("compra de R$ 600 deve custar R$ 540", () => {
    const calc = new CalculadoraDescontoTDD();
    expect(calc.calcularValorFinal(600)).toBe(540);
  });

  // NOVO: segundo teste, dentro do mesmo describe
  test("compra de R$ 1000 deve custar R$ 900", () => {
    const calc = new CalculadoraDescontoTDD();
    expect(calc.calcularValorFinal(1000)).toBe(900);
  });
});
/*
 * Regras de negócio:
 *  1. Total > R$ 500   -> 10% de desconto
 *  2. Total > R$ 1000  -> 20% de desconto (substitui o de 10%, não soma)
 *  3. Cliente VIP      -> +5% sobre o valor JÁ com desconto
 *  4. Valor após descontos < R$ 100 -> frete fixo de R$ 15
 *  5. Total de itens <= 0 -> lança exceção de argumento inválido
 */
class CalculadoraDescontoTradicional {
  // Constantes nomeadas: evitam "números mágicos" espalhados pelo código
  static LIMITE_DESCONTO_10 = 500;
  static LIMITE_DESCONTO_20 = 1000;
  static LIMITE_FRETE = 100;
  static VALOR_FRETE = 15;
  static DESCONTO_VIP = 0.05;

  /**
   * Calcula o valor final do pedido.
   * @param {number} valorTotalItens soma dos itens, sem desconto
   * @param {boolean} clienteVip true se o cliente é da categoria VIP
   * @returns {number} valor final já com descontos e frete
   */
  calcularValorFinal(valorTotalItens, clienteVip = false) {
    return this.detalhar(valorTotalItens, clienteVip).total;
  }

  /**
   * Mesma lógica, mas devolve cada etapa do cálculo.
   * A tela do carrinho usa isso para mostrar o resumo do pedido.
   */
  detalhar(valorTotalItens, clienteVip = false) {
    
    if (typeof valorTotalItens !== "number" || Number.isNaN(valorTotalItens) || valorTotalItens <= 0) {
      throw new RangeError("Valor total dos itens deve ser maior que zero.");
    }

    // Regras 1 e 2: faixa de desconto checa a maior faixa primeiro!
    let percentual = 0;
    if (valorTotalItens > CalculadoraDescontoTradicional.LIMITE_DESCONTO_20) {
      percentual = 0.2;
    } else if (valorTotalItens > CalculadoraDescontoTradicional.LIMITE_DESCONTO_10) {
      percentual = 0.1;
    }
    let valor = valorTotalItens * (1 - percentual);

    // Regra 3: VIP 
    if (clienteVip) {
      valor = valor * (1 - CalculadoraDescontoTradicional.DESCONTO_VIP);
    }
    const valorAposDescontos = this.#arredondar(valor);

    // Regra 4: frete é decidido pelo valor apos descontos
    const frete =
      valorAposDescontos < CalculadoraDescontoTradicional.LIMITE_FRETE
        ? CalculadoraDescontoTradicional.VALOR_FRETE
        : 0;

    return {
      subtotal: valorTotalItens,
      percentualDesconto: percentual,
      clienteVip,
      valorAposDescontos,
      frete,
      total: this.#arredondar(valorAposDescontos + frete),
    };
  }

  // Dinheiro com 2 casas
  #arredondar(valor) {
    return Math.round(valor * 100) / 100;
  }
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = CalculadoraDescontoTradicional;
}

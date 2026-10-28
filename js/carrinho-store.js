// "Banco" do carrinho: guarda no localStorage para as duas páginas compartilharem
const Carrinho = {
  chave: "carrinho-loja",

  listar() {
    try {
      return JSON.parse(localStorage.getItem(this.chave)) || [];
    } catch {
      return [];
    }
  },

  salvar(itens) {
    localStorage.setItem(this.chave, JSON.stringify(itens));
  },

  adicionar(produto) {
    const itens = this.listar();
    const existente = itens.find((i) => i.id === produto.id);
    if (existente) existente.qtd += 1;
    else itens.push({ id: produto.id, nome: produto.nome, preco: produto.preco, qtd: 1 });
    this.salvar(itens);
  },

  alterarQtd(id, delta) {
    // remove o item quando a quantidade chega a 0
    const itens = this.listar()
      .map((i) => (i.id === id ? { ...i, qtd: i.qtd + delta } : i))
      .filter((i) => i.qtd > 0);
    this.salvar(itens);
  },

  remover(id) {
    this.salvar(this.listar().filter((i) => i.id !== id));
  },

  totalItens() {
    return this.listar().reduce((soma, i) => soma + i.qtd, 0);
  },

  // Soma bruta (preço x quantidade), ainda SEM descontos — é o que a calculadora recebe
  subtotal() {
    return this.listar().reduce((soma, i) => soma + i.preco * i.qtd, 0);
  },
};

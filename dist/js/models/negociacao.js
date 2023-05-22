//método construtor para deixar os atributos privados, usando o #; Por ser um método privado, preciso criar getters para leitura dos dados
class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
export default Negociacao;

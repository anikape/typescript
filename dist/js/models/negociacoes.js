//esse arquivo vai encapsular a lista de negociação e não deixar que dados sejam removidos
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        //esse array vai guardar a lista de negociação, preciso declarar qual o tipo de array e o que ele vai armazenar
        //por ser um método privado, precisamos criar um método que recebe negociacoes como parametro para poder fazer o push no array
    }
}

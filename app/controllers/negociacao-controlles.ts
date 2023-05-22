import Negociacao from "../models/negociacao.js"

export class NegociacaoController{
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
 

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  adiciona(): void{

    const negociacao = this.criaNegociacao();
 
        console.log(negociacao)
    //limpando o formulário
    this.limpaFormulario();
  }
 
    criaNegociacao(): Negociacao{
      const exp = /-/g;
      const date = new Date(this.inputData.value.replace(exp, ','))
      const quantidade = parseInt(this.inputQuantidade.value)
      const valor = parseFloat(this.inputValor.value)

     return new Negociacao(
        date, quantidade, valor
          )

    }

    limpaFormulario(): void{
      this.inputData.value = ""
      this.inputQuantidade.value = ""
      this.inputValor.value = ""
      this.inputData.focus();
      //trago o foco pra data
    }

}

//pegando os inputs do html

//O para pegar o value precisamos fazer uma pré conversão, pois são lidos como strings, para data, primeiro trocamos a (,) por (-)por meio pra expressão regular, poderia por direto no replace tb